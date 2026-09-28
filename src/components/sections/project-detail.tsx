import Link from "next/link";
import { EnergyInvoice } from "@/components/sections/energy-invoice";
import {
  DigitalStory,
  EventsStory,
  SgkStory,
  TaxStory,
  TransparencyStory,
} from "@/components/sections/project-stories";
import { ReservationDemo } from "@/components/sections/reservation-demo";
import { RoomRevenueDemo } from "@/components/sections/room-revenue-demo";
import { ProjectCover } from "@/components/ui/project-cover";
import { getVisibleProjects } from "@/lib/content";
import type { Project } from "@/types/content";

function projectIndex(order: number) {
  return String(order).padStart(2, "0");
}

function ProjectStory({ project }: { project: Project }) {
  switch (project.example) {
    case "energy":
      return <EnergyInvoice />;
    case "reservation":
      return <ReservationDemo />;
    case "sgk":
      return <SgkStory />;
    case "tax":
      return <TaxStory />;
    case "digital":
      return <DigitalStory />;
    case "events":
      return <EventsStory />;
    case "room-revenue":
      return <RoomRevenueDemo />;
    case "transparency":
      return <TransparencyStory />;
  }
}

export function ProjectDetail({ project }: { project: Project }) {
  const visible = getVisibleProjects();
  const index = visible.findIndex((item) => item.id === project.id);
  const previous = index > 0 ? visible[index - 1] : undefined;
  const next = index >= 0 && index < visible.length - 1 ? visible[index + 1] : undefined;

  return (
    <article>
      <p>
        <Link href="/projelerimiz" className="project-back underline-offset-4 hover:underline">
          <span aria-hidden="true">←</span> Projelere dön
        </Link>
      </p>
      <ProjectCover project={project} count={visible.length} />

      <div className="project-story"><ProjectStory project={project} /></div>

      {project.closing ? <p className="project-closing">{project.closing}</p> : null}

      <nav className="project-pagination grid gap-4 sm:grid-cols-2" aria-label="Diğer projeler">
        {previous ? (
          <Link href={`/projelerimiz/${previous.slug}`} className="rounded-md border border-navy/10 bg-paper p-5">
            <span className="text-sm text-navy">Önceki</span>
            <span className="mt-1 block text-xl font-semibold leading-snug text-navy">
              {projectIndex(previous.order)} {previous.title}
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next ? (
          <Link href={`/projelerimiz/${next.slug}`} className="rounded-md bg-navy p-5 text-paper sm:text-right">
            <span className="text-sm">Sonraki</span>
            <span className="mt-1 block text-xl font-semibold leading-snug">
              {projectIndex(next.order)} {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
