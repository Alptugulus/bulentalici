import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsIntro } from "@/content/projects";
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
          <p className="mt-4 leading-relaxed">{projectsIntro}</p>
        </div><span className="project-collection-count">{items.length} PROJE</span></div>
        {items.length > 0 ? (
          <ul className="project-collection">
            {items.map((project) => (
              <li key={project.id} className="min-w-0">
                <ProjectCard project={project} titleAs="h3" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">
            <EmptyState>Onaylı proje metni henüz yok.</EmptyState>
          </div>
        )}
      </Container>
    </section>
  );
}
