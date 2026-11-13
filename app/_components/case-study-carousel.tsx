"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { caseStudies, getProject } from "../content";
import { Icon } from "./icon";
import { ProjectVisual } from "./project-visual";

const pad = (value: number) => String(value).padStart(2, "0");

/** A swipeable deck of case-study cards: snap-scrolls on touch/trackpad, drags with a mouse, steps with arrows. */
export function CaseStudyCarousel() {
  const studies = caseStudies;
  // Keep the deck feeling full while only a few case studies exist.
  const showTeaser = studies.length < 3;
  const total = studies.length + (showTeaser ? 1 : 0);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.slide));
      }
    }, { root: track, threshold: 0.6 });
    track.querySelectorAll("[data-slide]").forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  function goTo(index: number) {
    const track = trackRef.current;
    const slide = track?.querySelector<HTMLElement>(`[data-slide="${Math.max(0, Math.min(total - 1, index))}"]`);
    if (!track || !slide) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2, behavior: reduced ? "auto" : "smooth" });
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") { event.preventDefault(); goTo(active + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active - 1); }
  }

  // Touch and trackpads already scroll natively; this adds click-and-drag for mice.
  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    drag.current = { active: true, moved: false, startX: event.clientX, startScroll: event.currentTarget.scrollLeft };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (!state.active) return;
    const delta = event.clientX - state.startX;
    if (!state.moved && Math.abs(delta) > 6) {
      state.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.setAttribute("data-dragging", "");
    }
    if (state.moved) event.currentTarget.scrollLeft = state.startScroll - delta;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (!state.active) return;
    state.active = false;
    if (!state.moved) return;
    event.currentTarget.removeAttribute("data-dragging");
    const delta = event.clientX - state.startX;
    goTo(Math.abs(delta) > 60 ? active + (delta < 0 ? 1 : -1) : active);
  }

  return (
    <div className="case-carousel">
      <div
        ref={trackRef}
        className="case-track"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Case studies. Use the arrow keys to browse."
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          // A drag should never turn into a click on the card it ends over.
          if (drag.current.moved) { event.preventDefault(); event.stopPropagation(); drag.current.moved = false; }
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {studies.map((study, index) => {
          const project = getProject(study.projectId);
          const href = `/case-studies/${study.slug}`;
          return (
            <article
              key={study.slug}
              className="glass case-slide"
              data-slide={index}
              data-active={active === index ? "" : undefined}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}: ${study.title}`}
              style={{ "--case-accent": study.accent } as CSSProperties}
            >
              <Link href={href} className="case-slide-visual" tabIndex={-1} aria-hidden="true">
                {project && <ProjectVisual project={project} />}
              </Link>
              <div className="case-slide-copy">
                <h3 className="case-slide-title">{study.title}</h3>
                <p className="case-slide-tagline">{study.tagline}</p>
                {study.metrics.length > 0 && (
                  <dl className="case-slide-metrics">
                    {study.metrics.slice(0, 3).map((metric) => (
                      <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>
                    ))}
                  </dl>
                )}
                <Link className="button button-light case-slide-cta" href={href} tabIndex={active === index ? 0 : -1}>
                  Read case study <Icon name="arrow" />
                </Link>
              </div>
            </article>
          );
        })}

        {showTeaser && (
          <article
            className="glass case-slide case-teaser"
            data-slide={studies.length}
            data-active={active === studies.length ? "" : undefined}
            role="group"
            aria-roledescription="slide"
            aria-label={`${total} of ${total}: more case studies coming soon`}
          >
            <div className="case-teaser-inner">
              <span className="case-teaser-spark" aria-hidden="true"><Icon name="spark" /></span>
              <h3>More stories are brewing.</h3>
              <p>New case studies are on the way. In the meantime, there&apos;s plenty more to explore below.</p>
              <a className="button button-glass" href="#work" tabIndex={active === studies.length ? 0 : -1}>Browse highlighted works <Icon name="down" /></a>
            </div>
          </article>
        )}
      </div>

      {total > 1 && (
        <div className="case-controls">
          <p className="case-counter" aria-live="polite"><strong>{pad(active + 1)}</strong> / {pad(total)}</p>
          <div className="case-dots" role="group" aria-label="Choose a case study">
            {Array.from({ length: total }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={index < studies.length ? `Show ${studies[index].title}` : "Show coming soon"}
                aria-current={active === index ? "true" : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <div className="case-arrows">
            <button type="button" className="glass case-arrow" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous case study"><Icon name="left" /></button>
            <button type="button" className="glass case-arrow" onClick={() => goTo(active + 1)} disabled={active === total - 1} aria-label="Next case study"><Icon name="right" /></button>
          </div>
        </div>
      )}
    </div>
  );
}
