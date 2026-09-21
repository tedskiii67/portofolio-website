"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value));
const radians = (value: number) => value * Math.PI / 180;
const MAX_TILT = 55;

// A top-mounted swivel keeps the lanyard attached while the badge rotates with inertia.
export function HangingBadge({ children, back }: { children: ReactNode; back: ReactNode }) {
  const stage = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const cord = useRef<SVGSVGElement>(null);
  const cordPaths = useRef<(SVGPathElement | null)[]>([]);
  const anchor = useRef({ width: 0, height: 0 });
  const frame = useRef(0);
  const motion = useRef({ x: -6, y: -12, vx: 0, vy: 0 });
  const pointer = useRef<{ id: number; x: number; y: number; time: number } | null>(null);
  const backVisible = useRef(false);
  const [flipped, setFlipped] = useState(false);
  const [dragging, setDragging] = useState(false);

  const draw = useCallback(() => {
    const m = motion.current;
    if (stage.current) {
      stage.current.style.transform = `rotateX(${m.x}deg) rotateY(${m.y}deg)`;
      stage.current.style.setProperty("--foil-x", `${50 + Math.sin(radians(m.y)) * 35}%`);
      stage.current.style.setProperty("--foil-y", `${50 + Math.sin(radians(m.x)) * 35}%`);
    }
    const { width, height } = anchor.current;
    const center = width / 2;
    const twist = Math.cos(radians(m.y));
    const bend = Math.sin(radians(m.y)) * 10;
    cordPaths.current.forEach((path, index) => {
      const offset = index === 0 ? -7 : 7;
      path?.setAttribute("d", `M ${center + offset} 0 C ${center + offset} ${height * .45}, ${center + bend + offset * twist} ${height * .84}, ${center + offset * .35 * twist} ${height}`);
    });
    const isBack = Math.cos(radians(m.x)) * Math.cos(radians(m.y)) < 0;
    if (isBack !== backVisible.current) {
      backVisible.current = isBack;
      setFlipped(isBack);
    }
  }, []);

  const animate = useCallback((target?: { x: number; y: number }) => {
    cancelAnimationFrame(frame.current);
    const m = motion.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (target) { m.x = target.x; m.y = target.y; }
      else { m.x = 0; m.y = Math.round(m.y / 180) * 180; }
      m.vx = m.vy = 0;
      draw();
      return;
    }
    let previous = performance.now();
    let restingYaw: number | null = null;
    const tick = (now: number) => {
      const dt = Math.min((now - previous) / 1000, .032);
      previous = now;
      if (target) {
        m.vx += (target.x - m.x) * 85 * dt;
        m.vy += (target.y - m.y) * 85 * dt;
      } else {
        // Gravity brings pitch back down; a slow swivel rests on a readable face.
        m.vx -= m.x * 36 * dt;
        if (restingYaw === null && Math.abs(m.vy) < 35) restingYaw = Math.round(m.y / 180) * 180;
        if (restingYaw !== null) m.vy += (restingYaw - m.y) * 18 * dt;
      }
      const damping = Math.exp(-(target ? 16 : 3.5) * dt);
      m.vx *= damping;
      m.vy *= damping;
      const nextTilt = m.x + m.vx * dt;
      m.x = clamp(nextTilt, MAX_TILT);
      if (Math.abs(nextTilt) > MAX_TILT) m.vx *= -.2;
      m.y += m.vy * dt;
      draw();
      const distance = target ? Math.abs(target.x - m.x) + Math.abs(target.y - m.y) : Math.abs(m.x) + (restingYaw === null ? 180 : Math.abs(restingYaw - m.y));
      if (Math.abs(m.vx) + Math.abs(m.vy) < .25 && distance < .1) {
        if (target) { m.x = target.x; m.y = target.y; }
        else { m.x = 0; m.y = restingYaw ?? m.y; }
        m.vx = m.vy = 0;
        draw();
        return;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }, [draw]);

  const reset = () => {
    const m = motion.current;
    animate({ x: Math.round(m.x / 360) * 360, y: Math.round(m.y / 360) * 360 });
  };

  const flip = () => {
    const m = motion.current;
    const side = backVisible.current ? 0 : 180;
    animate({ x: Math.round(m.x / 360) * 360, y: Math.round((m.y - side) / 360) * 360 + side });
  };

  const release = (cancelled = false) => {
    if (!pointer.current) return;
    if (cancelled || performance.now() - pointer.current.time > 100) {
      motion.current.vx = motion.current.vy = 0;
    }
    pointer.current = null;
    setDragging(false);
    animate();
  };

  useEffect(() => {
    const measure = () => {
      if (!card.current || !cord.current) return;
      const rect = card.current.getBoundingClientRect();
      const height = Math.max(1, rect.top + window.scrollY);
      anchor.current = { width: rect.width, height };
      cord.current.style.top = `-${height}px`;
      cord.current.style.height = `${height}px`;
      cord.current.setAttribute("viewBox", `0 0 ${rect.width} ${height}`);
      cord.current.style.visibility = "visible";
      draw();
    };
    const observer = new ResizeObserver(measure);
    if (card.current) observer.observe(card.current);
    observer.observe(document.body);
    window.addEventListener("resize", measure);
    measure();
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      if (query.matches) {
        cancelAnimationFrame(frame.current);
        motion.current.vx = motion.current.vy = 0;
        motion.current.x = 0;
        motion.current.y = Math.round(motion.current.y / 180) * 180;
        draw();
      }
    };
    query.addEventListener("change", onChange);
    return () => { cancelAnimationFrame(frame.current); query.removeEventListener("change", onChange); observer.disconnect(); window.removeEventListener("resize", measure); };
  }, [draw]);

  return (
    <div className="hero-scene inspect-scene">
      <div ref={card} className="inspect-card" role="button" tabIndex={0}
        aria-label={`Theo’s 3D badge, ${flipped ? "back" : "front"} side. Drag to rotate freely. Arrow keys rotate, Enter flips, Escape resets.`}
        aria-pressed={flipped} data-dragging={dragging || undefined}
        onDragStart={event => event.preventDefault()}
        onPointerDown={event => {
          if (!event.isPrimary || event.button !== 0) return;
          cancelAnimationFrame(frame.current);
          motion.current.vx = motion.current.vy = 0;
          pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY, time: performance.now() };
          setDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
          event.currentTarget.focus({ preventScroll: true });
        }}
        onPointerMove={event => {
          const p = pointer.current;
          if (!p || p.id !== event.pointerId) return;
          const now = performance.now();
          const dt = Math.max((now - p.time) / 1000, .008);
          const dx = (event.clientX - p.x) * .8;
          const dy = -(event.clientY - p.y) * .65;
          motion.current.y += dx;
          motion.current.x = clamp(motion.current.x + dy, MAX_TILT);
          motion.current.vy = clamp(dx / dt, 480);
          motion.current.vx = clamp(dy / dt, 480);
          p.x = event.clientX; p.y = event.clientY; p.time = now;
          draw();
        }}
        onPointerUp={event => {
          if (pointer.current?.id !== event.pointerId) return;
          release();
          if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => release(true)}
        onLostPointerCapture={() => release(true)}
        onKeyDown={event => {
          if (pointer.current) return;
          if (["Enter", " ", "Escape", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) event.preventDefault();
          if (event.key === "Enter" || event.key === " ") flip();
          else if (event.key === "Escape") reset();
          else if (event.key.startsWith("Arrow")) {
            const m = motion.current;
            animate({ x: clamp(m.x + (event.key === "ArrowUp" ? 30 : event.key === "ArrowDown" ? -30 : 0), MAX_TILT), y: m.y + (event.key === "ArrowRight" ? 40 : event.key === "ArrowLeft" ? -40 : 0) });
          }
        }}>
        <svg ref={cord} className="lanyard-cord" aria-hidden="true" preserveAspectRatio="none">
          {[0, 1].map(index => <path key={index} ref={node => { cordPaths.current[index] = node; }} />)}
        </svg>
        <span className="lanyard-clip" aria-hidden="true" />
        <div ref={stage} className="badge-flip-stage inspect-stage">
          <div className="badge-face badge-face-front" aria-hidden={flipped} inert={flipped}>{children}</div>
          <div className="badge-face badge-face-back glass" aria-hidden={!flipped} inert={!flipped}>{back}</div>
        </div>
      </div>
      <div className="badge-controls">
        <button type="button" className="badge-examine" onClick={flip}>Flip card <span aria-hidden="true">↻</span></button>
        <button type="button" className="badge-examine" onClick={reset}>Reset view</button>
      </div>
      <p className="badge-gesture-hint">Drag to explore · release to let it spin</p>
    </div>
  );
}
