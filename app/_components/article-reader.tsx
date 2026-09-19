"use client";

import { useEffect, useRef } from "react";
import type { Article } from "../content";
import { Icon } from "./icon";

export function ArticleReader({ article, onClose }: { article: Article; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const paragraphs = article.body.length ? article.body : article.chapters?.map((chapter) => chapter.text) ?? [];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="story-reader" aria-labelledby="story-title" onClose={(event) => {
      // Ignore a stale close event from Strict Mode cleanup after reopening.
      if (!event.currentTarget.open) onClose();
    }}>
      <header className="story-toolbar">
        <span>{article.placeholder ? "SAMPLE ARTICLE" : article.category}</span>
        <button type="button" onClick={() => dialogRef.current?.close()} autoFocus aria-label="Close article">
          Back to notes <Icon name="close" />
        </button>
      </header>
      <article className="story-shell">
        <header className="story-intro">
          <p className="eyebrow">{article.category} · {article.readTime}</p>
          <h2 id="story-title">{article.title}</h2>
          <p>{article.summary}</p>
          {article.placeholder && <small>Sample article · Illustrative content, not a published case study.</small>}
        </header>
        <div className="story-prose">
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <footer className="story-ending">
          {article.url && <a className="button button-glass" href={article.url} target="_blank" rel="noreferrer">Read original <Icon name="arrow" /></a>}
          <button className="button button-glass" type="button" onClick={() => dialogRef.current?.close()}>Back to all notes <Icon name="arrow" /></button>
        </footer>
      </article>
    </dialog>
  );
}
