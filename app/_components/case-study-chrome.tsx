"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { CaseStudyImage, CaseStudySection } from "../content";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = (value: number) => String(value).padStart(2, "0");

/** Calls `onFrame` at most once per animation frame while the page scrolls or resizes. */
function useScrollFrame(onFrame: () => void) {
  const callback = useRef(onFrame);
  useEffect(() => { callback.current = onFrame; });
  useEffect(() => {
    let frame = 0;
    const schedule = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; callback.current(); }); };
    callback.current();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
}

/** An iridescent bar along the top edge that fills as you read. */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useScrollFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    barRef.current?.style.setProperty("transform", `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`);
  });
  return <div ref={barRef} className="reading-progress" aria-hidden="true" />;
}

/** Sticky chapter list that highlights the section currently being read. */
export function CaseStudyToc({ sections }: { sections: CaseStudySection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-20% 0px -60% 0px" });
    for (const { id } of sections) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="case-toc" aria-label="Case study sections">
      <p className="case-toc-label">CHAPTERS</p>
      {sections.map((section, index) => (
        <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined}>
          <span>{pad(index + 1)}</span>{section.label}
        </a>
      ))}
    </nav>
  );
}

/**
 * Fades `[data-reveal]` elements in as they enter the viewport. Content stays visible
 * without JavaScript or with reduced motion, because hiding only starts once this runs.
 */
export function ScrollReveal() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".case-page");
    if (!page || prefersReducedMotion()) return;
    page.setAttribute("data-reveal-ready", "");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        // Also reveal anything already scrolled past (e.g. after jumping to a chapter link).
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          entry.target.setAttribute("data-inview", "");
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px" });
    page.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      page.removeAttribute("data-reveal-ready");
    };
  }, []);
  return null;
}

/** A pinned sentence whose words light up one by one as you scroll through it. */
export function ScrollStatement({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // null = everything lit (server render, no JS).
  const [lit, setLit] = useState<number | null>(null);
  const words = text.split(/\s+/).map((word) => ({ word: word.replace(/\*/g, ""), accent: word.startsWith("*") }));

  useScrollFrame(() => {
    const element = ref.current;
    if (!element) return;
    if (prefersReducedMotion()) { setLit(null); return; }
    const rect = element.getBoundingClientRect();
    const travel = rect.height - window.innerHeight;
    const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : rect.top < window.innerHeight / 2 ? 1 : 0;
    // Finish lighting a little before the end so the full sentence rests on screen.
    setLit(Math.round(Math.min(1, progress * 1.25) * words.length));
  });

  return (
    <div ref={ref} className="scroll-statement">
      <div className="scroll-statement-sticky">
        <p className="scroll-statement-text">
          {words.map(({ word, accent }, index) => (
            <span key={index} data-accent={accent ? "" : undefined} data-lit={lit === null || index < lit ? "" : undefined}>{word} </span>
          ))}
        </p>
      </div>
    </div>
  );
}

function CountUp({ value, decimals = 0, run }: { value: number; decimals?: number; run: boolean | null }) {
  const [shown, setShown] = useState(value);
  useEffect(() => {
    if (run === null) return;
    let frame = 0;
    if (!run) {
      frame = requestAnimationFrame(() => setShown(0));
      return () => cancelAnimationFrame(frame);
    }
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1400);
      setShown(value * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);
  return <>{shown.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</>;
}

/** Stat cards whose numbers count up the first time they scroll into view. */
export function StatGrid({ stats }: { stats: NonNullable<CaseStudySection["stats"]> }) {
  const ref = useRef<HTMLDivElement>(null);
  // null = show final values (server, no JS, reduced motion); false = waiting at zero; true = counting.
  const [run, setRun] = useState<boolean | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;
    // Only reset to zero while the stats are still below the fold, so nothing visibly flickers.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    const observer = new IntersectionObserver(([entry]) => {
      setRun(entry.isIntersecting);
      if (entry.isIntersecting) observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="case-stats">
      {stats.map((stat, index) => (
        <div className="glass case-stat" key={stat.label} data-reveal style={{ "--i": index } as CSSProperties}>
          <strong>
            {stat.prefix}<CountUp value={stat.value} decimals={stat.decimals} run={run} />
            {stat.suffix && <small>{stat.suffix}</small>}
          </strong>
          <span>{stat.label}</span>
          {stat.source && <em>{stat.source}</em>}
        </div>
      ))}
    </div>
  );
}

export type ScrollyStep = { kicker?: string; title?: string; text?: string; image: CaseStudyImage & { src: string } };

/** Scrollytelling sequence: the image stays pinned while story cards scroll past and swap it. */
export function ScrollySteps({ steps, label }: { steps: ScrollyStep[]; label: string }) {
  const [active, setActive] = useState(0);
  // Load every frame once the sequence is near, so swaps are instant and a jump-link never lands on a blank frame.
  const [near, setNear] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLOListElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const ratio = Math.max(...steps.map((step) => (step.image.height ?? 900) / (step.image.width ?? 1600)));

  // Read the active step straight from scroll position: the last step whose top has passed the
  // middle of the screen. More reliable across browsers than a thin IntersectionObserver band.
  useScrollFrame(() => {
    const root = rootRef.current;
    const container = stepsRef.current;
    const media = mediaRef.current;
    if (!root || !container || !media) return;
    // Where the pinned block ends on screen; the last step uses it to hold the final frame (see CSS).
    root.style.setProperty("--scrolly-stick", `${parseFloat(getComputedStyle(media).top) + media.offsetHeight}px`);
    const line = window.innerHeight * 0.5;
    if (root.getBoundingClientRect().top < window.innerHeight * 2.5) setNear(true);
    let current = 0;
    container.querySelectorAll<HTMLElement>("[data-step]").forEach((step, index) => {
      if (step.getBoundingClientRect().top <= line) current = index;
    });
    setActive(current);
  });

  return (
    <div className="scrolly" role="group" aria-label={label} ref={rootRef}>
      <div className="scrolly-media" ref={mediaRef}>
        <div className="glass scrolly-stage" style={{ "--ratio": ratio } as CSSProperties}>
          {steps.map((step, index) => (
            <figure className="scrolly-frame" key={step.image.src} data-active={active === index ? "" : undefined} aria-hidden={active !== index}>
              <Image src={step.image.src} alt={step.image.alt} width={step.image.width ?? 1600} height={step.image.height ?? 900} sizes="(max-width: 900px) 100vw, 800px" loading={near ? "eager" : "lazy"} />
            </figure>
          ))}
        </div>
        <div className="scrolly-progress" aria-hidden="true">
          {steps.map((step, index) => <i key={step.image.src} data-active={active === index ? "" : undefined} data-done={index < active ? "" : undefined} />)}
        </div>
        {/* All captions share one grid cell, so the card keeps the height of the longest and never jumps. */}
        <div className="scrolly-captions" aria-hidden="true">
          {steps.map((step, index) => (
            <div className="scrolly-card" key={step.image.src} data-active={active === index ? "" : undefined}>
              <span className="scrolly-count">{pad(index + 1)} / {pad(steps.length)}{step.kicker && <> · {step.kicker}</>}</span>
              {step.title && <h3>{step.title}</h3>}
              {step.text && <p>{step.text}</p>}
            </div>
          ))}
        </div>
      </div>
      {/* Invisible scroll steps drive the sequence and carry the text for screen readers. */}
      <ol className="scrolly-steps" ref={stepsRef}>
        {steps.map((step, index) => (
          <li className="scrolly-step" key={step.image.src} data-step={index}>
            <span className="sr-only">{[step.title, step.text].filter(Boolean).join(": ")}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
