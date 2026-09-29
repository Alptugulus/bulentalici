import type { ProjectExample } from "@/types/content";

export type ProjectVisual = {
  category: string;
  cover?: { src: string; alt: string; position: string };
};

const scene = (file: string, alt: string): ProjectVisual["cover"] => ({
  src: `/images/projects/${file}.jpg`,
  alt,
  position: "left center",
});

export const projectVisuals: Record<ProjectExample, ProjectVisual> = {
  energy: {
    category: "İşletme maliyetleri",
    cover: scene("enerji-maliyetleri", "Akşam otel kesiti, ön planda elektrik sayacı ve pano."),
  },
  reservation: {
    category: "Yerli rezervasyon",
    cover: scene(
      "istanbul-rezervasyon-platformu",
      "Otel resepsiyonunda mavi dosya ve oda anahtarı; pencereden Boğaz.",
    ),
  },
  sgk: {
    category: "İstihdam desteği",
    cover: scene("sgk-prim-destegi", "Küçük bir otel girişi ve resepsiyon."),
  },
  tax: {
    category: "Vergi yükü",
    cover: scene("vergi-yuku", "Otel lobisine açılan çalışma masası, mavi dosya."),
  },
  digital: {
    category: "Dijital hizmetler",
    cover: scene("dijital-donusum", "Otel resepsiyonunda tablet, telefon ve servis tepsisi."),
  },
  events: {
    category: "İstanbul turizmi",
    cover: scene("istanbul-etkinlikleri", "Sahil oteli, fuar alanı, küçük sahne ve sofra."),
  },
  "room-revenue": {
    category: "Oda geliri",
    cover: scene("oda-geliri", "Boğaz manzaralı otel odası."),
  },
  transparency: {
    category: "Açık yönetim",
    cover: scene("seffaf-yonetim", "Cam toplantı odasında açık dosyalar ve tablet."),
  },
  "term-limit": {
    category: "Temsil",
    cover: scene("donem-siniri", "Toplantı masasında üç lacivert klasör ve boş defter; camdan İstanbul."),
  },
  youth: {
    category: "Temsil",
    cover: scene("genc-temsil", "Pencere önünde boş defter ve kalem; camdan İstanbul."),
  },
  inclusive: {
    category: "Temsil",
    cover: scene("kapsayici-temsil", "Masada üç anahtar; camdan kıyı otelleri ve İstanbul."),
  },
  "member-desk": {
    category: "Üye hizmeti",
    cover: scene("sorun-takibi", "Boş masada telefon, defter ve duvar saati; camdan İstanbul."),
  },
};
