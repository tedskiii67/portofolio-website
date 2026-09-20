"use client";

import { useEffect, useRef, useState } from "react";
import type { Article, Project } from "../content";
import { portfolio } from "../content";
import { Icon } from "./icon";
import { ProjectVisual } from "./project-visual";
import { ArticleReader } from "./article-reader";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  ...(portfolio.showWriting && portfolio.writing.length ? [{ id: "writing", label: "Writing" }] : []),
];

export function Navigation() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, { rootMargin: "-15% 0px -50% 0px" });
    for (const { id } of [...sections, { id: "top" }, { id: "contact" }]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="glass navigation" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label={`${portfolio.name}, back to top`}>{portfolio.initials}</a>
        <div className="nav-links">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">Let’s talk <Icon name="chat" /></a>
      </nav>
    </header>
  );
}

function DetailDialog({ item, onClose }: { item: Project | Article | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!item || !dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [item]);

  if (!item) return null;
  const isProject = "stack" in item;

  return (
    <dialog ref={dialogRef} className="detail-dialog" aria-labelledby={`detail-${item.id}`} onClose={onClose} onClick={(event) => {
      if (event.target === event.currentTarget) {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
      }
    }}>
      <button className="dialog-close icon-button" aria-label="Close details" onClick={() => dialogRef.current?.close()} autoFocus><Icon name="close" /></button>
      {isProject && <ProjectVisual project={item} />}
      <div className="dialog-copy">
        <p className="eyebrow">{isProject ? item.categories.join(" · ") : item.category} <span>·</span> {isProject ? item.year : item.readTime}</p>
        <h2 id={`detail-${item.id}`}>{item.title}</h2>
        <p className="dialog-summary">{item.summary}</p>
        {(isProject ? item.details : item.body).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {isProject && <div className="tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>}
        <div className="dialog-links">
          {isProject && item.liveUrl && <a className="button button-light" href={item.liveUrl} target="_blank" rel="noreferrer">See Details <Icon name="arrow" /></a>}
          {isProject && item.sourceUrl && <a className="button button-glass" href={item.sourceUrl} target="_blank" rel="noreferrer">Source code <Icon name="code" /></a>}
          {!isProject && item.url && <a className="button button-light" href={item.url} target="_blank" rel="noreferrer">Read original <Icon name="arrow" /></a>}
        </div>
      </div>
    </dialog>
  );
}

export function ProjectCollection() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const categories = ["All", ...new Set(portfolio.projects.flatMap((project) => project.categories))];
  const projects = portfolio.projects.filter((project) => category === "All" || project.categories.includes(category));

  return (
    <>
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label="Filter projects by category">
          {categories.map((filter) => <button key={filter} aria-pressed={category === filter} onClick={() => setCategory(filter)}>{filter}</button>)}
        </div>
        <span className="result-count" aria-live="polite">{projects.length} {projects.length === 1 ? "project" : "projects"}</span>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <button className="glass project-card" key={project.id} onClick={() => setSelected(project)} aria-label={`View ${project.title} project`}>
            <ProjectVisual project={project} />
            <div className="project-copy">
              <div className="project-category"><span>{project.categories.join(" · ")}</span><span>{project.year}</span></div>
              <div className="project-title"><h3>{project.title}</h3><span className="circle-arrow"><Icon name="arrow" /></span></div>
              <p>{project.summary}</p>
              <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className="project-action">Explore project <Icon name="arrow" /></span>
            </div>
          </button>
        ))}
      </div>
      <DetailDialog item={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export function ArticleCollection() {
  const [selected, setSelected] = useState<Article | null>(null);

  return (
    <>
      <div className="writing-grid">
        {portfolio.writing.map((article) => (
          <button className="glass article-card" key={article.id} onClick={() => setSelected(article)} aria-label={`Read ${article.title}`}>
            <div className="article-top"><span className="article-icon"><Icon name="book" /></span><span>{article.placeholder ? "DEMO · " : ""}{article.category}</span></div>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <div className="article-bottom"><span>{article.placeholder ? "Sample story" : <time dateTime={article.date}>{new Date(`${article.date}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time>}<span> · {article.readTime}</span></span><Icon name="arrow" /></div>
          </button>
        ))}
      </div>
      {selected && <ArticleReader key={selected.id} article={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
