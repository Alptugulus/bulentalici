import type { Brand } from "@/types/content";

export const brands: readonly Brand[] = [
  {
    id: "eser-premium",
    name: "Eser Premium Hotel",
    description:
      "İstanbul Büyükçekmece'de yer alan Eser Premium Hotel & Spa. Konaklama ve spa tesisi.",
    status: "published",
    order: 1,
  },
  {
    id: "eser-diamond",
    name: "Eser Diamond Hotel",
    description: "Eser Diamond Hotel & Convention Center. Konaklama ve toplantı tesisi.",
    status: "published",
    order: 2,
  },
  {
    id: "the-city",
    name: "The City Hotel",
    description:
      "Metro, tramvay ve Taksim Meydanı'na yürüme mesafesinde. Birçok turistik noktaya yürüyerek ulaşılıyor.",
    status: "published",
    order: 3,
  },
  {
    id: "the-city-port",
    name: "The City Port Hotel",
    description: "",
    status: "published",
    order: 4,
  },
  {
    id: "harem",
    name: "Harem Kebap İstanbul",
    description: "Büyükçekmece'de, Eser Premium Hotel'in A katında hizmet veren bir restoran.",
    status: "published",
    order: 5,
  },
  {
    id: "monkeys",
    name: "Monkeys İstanbul",
    description: "Müzik ve sahne mekânı. Eser Premium Hotel'in giriş katında.",
    status: "published",
    order: 6,
  },
];
