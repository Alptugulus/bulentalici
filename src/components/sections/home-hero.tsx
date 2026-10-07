import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

const nameFace = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  style: "italic",
  weight: "500",
  display: "swap",
});

function HeroCopy() {
  return (
    <div className="max-w-xl">
      <p className="max-w-xl border-l-4 border-white pl-3 sm:pl-4">
        <span className="block text-sm font-medium tracking-wide">{siteConfig.organizationContext}</span>
        <span className="mt-1 block max-w-md text-[0.95rem] leading-snug sm:max-w-xl sm:text-xl sm:leading-relaxed">
          {siteConfig.candidacyTitle}
        </span>
      </p>
      <h1
        id="karsilama-baslik"
        className={`${nameFace.className} mt-3 text-[2.75rem] leading-none text-white italic sm:mt-4 sm:text-6xl lg:text-7xl`}
      >
        {siteConfig.name}
      </h1>
      <p className="mt-3 max-w-xl border-l-4 border-white pl-3 text-lg font-semibold leading-snug sm:mt-6 sm:pl-4 sm:text-2xl">
        {siteConfig.campaignLines[0]}
      </p>
      <p className="mt-1 max-w-xl pl-4 text-base leading-snug sm:mt-2 sm:pl-5 sm:text-xl">{siteConfig.campaignLines[1]}</p>
      <Image
        src="/images/giris/imza.png"
        alt="Bülent Alıcı imzası. Altında Eser Hoteller Yönetim Kurulu Başkanı yazıyor. Bu, şirket görevidir."
        width={410}
        height={212}
        className="mt-3 h-auto w-36 max-w-full sm:mt-8 sm:w-72"
      />
      <div className="mt-3 flex flex-row flex-wrap gap-2 sm:mt-8 sm:gap-3">
        <Link
          href="/projelerimiz"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-paper px-3 text-center text-sm font-medium text-navy sm:px-4 sm:text-base"
        >
          Projelerimiz
        </Link>
        <Link
          href="/hakkimda"
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-white px-3 text-center text-sm font-medium text-white sm:px-4 sm:text-base"
        >
          Bülent Alıcı&apos;yı Tanıyın
        </Link>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section aria-labelledby="karsilama-baslik" className="bg-navy text-white">
      <div className="relative min-h-[calc(100svh-12rem)] md:min-h-[46rem] lg:min-h-[calc(100svh-4.25rem)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 -top-[7%] h-[114%] md:inset-0 md:top-0 md:h-full">
            <Image
              src="/images/giris/giris-mavi-masa.jpg"
              alt="Bülent Alıcı, mavi ceketle masasında."
              fill
              priority
              sizes="100vw"
              className="object-cover object-[68%_38%] md:object-center"
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy from-0% via-navy/85 via-[34%] to-transparent to-[52%] md:hidden"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-navy via-navy/50 to-transparent md:block"
          aria-hidden="true"
        />
        <Container>
          <div className="relative flex min-h-[calc(100svh-12rem)] flex-col justify-end pt-40 pb-5 md:min-h-[46rem] md:justify-center md:py-16 lg:min-h-[calc(100svh-4.25rem)]">
            <HeroCopy />
          </div>
        </Container>
      </div>
    </section>
  );
}
