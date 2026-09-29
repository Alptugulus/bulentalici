import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectCollection } from "@/components/sections/project-collection";
import { EmptyState } from "@/components/ui/empty-state";
import { projectsHeading, projectsIntro, projectsLead } from "@/content/projects";
import { getVisibleProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description: projectsLead,
};

export default function ProjectsPage() {
  const items = getVisibleProjects();

  return (
    <Container>
      <div className="py-16 md:py-20">
        <div className="project-collection-heading"><div className="max-w-3xl">
          <h1 className="text-navy">Projelerimiz</h1>
          <p className="projects-kicker mt-4">{projectsHeading}</p>
          <p className="mt-4">{projectsLead}</p>
          <p className="mt-4">{projectsIntro(items)}</p>
        </div></div>
        {items.length > 0 ? (
          <ProjectCollection cardTitle="h3" />
        ) : (
          <div className="mt-8">
            <EmptyState>Onaylı proje metni henüz yok.</EmptyState>
          </div>
        )}
      </div>
    </Container>
  );
}
