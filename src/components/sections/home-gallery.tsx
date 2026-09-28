import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PortraitFrame } from "@/components/ui/portrait-frame";
import { getPortraits, homeGalleryIds } from "@/content/portraits";

export function HomeGallery() {
  const items = getPortraits(homeGalleryIds);

  return (
    <section id="galeri" aria-labelledby="galeri-baslik" className="scroll-mt-6 bg-surface py-16 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 id="galeri-baslik" className="text-3xl font-semibold leading-tight text-navy">
            Galeri
          </h2>
          <p className="mt-4 leading-relaxed">Seçilen portreler.</p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {items.map((portrait) => (
            <li key={portrait.id} className="min-w-0">
              <PortraitFrame
                portrait={portrait}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/galeri" className="font-medium text-navy underline-offset-4 hover:underline">
            Tüm portreler
          </Link>
        </p>
      </Container>
    </section>
  );
}
