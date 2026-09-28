import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { pledge } from "@/content/sozumuz";
import { getPortrait } from "@/content/portraits";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Sözümüz",
  description:
    "Bülent Alıcı’nın sözü. Enerji, teminat, güneş paneli, vergi, Bakırköy ve turizm bursu.",
};

export default function PledgePage() {
  const portrait = getPortrait(pledge.portraitId);

  return (
    <article>
      <section
        className="flex flex-col bg-navy text-white lg:h-[calc(100svh-4.85rem)] lg:min-h-[34rem]"
        aria-labelledby="sozumuz-baslik"
      >
        <div className="relative h-[52vh] min-h-72 lg:h-auto lg:min-h-0 lg:flex-1">
          {portrait ? (
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[center_62%] lg:object-[center_78%]"
            />
          ) : null}
        </div>
        <div className="px-6 py-6 sm:px-10 lg:px-12 lg:py-7">
          <h1
            id="sozumuz-baslik"
            className="text-4xl font-semibold leading-none tracking-tight sm:text-5xl"
          >
            Sözümüz
          </h1>
          <p className="mt-4 max-w-xl text-base leading-snug text-white/90 sm:text-lg">
            {siteConfig.organizationContext} {siteConfig.candidacyTitle}
          </p>
        </div>
      </section>

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
            <p className="mt-4 leading-relaxed">{pledge.bakirkoy}</p>
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
