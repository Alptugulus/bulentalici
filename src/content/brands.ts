import type { Brand } from "@/types/content";

const sourceNote = "Kaynak: bulentalici.com.tr/markalarimiz, 28 Eylül 2026. Oda ve yatak sayıları doğrulanmadığı için yazılmadı. Resmi site adresi bu sayfada yoktu.";

export const brands: readonly Brand[] = [
  {
    id: "eser-premium",
    name: "Eser Premium Hotel",
    description:
      "İstanbul Büyükçekmece'de yer alan Eser Premium Hotel & Spa. Konaklama ve spa tesisi olarak anlatılıyor.",
    status: "published",
    order: 1,
    sourceNote,
  },
  {
    id: "eser-diamond",
    name: "Eser Diamond Hotel",
    description:
      "Eser Diamond Hotel & Convention Center. Eski sayfa metni konaklama ve toplantı tesisini anlatıyor. Ayrı bir adres cümlesi yoktu.",
    status: "published",
    order: 2,
    sourceNote,
  },
  {
    id: "the-city",
    name: "The City Hotel",
    description:
      "Metro, tramvay ve Taksim Meydanı'na yürüme mesafesinde olduğu yazıyor. Birçok turistik noktaya yürüyerek ulaşılabildiği belirtiliyor.",
    status: "published",
    order: 3,
    sourceNote,
  },
  {
    id: "the-city-port",
    name: "The City Port Hotel",
    description:
      "Eski marka sayfasında The City Hotel ile aynı paragraf duruyordu. Bu otele ait ayrı bir konum metni yok.",
    status: "published",
    order: 4,
    sourceNote,
  },
  {
    id: "harem",
    name: "Harem Kebap İstanbul",
    description: "Büyükçekmece'de, Eser Premium Hotel'in A katında hizmet veren bir restoran olarak anlatılıyor.",
    status: "published",
    order: 5,
    sourceNote,
  },
  {
    id: "monkeys",
    name: "Monkeys İstanbul",
    description:
      "Müzik ve sahne mekânı. Eser Premium Hotel'in giriş katında hizmet verdiği yazıyor.",
    status: "published",
    order: 6,
    sourceNote,
  },
];
