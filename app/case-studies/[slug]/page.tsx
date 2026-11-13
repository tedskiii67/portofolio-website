import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, getProject, portfolio } from "../../content";
import { Icon } from "../../_components/icon";
import { IridescentLight } from "../../_components/iridescent-light";
import { Navigation } from "../../_components/portfolio-interactions";
import { ProjectVisual } from "../../_components/project-visual";
import { SiteFooter } from "../../_components/site-footer";
import { CaseStudyToc, ReadingProgress, ScrollReveal, ScrollStatement, ScrollySteps, StatGrid } from "../../_components/case-study-chrome";

type Props = { params: Promise<{ slug: string }> };

// Only the case studies listed in content.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  const title = `${study.title} — Case Study · ${portfolio.name}`;
  return { title, description: study.tagline, openGraph: { title, description: study.tagline, type: "article" } };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const project = getProject(study.projectId);
  const index = caseStudies.indexOf(study);
  // Every other case study, starting from the one after this, so the order feels like "what's next".
  const others = caseStudies.map((_, i) => caseStudies[(index + 1 + i) % caseStudies.length]).filter((other) => other !== study);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ReadingProgress />
      <ScrollReveal />
      <div className="ambient-light" aria-hidden="true" />
      <IridescentLight />
      <Navigation />

      <main id="main" className="site-shell case-page" style={{ "--case-accent": study.accent } as CSSProperties}>
        <header className="case-hero" id="top">
          <Link className="case-back" href="/#case-studies"><Icon name="left" /> All case studies</Link>
          <p className="eyebrow">Case study {pad(index + 1)} <span>·</span> {project?.categories.join(" · ")} <span>·</span> {study.year}</p>
          <h1>{study.title}</h1>
          <p className="case-tagline">{study.tagline}</p>
          {study.placeholder && <p className="case-draft"><span className="status-dot" /> Draft · placeholder content, the full story is coming soon</p>}
        </header>

        {project && <figure className="glass case-cover"><ProjectVisual project={project} /></figure>}

        <dl className="case-facts">
          {study.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>

        {study.metrics.length > 0 && (
          <div className="case-metrics">
            {study.metrics.map((metric) => (
              <div className="glass case-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
        )}

        <div className="case-body">
          <CaseStudyToc sections={study.sections} />
          <div className="case-chapters">
            {study.sections.map((section, sectionIndex) => {
              const statement = section.statement && <ScrollStatement text={section.statement.text} />;
              const images = section.images ?? [];
              // Two or more finished images become a scrollytelling sequence.
              const scrollyImages = images.length > 1 && images.every((image) => image.src)
                ? images.map((image) => ({ text: image.caption, image: { ...image, src: image.src! } }))
                : null;
              return (
                <section className="case-chapter" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
                  <header className="case-chapter-head" data-reveal>
                    <span className="case-chapter-number" aria-hidden="true">{pad(sectionIndex + 1)}</span>
                    <p className="eyebrow">{section.label}</p>
                    <h2 id={`${section.id}-title`}>{section.title}</h2>
                  </header>
                  {section.statement?.position !== "end" && statement}
                  {section.body.map((paragraph, i) => <p key={i} data-reveal>{paragraph}</p>)}
                  {section.quote && (
                    <blockquote className="case-quote" data-reveal>
                      <p>{section.quote.text}</p>
                      {section.quote.by && <cite>{section.quote.by}</cite>}
                    </blockquote>
                  )}
                  {section.stats && <StatGrid stats={section.stats} />}
                  {section.table && (
                    <figure className="case-table-wrap" data-reveal>
                      <div className="glass case-table-scroll">
                        <table className="case-table">
                          <thead>
                            <tr><th scope="col"><span className="sr-only">Platform</span></th>{section.table.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr key={row.label} data-highlight={row.highlight ? "" : undefined}>
                                <th scope="row"><strong>{row.label}</strong>{row.note && <span>{row.note}</span>}</th>
                                {row.cells.map((yes, i) => (
                                  <td key={i} data-yes={yes ? "" : undefined}>
                                    <span aria-hidden="true">{yes ? "✓" : "✕"}</span>
                                    <span className="sr-only">{yes ? "Yes" : "No"}</span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {section.table.caption && <figcaption>{section.table.caption}</figcaption>}
                    </figure>
                  )}
                  {section.timeline && (
                    <ol className="case-timeline">
                      {section.timeline.map((step, i) => (
                        <li className="case-timeline-step" key={step.title} data-reveal>
                          <span className="case-timeline-dot" aria-hidden="true">{pad(i + 1)}</span>
                          <div className="glass case-timeline-card">
                            {step.kicker && <span className="case-timeline-kicker">{step.kicker}</span>}
                            <h3>{step.title}</h3>
                            {step.text && <p>{step.text}</p>}
                            {step.points && <ul>{step.points.map((point) => <li key={point}>{point}</li>)}</ul>}
                            {step.metrics && (
                              <dl className="case-timeline-metrics">
                                {step.metrics.map((metric) => (
                                  <div key={metric.label}>
                                    <dt>{metric.label}</dt>
                                    <dd>{metric.value}</dd>
                                    {metric.of && <i className="case-bar" style={{ "--pct": `${(parseFloat(metric.value) / metric.of) * 100}%` } as CSSProperties} aria-hidden="true" />}
                                  </div>
                                ))}
                              </dl>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.points && (
                    <ul className="case-points">
                      {section.points.map((point, i) => <li key={point} data-reveal style={{ "--i": i } as CSSProperties}>{point}</li>)}
                    </ul>
                  )}
                  {scrollyImages ? <ScrollySteps label={`${section.label} visuals`} steps={scrollyImages} /> : images.map((image, imageIndex) => (
                    <figure className="case-figure" key={image.src ?? imageIndex} data-reveal>
                      {image.src ? (
                        <div className="glass case-figure-frame">
                          <Image src={image.src} alt={image.alt} width={image.width ?? 1600} height={image.height ?? 900} sizes="(max-width: 900px) 100vw, 800px" />
                        </div>
                      ) : (
                        <div className="case-figure-placeholder" role="img" aria-label={`Image placeholder: ${image.alt}`}>
                          <Icon name="spark" />
                          <span>Image goes here</span>
                          <small>{image.alt}</small>
                        </div>
                      )}
                      {image.caption && <figcaption>{image.caption}</figcaption>}
                    </figure>
                  ))}
                  {section.screens && (
                    <ScrollySteps
                      label={`${section.label} screens`}
                      steps={section.screens.map((screen) => ({ kicker: "Module", title: screen.label, text: screen.note, image: screen.image }))}
                    />
                  )}
                  {section.statement?.position === "end" && statement}
                </section>
              );
            })}
          </div>
        </div>

        <div className="case-end">
          <div className="case-end-links">
            <Link className="button button-glass" href="/#case-studies"><Icon name="left" /> Back to case studies</Link>
            {study.links?.map((link) => <a key={link.href} className="button button-light" href={link.href} target="_blank" rel="noreferrer">{link.label} <Icon name="arrow" /></a>)}
          </div>

          <section className="case-others" aria-labelledby="case-others-title">
            <div className="case-others-head">
              <h2 id="case-others-title">Other case studies</h2>
            </div>
            {others.length > 0 ? (
              <div className="case-others-grid">
                {others.map((other) => {
                  const otherProject = getProject(other.projectId);
                  return (
                    <Link className="glass case-other" key={other.slug} href={`/case-studies/${other.slug}`} style={{ "--case-accent": other.accent } as CSSProperties}>
                      {otherProject && <ProjectVisual project={otherProject} />}
                      <div className="case-other-copy">
                        <strong>{other.title}</strong>
                        <span className="case-other-tagline">{other.tagline}</span>
                        <span className="case-other-cta">Read case study <Icon name="arrow" /></span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p className="case-others-empty">More case studies are on the way.</p>
            )}
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
