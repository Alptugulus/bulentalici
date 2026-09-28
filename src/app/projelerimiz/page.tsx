import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsIntro } from "@/content/projects";
import { getVisibleProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description: projectsIntro,
};

export default function ProjectsPage() {
  const items = getVisibleProjects();

  return (
    <Container>
      <div className="py-16 md:py-20">
        <div className="project-collection-heading"><div className="max-w-3xl">
          <h1 className="text-navy">Projelerimiz</h1>
          <p className="mt-4">{projectsIntro}</p>
        </div><span className="project-collection-count">{items.length} PROJE</span></div>
        {items.length > 0 ? (
          <ul className="project-collection">
            {items.map((project) => (
              <li key={project.id} className="min-w-0">
                <ProjectCard project={project} titleAs="h2" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">
            <EmptyState>Onaylı proje metni henüz yok.</EmptyState>
          </div>
        )}
      </div>
    </Container>
  );
}
