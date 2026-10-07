import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { VisionStage } from "@/components/sections/vision-stage";
import { pledge } from "@/content/sozumuz";
import { getPortrait } from "@/content/portraits";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Vizyonumuz",
  description:
    "Bülent Alıcı’nın sözü. Enerji, teminat, güneş paneli, vergi, Bakırköy ve turizm bursu.",
};

export default function PledgePage() {
  const portrait = getPortrait(pledge.portraitId);

  return (
    <article>
      <VisionStage>
        {portrait ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
        ) : null}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy from-0% via-navy/88 via-[34%] to-transparent to-[62%] md:via-[28%] md:to-[52%]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-navy/80 from-0% via-navy/35 via-[32%] to-transparent to-[56%] md:block"
          aria-hidden="true"
        />
        <div className="relative flex h-full flex-col justify-end">
          <Container>
            <div className="max-w-2xl pb-6 sm:pb-8 lg:pb-12">
              <p className="text-sm font-medium tracking-wide text-white/85 sm:text-base">
                {siteConfig.organizationContext}
              </p>
              <h1
                id="vizyonumuz-baslik"
                className="mt-2 text-[2.65rem] font-semibold leading-[0.95] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl"
              >
                Vizyonumuz
              </h1>
              <p className="mt-4 max-w-xl border-l-4 border-white pl-3 text-[0.95rem] leading-snug text-white sm:pl-4 sm:text-xl sm:leading-relaxed">
                {siteConfig.candidacyTitle}
              </p>
            </div>
          </Container>
        </div>
      </VisionStage>

      <Container>
        <div className="mx-auto max-w-3xl py-14 md:py-20">
          <p className="text-2xl font-semibold leading-snug text-navy">{pledge.salutation}</p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            {pledge.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="project-closing mt-12" aria-labelledby="bakirkoy-baslik">
            <h2 id="bakirkoy-baslik" className="text-xl font-semibold text-navy">
              {pledge.bakirkoyLabel}
            </h2>
            <p className="mt-3 text-sm font-medium tracking-wide text-navy">
              {pledge.bakirkoySource.date} · {pledge.bakirkoySource.sourceName}
            </p>
            <p className="mt-4 leading-relaxed">{pledge.bakirkoy}</p>
            <p className="mt-4">
              <a
                href={pledge.bakirkoySource.sourceUrl}
                className="text-action underline-offset-4 hover:underline"
                rel="noopener noreferrer"
              >
                Habere git
              </a>
            </p>
            <div className="mt-6 border-t border-navy/15 pt-6">
              <p className="text-sm font-medium tracking-wide text-navy">
                {pledge.bakirkoyNote.date} · {pledge.bakirkoyNote.sourceName}
              </p>
              <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <div className="flex-1 rounded-md border border-navy/15 bg-paper px-4 py-4">
                  <p className="text-sm font-medium text-navy/70">{pledge.bakirkoyNote.beforeWhen}</p>
                  <p className="mt-1 text-xl font-semibold leading-snug text-navy">{pledge.bakirkoyNote.beforeWhat}</p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 shrink-0 rotate-90 text-accent sm:rotate-0"
                >
                  <path
                    d="M4 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex-1 rounded-md bg-navy px-4 py-4 text-white">
                  <p className="text-sm font-medium text-white/75">{pledge.bakirkoyNote.nowWhen}</p>
                  <p className="mt-1 text-xl font-semibold leading-snug">{pledge.bakirkoyNote.nowWhat}</p>
                </div>
              </div>
              <p className="mt-4 text-lg font-semibold leading-snug text-navy">{pledge.bakirkoyNote.feeling}</p>
              <p className="mt-3 leading-relaxed">{pledge.bakirkoyNote.detail}</p>
              <p className="mt-4">
                <a
                  href={pledge.bakirkoyNote.sourceUrl}
                  className="text-action underline-offset-4 hover:underline"
                  rel="noopener noreferrer"
                >
                  Kaynağı aç
                </a>
              </p>
            </div>
          </section>

          <section className="project-closing" aria-labelledby="destek-baslik">
            <h2 id="destek-baslik" className="text-xl font-semibold text-navy">
              {pledge.supportLabel}
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              {pledge.afterSupport.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>

        <div className="mb-16 rounded-[18px] bg-navy px-6 py-8 text-white sm:px-10 md:mb-20">
          <p className="max-w-3xl text-2xl font-semibold leading-snug">{pledge.closing}</p>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 sm:flex-row sm:items-end">
            <div className="max-w-md space-y-1 leading-relaxed">
              <p className="font-semibold">{pledge.signOffName}</p>
              <p>{pledge.companyRole}</p>
              <p>{siteConfig.candidacyTitle}.</p>
            </div>
            <Image
              src="/images/giris/imza.png"
              alt="Bülent Alıcı imzası. Altında Eser Hoteller Yönetim Kurulu Başkanı yazıyor. Bu, şirket görevidir."
              width={410}
              height={212}
              className="h-auto w-56 max-w-full sm:w-64"
            />
          </div>
        </div>
      </Container>
    </article>
  );
}
