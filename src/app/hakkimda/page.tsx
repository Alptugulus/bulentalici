import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BiographyStatement } from "@/components/sections/biography-statement";
import { brandsHref } from "@/content/navigation";
import { aboutPortraitId, getPortrait } from "@/content/portraits";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Bülent Alıcı. 1975 yılında İstanbul’da doğdu, aslen Konyalı. Eser Oteller Yönetim Kurulu Başkanı.",
};

export default function AboutPage() {
  const portrait = getPortrait(aboutPortraitId);

  return (
    <Container>
      <div className="py-16 md:py-24">
        <BiographyStatement
          heading="Hakkımda"
          headingAs="h1"
          headingId="hakkimda-baslik"
          labelAs="h2"
          aside={
            portrait ? (
              <figure className="min-w-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-navy">
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    fill
                    priority
                    quality={90}
                    sizes="(min-width: 1024px) 26rem, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </figure>
            ) : null
          }
        />
        <p className="mt-8">
          <Link
            href={brandsHref.href}
            className="text-action underline-offset-4 hover:underline"
          >
            {brandsHref.label}
          </Link>
        </p>
      </div>
    </Container>
  );
}
