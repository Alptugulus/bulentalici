import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PortraitGallery } from "@/components/ui/portrait-gallery";
import { galleryPortraitIds, getPortraits } from "@/content/portraits";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Bülent Alıcı portreleri.",
};

export default function GalleryPage() {
  const items = getPortraits(galleryPortraitIds);

  return (
    <Container>
      <div className="py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">Galeri</h1>
          <p className="mt-4 leading-relaxed">
            Bir kareyi açmak için seçin. Ok tuşları önceki ve sonraki kareye geçer, Escape kapatır.
          </p>
        </div>
        <PortraitGallery items={items} />
      </div>
    </Container>
  );
}
