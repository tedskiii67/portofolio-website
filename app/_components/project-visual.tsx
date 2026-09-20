import Image from "next/image";
import type { Project } from "../content";
import { ProjectCover } from "./project-cover";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="project-visual image-visual">
        <Image src={project.image} alt={project.imageAlt || project.title} fill sizes="(max-width: 700px) 100vw, 520px" />
      </div>
    );
  }

  return <ProjectCover project={project} />;
}
