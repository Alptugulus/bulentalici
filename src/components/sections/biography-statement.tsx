import type { ReactNode } from "react";
import { DraftBadge } from "@/components/ui/draft-badge";
import { EmptyState } from "@/components/ui/empty-state";
import { getVisibleBiography } from "@/lib/content";

export function BiographyStatement({
  heading,
  headingAs,
  headingId,
  labelAs,
  aside,
}: {
  heading: string;
  headingAs: "h1" | "h2";
  headingId: string;
  labelAs: "h2" | "h3";
  aside?: ReactNode;
}) {
  const biography = getVisibleBiography();
  const Heading = headingAs;
  const Label = labelAs;

  if (!biography) {
    return <EmptyState>Onaylı tanıtım metni henüz yok.</EmptyState>;
  }

  const sections = (
    <div className={aside ? "mt-8 space-y-4" : "mt-4 grid gap-4 md:grid-cols-2"}>
      {biography.sections.map((section) => (
        <section
          key={section.id}
          aria-labelledby={`${section.id}-baslik`}
          className="rounded-md border border-navy/10 bg-paper p-6"
        >
          <Label id={`${section.id}-baslik`} className="text-xl font-semibold text-navy">
            {section.label}
          </Label>
          <div className="mt-4 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );

  const closing = (
    <>
      <p className="mt-4 rounded-md bg-navy px-6 py-8 text-2xl font-semibold leading-snug text-white sm:px-8">
        {biography.closing}
      </p>
      <p className="mt-4 text-sm leading-relaxed">{biography.sourceNote}</p>
    </>
  );

  if (aside) {
    return (
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(18rem,26rem)_minmax(0,1fr)] lg:gap-14">
        <div className="lg:sticky lg:top-8">{aside}</div>
        <div className="min-w-0">
          <Heading id={headingId} className="text-3xl font-semibold leading-tight text-navy sm:text-5xl">
            {heading}
          </Heading>
          {biography.status === "draft" ? (
            <div className="mt-4">
              <DraftBadge />
            </div>
          ) : null}
          <p className="mt-6 text-2xl font-medium leading-snug text-navy">{biography.lead}</p>
          {sections}
          {closing}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="rounded-md bg-surface p-6 sm:p-8 lg:p-10">
        <Heading id={headingId} className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">
          {heading}
        </Heading>
        {biography.status === "draft" ? (
          <div className="mt-4">
            <DraftBadge />
          </div>
        ) : null}
        <p className="mt-6 max-w-3xl text-2xl font-medium leading-snug text-navy sm:text-3xl sm:leading-snug">
          {biography.lead}
        </p>
      </div>
      {sections}
      {closing}
    </div>
  );
}
