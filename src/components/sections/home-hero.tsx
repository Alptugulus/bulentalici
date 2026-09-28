import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export function HomeHero() {
  return (
    <section aria-labelledby="karsilama-baslik" className="bg-navy text-white">
      <div className="relative min-h-[40rem] sm:min-h-[46rem] lg:min-h-[calc(100svh-4.25rem)]">
        <Image
          src="/images/giris/giris-yatay.jpg"
          alt="Bülent Alıcı, bordo ceketle ofiste."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_42%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent md:bg-gradient-to-r md:from-navy md:via-navy/50 md:to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="relative flex min-h-[40rem] items-end py-12 sm:min-h-[46rem] md:items-center lg:min-h-[calc(100svh-4.25rem)]">
            <div className="max-w-xl pb-2">
              <p className="text-sm font-medium tracking-wide">{siteConfig.organizationContext}</p>
              <h1
                id="karsilama-baslik"
                className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                {siteConfig.name}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed sm:text-xl">{siteConfig.candidacyTitle}</p>
              <p className="mt-6 max-w-xl border-l-4 border-white pl-4 text-2xl font-semibold leading-snug">
                {siteConfig.campaignLines[0]}
              </p>
              <p className="mt-2 max-w-xl pl-5 text-xl leading-snug">{siteConfig.campaignLines[1]}</p>
              <Image
                src="/images/giris/imza.png"
                alt="Bülent Alıcı imzası. Altında Eser Hoteller Yönetim Kurulu Başkanı yazıyor. Bu, şirket görevidir."
                width={410}
                height={212}
                className="mt-8 h-auto w-64 max-w-full sm:w-72"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projelerimiz"
                  className="inline-flex min-h-11 max-w-full items-center justify-center rounded-md bg-paper px-4 text-center font-medium text-navy"
                >
                  Projelerimiz
                </Link>
                <Link
                  href="/hakkimda"
                  className="inline-flex min-h-11 max-w-full items-center justify-center rounded-md border border-white px-4 text-center font-medium text-white"
                >
                  Bülent Alıcı&apos;yı Tanıyın
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
