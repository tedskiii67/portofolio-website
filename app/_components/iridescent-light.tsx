"use client";

import { useEffect } from "react";

/** Move light across the glass without rerendering the page or moving content. */
export function IridescentLight() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let active: HTMLElement | null = null;
    let frame = 0;
    let next: { target: HTMLElement | null; x: number; y: number } | null = null;

    function reset() {
      if (!active) return;
      active.removeAttribute("data-lit");
      active.style.removeProperty("--foil-x");
      active.style.removeProperty("--foil-y");
      active.style.removeProperty("--foil-angle");
      active = null;
    }

    function update() {
      frame = 0;
      if (reducedMotion.matches || !finePointer.matches || !next) {
        reset();
        return;
      }
      if (active !== next.target) reset();
      active = next.target;
      if (!active) return;
      const rect = active.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((next.x - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((next.y - rect.top) / rect.height) * 100));
      active.style.setProperty("--foil-x", `${x}%`);
      active.style.setProperty("--foil-y", `${y}%`);
      active.style.setProperty("--foil-angle", `${115 + x * .45 - y * .25}deg`);
      active.setAttribute("data-lit", "");
    }

    function move(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      next = {
        target: event.target instanceof Element ? event.target.closest<HTMLElement>(".glass") : null,
        x: event.clientX,
        y: event.clientY,
      };
      if (!frame) frame = requestAnimationFrame(update);
    }

    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    reducedMotion.addEventListener("change", reset);
    finePointer.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      reset();
      document.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      reducedMotion.removeEventListener("change", reset);
      finePointer.removeEventListener("change", reset);
    };
  }, []);

  return null;
}
