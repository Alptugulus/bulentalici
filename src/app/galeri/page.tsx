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
          <h1 className="page-title">Galeri</h1>
        </div>
        <PortraitGallery items={items} />
      </div>
    </Container>
  );
}
