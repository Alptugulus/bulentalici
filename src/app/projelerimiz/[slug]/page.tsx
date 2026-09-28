import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ProjectDetail } from "@/components/sections/project-detail";
import { getVisibleProject, getVisibleProjects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getVisibleProject(slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getVisibleProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <div className="py-16 md:py-20">
        <ProjectDetail project={project} />
      </div>
    </Container>
  );
}
