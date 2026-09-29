import { Container } from "@/components/layout/container";
import { ProjectCollection } from "@/components/sections/project-collection";
import { EmptyState } from "@/components/ui/empty-state";
import { projectsHeading, projectsIntro, projectsLead } from "@/content/projects";
import { getVisibleProjects } from "@/lib/content";

export function HomeProjects() {
  const items = getVisibleProjects();

  return (
    <section id="projeler" aria-labelledby="projeler-baslik" className="scroll-mt-6 bg-surface py-16 md:py-20">
      <Container>
        <div className="project-collection-heading"><div className="max-w-3xl">
          <h2 id="projeler-baslik" className="text-navy">
            Projelerimiz
          </h2>
          <p className="projects-kicker mt-4">{projectsHeading}</p>
          <p className="mt-4 leading-relaxed">{projectsLead}</p>
          <p className="mt-4 leading-relaxed">{projectsIntro(items)}</p>
        </div></div>
        {items.length > 0 ? (
          <ProjectCollection cardTitle="h4" />
        ) : (
          <div className="mt-8">
            <EmptyState>Onaylı proje metni henüz yok.</EmptyState>
          </div>
        )}
      </Container>
    </section>
  );
}
