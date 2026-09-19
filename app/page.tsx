import Image from "next/image";
import { portfolio } from "./content";
import { Icon } from "./_components/icon";
import { IridescentLight } from "./_components/iridescent-light";
import { ArticleCollection, Navigation, ProjectCollection } from "./_components/portfolio-interactions";
import { SkillsCarousel } from "./_components/skills-carousel";
import { HangingBadge } from "./_components/hanging-badge";

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ambient-light" aria-hidden="true" />
      <IridescentLight />
      <Navigation />

      <main id="main" className="site-shell">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-halo" aria-hidden="true"><div /></div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">{portfolio.hero.greeting}</h1>
              <p className="hero-tagline">{portfolio.hero.lineOne} <span>{portfolio.hero.lineTwo}</span></p>
              <p className="hero-description">{portfolio.hero.description}</p>
              <div className="stats-strip" aria-label="Portfolio highlights">
                {portfolio.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-showcase">
              <HangingBadge>
              <figure className="glass hero-collectible">
                <div className="hero-collectible-art">
                  {portfolio.avatar ? (
                    <Image src={portfolio.avatar} alt={portfolio.name} fill sizes="(max-width: 700px) 200px, 320px" />
                  ) : (
                    <div className="hero-prism" aria-hidden="true"><i /><i /><i /></div>
                  )}
                  <span className="hero-art-mark" aria-hidden="true">{portfolio.initials}</span>
                </div>
                <figcaption className="hero-card-caption">
                  <div><strong>{portfolio.name}</strong><span>{portfolio.role}</span></div>
                  <span className="foil-seal" aria-hidden="true">✦</span>
                </figcaption>
              </figure>
              </HangingBadge>
            </div>
          </div>
          <a className="glass scroll-cue" href="#about"><span>{portfolio.hero.scrollLabel}</span><Icon name="down" /></a>
        </section>

        <section className="about-grid section-space" id="about" aria-label="About me">
          <article className="glass profile-card">
            <div className="profile-top">
              <div className="avatar">
                {portfolio.avatar ? <Image src={portfolio.avatar} alt={portfolio.name} fill sizes="64px" /> : <span>{portfolio.initials}</span>}
              </div>
              <div><h2>{portfolio.about.heading}</h2><p>{portfolio.role}</p></div>
              <Icon name="spark" />
            </div>
            <p className="profile-description">{portfolio.about.description}</p>
            <div className="profile-location"><Icon name="spark" /><span>{portfolio.about.note}</span></div>
          </article>
          <article className="glass education-card">
            <h2>Education</h2>
            <p><strong>{portfolio.education.degree}</strong><br />{portfolio.education.institution}<br />{portfolio.education.year}</p>
            <p>{portfolio.education.description}</p>
            <details className="experience-details">
              <summary>Education highlights <Icon name="plus" /></summary>
              <ul>{portfolio.education.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </details>
          </article>
        </section>

        <section
          className="section-space experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <h2 id="experience-title">Experience</h2>
          </div>

          <div className="experience-list">
            {portfolio.experience.map((experience) => (
              <article className="experience-item" key={experience.id}>
                <div className="glass company-icon">
                  {experience.logo ? (
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={64}
                      height={64}
                      sizes="(max-width: 700px) 44px, 64px"
                      className="company-logo"
                    />
                  ) : (
                    <span className="company-monogram" aria-hidden="true">
                      {experience.initials}
                    </span>
                  )}
                </div>

                <div className="experience-main">
                  <div className="experience-heading">
                    <div>
                      <h3>{experience.role}</h3>
                      <p>
                        {experience.company}
                        <span> · {experience.type}</span>
                      </p>
                    </div>

                    <span
                      className={
                        experience.current ? "period current" : "period"
                      }
                    >
                      {experience.current && <span className="status-dot" />}
                      {experience.period}
                    </span>
                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  {experience.highlights.length > 0 && (
                    <details className="experience-details">
                      <summary>
                        Role highlights
                        <Icon name="plus" />
                      </summary>

                      <ul>
                        {experience.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space work-section" id="work" aria-label="Selected work">
          <SectionHeading title="Highlighted Works" description="" />
          <ProjectCollection />
        </section>

        {portfolio.writing.length > 0 && <section className="section-space" id="writing" aria-label="Writing and notes">
          <SectionHeading title="A few things on my mind." description="Notes on design, development, and the things learned in between." />
          <ArticleCollection />
        </section>}

        <section className="skills-section section-space" id="skills" aria-labelledby="skills-title">
          <SectionHeading title="Theo’s Skills" description="Hard Skills & Soft Skills" />
          <h2 id="skills-title" className="sr-only">Skills</h2>
          <SkillsCarousel skills={portfolio.skills} />
        </section>

        <section className="glass contact-panel section-space" id="contact" aria-labelledby="contact-title">
          <div className="contact-glow" aria-hidden="true" />
          <h2 id="contact-title">{portfolio.contact.heading}</h2>
          <p>{portfolio.contact.description}</p>
          <a className="button button-light" href={`mailto:${portfolio.email}`}>Say hello <Icon name="arrow" /></a>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
        </section>
      </main>

      <footer className="site-footer site-shell">
        <a className="footer-brand" href="#top">{portfolio.initials}<span>© {new Date().getFullYear()} {portfolio.name}</span></a>
        <div className="footer-links">
          {portfolio.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<Icon name="arrow" /></a>)}
          <a href="#top">Back to top <Icon name="down" className="back-arrow" /></a>
        </div>
      </footer>
    </>
  );
}
