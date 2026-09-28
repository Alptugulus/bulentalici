import Image from "next/image";
import { DraftBadge } from "@/components/ui/draft-badge";
import { projectVisuals } from "@/content/project-visuals";
import type { Project } from "@/types/content";

export function ProjectCover({ project, count }: { project: Project; count: number }) {
  const visual = projectVisuals[project.example];
  return (
    <header className={`project-cover${visual.cover ? " project-cover-with-image" : ""}`}>
      {visual.cover ? <Image src={visual.cover.src} alt="" fill preload
        sizes="(max-width: 1152px) 100vw, 1088px" className="project-cover-image"
        style={{ objectPosition: visual.cover.position }} /> : null}
      <div className="project-cover-shade" aria-hidden="true" />
      <div className="project-cover-copy">
        {project.status === "draft" ? <DraftBadge /> : null}
        <div className="project-cover-meta">
          <span>{visual.category}</span>
          <span>Proje {String(project.order).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
        </div>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>
      {visual.cover ? <p className="project-cover-caption">{visual.cover.caption}</p> : null}
    </header>
  );
}
