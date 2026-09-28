import type { ProjectExample } from "@/types/content";

export type ProjectVisual = {
  category: string;
  cover?: { src: string; alt: string; caption: string; position: string };
};

// Match by stable example, never by display order. Add only available, reviewed assets.
export const projectVisuals: Record<ProjectExample, ProjectVisual> = {
  energy: { category: "İşletme maliyetleri" },
  reservation: {
    category: "Yerli rezervasyon",
    cover: {
      src: "/images/projects/istanbul-rezervasyon-platformu.jpg",
      alt: "İstanbul otellerinin ortak rezervasyon ağını temsil eden proje görseli.",
      caption: "Temsili proje görseli",
      position: "center",
    },
  },
  sgk: { category: "İstihdam desteği" },
  tax: { category: "Vergi yükü" },
  digital: { category: "Dijital hizmetler" },
  events: { category: "İstanbul turizmi" },
  "room-revenue": { category: "Oda geliri" },
  transparency: { category: "Açık yönetim" },
};
