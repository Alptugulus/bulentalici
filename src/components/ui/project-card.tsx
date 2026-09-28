import Image from "next/image";
import Link from "next/link";
import { DraftBadge } from "@/components/ui/draft-badge";
import { projectVisuals } from "@/content/project-visuals";
import type { Project } from "@/types/content";

export function ProjectCard({ project, titleAs }: { project: Project; titleAs: "h2" | "h3" }) {
  const Title = titleAs;
  const visual = projectVisuals[project.example];
  return (
    <article className="project-card">
      <Link href={`/projelerimiz/${project.slug}`} className="project-card-link">
        {visual.cover ? (
          <Image src={visual.cover.src} alt="" fill
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1152px) 50vw, 536px"
            className="project-card-image" style={{ objectPosition: visual.cover.position }} />
        ) : null}
        <div className="project-card-shade" aria-hidden="true" />
        <div className="project-card-content">
          <div className="project-card-top">
            <span className="project-category">{visual.category}</span>
            <span className="project-number">{String(project.order).padStart(2, "0")}</span>
          </div>
          <div className="project-card-body">
            {project.status === "draft" ? <DraftBadge /> : null}
            <Title className="project-card-title">{project.title}</Title>
            <p className="project-card-summary">{project.summary}</p>
          </div>
          <div className="project-card-bottom">
            <span>Projeyi incele</span><span className="project-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
