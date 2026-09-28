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
    <article className="bg-black text-white">
      <Container>
        <div className="mx-auto max-w-4xl py-12 md:py-16">
          {portrait ? (
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              priority
              quality={90}
              sizes="(min-width: 896px) 56rem, 100vw"
              className="h-auto w-full"
            />
          ) : null}

          <header className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h1 className="max-w-xl text-2xl font-medium leading-snug text-[#d4bc8a] sm:text-3xl">
              {siteConfig.candidacyTitle}
            </h1>
            <Image
              src="/images/giris/imza-beyaz.png"
              alt="Bülent Alıcı imzası"
              width={429}
              height={164}
              className="h-auto w-44 sm:w-52"
            />
          </header>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-white/95 sm:text-lg">
            <p>{pledge.salutation}</p>
            {pledge.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-medium text-white">{pledge.bakirkoyLabel}</p>
            <p>{pledge.bakirkoy}</p>
            <p className="font-medium text-white">{pledge.supportLabel}</p>
            {pledge.afterSupport.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="pt-2 text-xl font-medium leading-snug text-white">{pledge.closing}</p>
          </div>

          <footer className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-end">
            <div className="max-w-md space-y-1 leading-relaxed">
              <p className="font-semibold tracking-wide">{pledge.signOffName}</p>
              <p>{pledge.companyRole}</p>
              <p>{siteConfig.candidacyTitle}.</p>
            </div>
            <Image
              src="/images/giris/imza-beyaz.png"
              alt=""
              width={429}
              height={164}
              className="h-auto w-48"
            />
          </footer>
        </div>
      </Container>
    </article>
  );
}
