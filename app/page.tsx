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
  const chronologicalExperience = [...portfolio.experience].sort((a, b) =>
    b.startDate.localeCompare(a.startDate)
  );

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
              <HangingBadge back={
                <div className="badge-back-content">
                  <div className="badge-back-top"><span>THE OTHER SIDE</span></div>
                  <strong className="badge-back-monogram" aria-hidden="true">{portfolio.initials}</strong>
                  <div className="badge-back-intro"><strong>Still Theo.</strong><p>Curious about how people works.<br />Love to create something.</p></div>
                  <div className="badge-back-bottom"><span>If you found this, say hello here.</span><span>{portfolio.email}</span><div className="badge-barcode" aria-hidden="true" /></div>
                </div>
              }>
              <figure className="glass hero-collectible">
                <div className="hero-collectible-art">
                  {portfolio.avatar ? (
                    <Image src={portfolio.avatar} alt={portfolio.name} fill sizes="(max-width: 700px) 200px, 320px" />
                  ) : (
                    <div className="hero-prism" aria-hidden="true"><i /><i /><i /></div>
                  )}
                </div>
                <figcaption className="hero-card-caption">
                  <div><strong>{portfolio.name}</strong><span>{portfolio.role}</span></div>
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
            </div>
            <p className="profile-description">{portfolio.about.description}</p>
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
            <p>A few stops along the way, and the things I’m building now.</p>
          </div>

          <div className="experience-list">
            {chronologicalExperience.map((experience, index) => (
              <article className="experience-item" data-current={experience.current} key={experience.id}>
                {index < chronologicalExperience.length - 1 && (
                  <svg className="journey-route" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
                    <path className="journey-road" d={index % 2 === 0 ? "M160 0 C160 50 40 50 40 100" : "M40 0 C40 50 160 50 160 100"} />
                    <path className="journey-dashes" d={index % 2 === 0 ? "M160 0 C160 50 40 50 40 100" : "M40 0 C40 50 160 50 160 100"} />
                  </svg>
                )}
                <span className="journey-year" aria-hidden="true">{experience.period.match(/\d{4}/)?.[0]}</span>
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

        {portfolio.showWriting && portfolio.writing.length > 0 && <section className="section-space" id="writing" aria-label="Writing and notes">
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
