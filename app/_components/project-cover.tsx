import Image from "next/image";
import type { Project } from "../content";
import { CategoryCover } from "./category-cover";

const photos: Record<string, string> = {
  apapmedika: "/project-photos/apapmedika.jpg",
  "site-management": "/project-photos/site-management.jpg",
};

// Related stock photography, not screenshots or documentation of the projects.
// Photo sources are recorded in public/project-photos/SOURCES.md.
export function ProjectCover({ project }: { project: Project }) {
  if (project.id === "ufc-analysis") {
    return (
      <div className="project-visual project-identity">
        <Image src="/logos/ufc.svg" alt="UFC" width={1250} height={433} className="ufc-logo" />
        <div className="ufc-cover-caption">
          <strong>Fighter & Match Data Analysis</strong>
          <span>Exploratory analysis · Statistical testing · Model comparison</span>
        </div>
      </div>
    );
  }

  if (project.id === "movie-sentiment") {
    return (
      <div className="project-visual movie-comparison-cover">
        <div className="movie-analysis-copy">
          <strong>Audience<br />Sentiment<br />Analysis</strong>
          <span>Man of Steel (2013)<br />& Superman (2025)</span>
        </div>
        <div className="movie-posters">
          <div className="movie-poster movie-poster-steel">
            <Image src="/project-photos/man-of-steel-2013.jpg" alt="Man of Steel (2013), directed by Zack Snyder" fill sizes="(max-width: 700px) 30vw, 180px" />
          </div>
          <div className="movie-poster movie-poster-superman">
            <Image src="/project-photos/superman-2025.jpg" alt="Superman (2025), directed by James Gunn" fill sizes="(max-width: 700px) 30vw, 180px" />
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "wattwallet") {
    return (
      <div className="project-visual project-identity">
        <Image src="/logos/wattwallet-enhanced.png" alt="Watt Wallet — Empowering Change Together" width={2170} height={725} sizes="(max-width: 700px) 65vw, 340px" className="wattwallet-logo" />
      </div>
    );
  }

  if (project.id === "ux-audit-180dc") {
    return (
      <div className="project-visual project-identity consulting-identity">
        <Image src="/logos/180dc.png" alt="180 Degrees Consulting" width={500} height={143} sizes="(max-width: 700px) 65vw, 340px" className="consulting-logo" />
        <span>Application UX Audit · Universitas Indonesia</span>
      </div>
    );
  }

  const photo = photos[project.id];
  if (!photo) return <CategoryCover project={project} />;
  const medical = project.id === "apapmedika";

  return (
    <div className="project-visual photo-cover system-cover" data-system={medical ? "medical" : "site"}>
      <Image src={photo} alt="" fill sizes="(max-width: 700px) 100vw, 520px" className="photo-cover-image" />
      <div className="system-cover-grid" aria-hidden="true" />
      <div className="system-cover-content">
        <strong className="photo-cover-title">{medical ? "APAPMedika" : <>Site Management<br />System</>}</strong>
        <span className="system-cover-subtitle">{medical ? "Healthcare, with a layer of protection." : "Connecting the site to the system."}</span>
        <div className="system-cover-stack">{project.stack.slice(0, 2).map((tech) => <span key={tech}>{tech}</span>)}</div>
      </div>
    </div>
  );
}
