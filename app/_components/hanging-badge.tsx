"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export function HangingBadge({ children }: { children: ReactNode }) {
  const scene = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const cord = useRef<SVGSVGElement>(null);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const geometry = useRef({ width: 300, height: 200, start: 150, length: 200, rest: 0, min: -.4, max: .4 });
  const motion = useRef({ angle: 0, velocity: 0 });
  const pointer = useRef<{ id: number; x: number; y: number; time: number } | null>(null);
  const frame = useRef(0);

  const coordinates = useCallback(() => {
    const g = geometry.current;
    const angle = g.rest + motion.current.angle;
    return { x: g.start + Math.sin(angle) * g.length - g.width / 2, y: Math.cos(angle) * g.length - g.height };
  }, []);

  const draw = useCallback(() => {
    const { x, y } = coordinates();
    const { width, height, start } = geometry.current;
    const end = width / 2 + x;
    const bottom = height + y;
    if (card.current) card.current.style.transform = `translate(${x}px, ${y}px) rotate(${-motion.current.angle * 180 / Math.PI}deg)`;
    paths.current.forEach((path, index) => {
      const offset = index === 0 ? -8 : 8;
      path?.setAttribute("d", `M ${start + offset} 0 C ${start + (end - start) * .28 + offset} ${bottom * .35}, ${start + (end - start) * .72 + offset} ${bottom * .75}, ${end + offset * .3} ${bottom}`);
    });
  }, [coordinates]);

  const stop = useCallback(() => {
    cancelAnimationFrame(frame.current);
    motion.current = { angle: 0, velocity: 0 };
    draw();
  }, [draw]);

  function release(cancelled = false) {
    const last = pointer.current;
    if (cancelled || (last && performance.now() - last.time > 100)) motion.current.velocity = 0;
    pointer.current = null;
    card.current?.removeAttribute("data-dragging");
    cancelAnimationFrame(frame.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stop();
      return;
    }
    let previous = performance.now();
    function tick(now: number) {
      const dt = Math.min((now - previous) / 1000, .032);
      previous = now;
      const p = motion.current;
      const g = geometry.current;
      // Angular gravity and light damping preserve momentum through several swings.
      p.velocity = (p.velocity - 3.8 * Math.sin(p.angle) * dt) * Math.exp(-.72 * dt);
      p.angle += p.velocity * dt;
      if (p.angle < g.min || p.angle > g.max) {
        p.angle = clamp(p.angle, g.min, g.max);
        p.velocity *= -.35;
      }
      if (Math.abs(p.angle) + Math.abs(p.velocity) < .002) {
        stop();
        return;
      }
      draw();
      frame.current = requestAnimationFrame(tick);
    }
    frame.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    function measure() {
      if (!scene.current || !cord.current) return;
      const rect = scene.current.getBoundingClientRect();
      const height = Math.max(1, rect.top + window.scrollY);
      const mobile = window.innerWidth <= 700;
      const start = mobile ? rect.width + 12 : rect.width / 2;
      const restX = rect.width / 2 - start;
      const length = Math.hypot(restX, height);
      const rest = Math.atan2(restX, height);
      const reach = mobile ? 95 : 260;
      // Keep room for the tilted card at the viewport edges.
      const left = Math.max(0, Math.min(reach, rect.left - 25));
      const right = Math.max(0, Math.min(reach, document.documentElement.clientWidth - rect.right - 25));
      const min = Math.max(-.55, Math.asin(clamp((restX - left) / length, -.95, .95)) - rest);
      const max = Math.min(.55, Math.asin(clamp((restX + right) / length, -.95, .95)) - rest);
      geometry.current = { width: rect.width, height, start, length, rest, min, max };
      motion.current.angle = clamp(motion.current.angle, min, max);
      cord.current.style.top = `-${height}px`;
      cord.current.style.height = `${length + 60}px`;
      cord.current.setAttribute("viewBox", `0 0 ${rect.width} ${length + 60}`);
      cord.current.style.visibility = "visible";
      draw();
    }
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    if (scene.current) observer.observe(scene.current);
    window.addEventListener("resize", measure);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => { if (reducedMotion.matches) stop(); };
    reducedMotion.addEventListener("change", onMotionChange);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      reducedMotion.removeEventListener("change", onMotionChange);
      cancelAnimationFrame(frame.current);
    };
  }, [draw, stop]);

  return (
    <div className="hero-scene hanging-scene">
      <div className="lanyard-scene" ref={scene}>
        <svg ref={cord} className="lanyard-cord" aria-hidden="true" preserveAspectRatio="none">
          {[0, 1].map((index) => <path key={index} ref={(node) => { paths.current[index] = node; }} />)}
        </svg>
        <div ref={card} className="lanyard-card" role="button" tabIndex={0}
          aria-label="Drag and release Theo’s badge to swing it. Use arrow keys to swing, or Escape to stop."
          onDragStart={(event) => event.preventDefault()}
          onPointerDown={(event) => {
            if (!event.isPrimary || event.button !== 0) return;
            cancelAnimationFrame(frame.current);
            const { x, y } = coordinates();
            pointer.current = { id: event.pointerId, x: event.clientX - x, y: event.clientY - y, time: performance.now() };
            motion.current.velocity = 0;
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.setAttribute("data-dragging", "");
            event.currentTarget.focus({ preventScroll: true });
          }}
          onPointerMove={(event) => {
            const start = pointer.current;
            if (!start || event.pointerId !== start.id) return;
            const g = geometry.current;
            const now = performance.now();
            const dt = Math.max((now - start.time) / 1000, .008);
            const angle = clamp(Math.atan2(g.width / 2 - g.start + event.clientX - start.x,
              Math.max(40, g.height + event.clientY - start.y)) - g.rest, g.min, g.max);
            motion.current.velocity = clamp((angle - motion.current.angle) / dt, -1.4, 1.4);
            motion.current.angle = angle;
            start.time = now;
            draw();
          }}
          onPointerUp={(event) => {
            if (pointer.current?.id !== event.pointerId) return;
            release();
            if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={() => release(true)}
          onLostPointerCapture={() => { if (pointer.current) release(true); }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              const id = pointer.current?.id;
              pointer.current = null;
              event.currentTarget.removeAttribute("data-dragging");
              if (id !== undefined && event.currentTarget.hasPointerCapture(id)) event.currentTarget.releasePointerCapture(id);
              stop();
              return;
            }
            if (pointer.current) return;
            if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", " "].includes(event.key)) {
              event.preventDefault();
              const g = geometry.current;
              motion.current.angle = event.key === "ArrowLeft" ? g.min * .8 : g.max * .8;
              motion.current.velocity = 0;
              release();
            }
          }}>
          <span className="lanyard-clip" aria-hidden="true" />
          {children}
        </div>
      </div>
    </div>
  );
}
