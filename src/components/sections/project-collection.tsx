import { ProjectCard } from "@/components/ui/project-card";
import { projectGroups } from "@/content/projects";
import { getVisibleProjects } from "@/lib/content";

export function ProjectCollection({ cardTitle }: { cardTitle: "h3" | "h4" }) {
  const items = getVisibleProjects();
  const groups = projectGroups
    .map((group) => ({
      ...group,
      projects: items
        .map((project, index) => ({ project, index }))
        .filter(({ project }) => project.category === group.id),
    }))
    .filter((group) => group.projects.length > 0);
  const GroupTitle = cardTitle === "h3" ? "h2" : "h3";

  return (
    <div className="mt-4 space-y-12">
      {groups.map((group) => (
        <section key={group.id} aria-labelledby={`grup-${group.id}`}>
          <GroupTitle id={`grup-${group.id}`} className="text-xl font-semibold text-navy">
            {group.title}
          </GroupTitle>
          <ul className="project-collection mt-5">
            {group.projects.map(({ project, index }) => (
              <li key={project.id} className="min-w-0">
                <ProjectCard project={project} titleAs={cardTitle} index={index} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
