export type Portrait = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const portraits: readonly Portrait[] = [
  {
    id: "masa-mavi",
    src: "/images/portre/masa-mavi.jpg",
    width: 1350,
    height: 1800,
    alt: "Bülent Alıcı, mavi takım elbise ile masa başında.",
  },
  {
    id: "koltuk-mavi-tam",
    src: "/images/portre/koltuk-mavi-tam.jpg",
    width: 1350,
    height: 1800,
    alt: "Bülent Alıcı, mavi takım elbise ile koltukta.",
  },
  {
    id: "mavi-gomlek",
    src: "/images/portre/mavi-gomlek.jpg",
    width: 1350,
    height: 1800,
    alt: "Bülent Alıcı, açık mavi gömlek ile çalışma masasında.",
  },
  {
    id: "masa-bej",
    src: "/images/portre/masa-bej.jpg",
    width: 1350,
    height: 1800,
    alt: "Bülent Alıcı, bej takım elbise ile masa başında.",
  },
  {
    id: "masa-bej-kalem",
    src: "/images/portre/masa-bej-kalem.jpg",
    width: 1350,
    height: 1800,
    alt: "Bülent Alıcı, bej takım elbise ile not alırken.",
  },
  {
    id: "koltuk-bej",
    src: "/images/portre/koltuk-bej.jpg",
    width: 1350,
    height: 1800,
    alt: "Bülent Alıcı, bej takım elbise ile koltukta.",
  },
  {
    id: "koltuk-bej-tam",
    src: "/images/portre/koltuk-bej-tam.jpg",
    width: 1350,
    height: 1800,
    alt: "Bülent Alıcı, bej takım elbise ile koltukta, ayakları yerde.",
  },
  {
    id: "masa-siyah",
    src: "/images/portre/masa-siyah.jpg",
    width: 1199,
    height: 1800,
    alt: "Bülent Alıcı, siyah takım elbise ile masa başında.",
  },
  {
    id: "masa-siyah-kupa",
    src: "/images/portre/masa-siyah-kupa.jpg",
    width: 1800,
    height: 1199,
    alt: "Bülent Alıcı, siyah takım elbise ile masa başında, yanında bir kupa.",
  },
  {
    id: "ayakta-02",
    src: "/images/portre/ayakta-02.jpg",
    width: 1013,
    height: 1800,
    alt: "Bülent Alıcı, bordo ceketle ayakta, eli cebinde.",
  },
  {
    id: "ayakta-03",
    src: "/images/portre/ayakta-03.jpg",
    width: 1013,
    height: 1800,
    alt: "Bülent Alıcı, bordo ceketle ayakta, elleri önde.",
  },
  {
    id: "ayakta-04",
    src: "/images/portre/ayakta-04.jpg",
    width: 1800,
    height: 1013,
    alt: "Bülent Alıcı, bordo ceketle ayakta, rafın önünde.",
  },
  {
    id: "ayakta-05",
    src: "/images/portre/ayakta-05.jpg",
    width: 1013,
    height: 1800,
    alt: "Bülent Alıcı, bordo ceketle ayakta, yakın plan.",
  },
  {
    id: "ayakta-06",
    src: "/images/portre/ayakta-06.jpg",
    width: 1800,
    height: 1013,
    alt: "Bülent Alıcı, bordo ceketle ayakta, bitkinin yanında.",
  },
  {
    id: "ayakta-07",
    src: "/images/portre/ayakta-07.jpg",
    width: 1013,
    height: 1800,
    alt: "Bülent Alıcı, bordo ceketle ayakta, elleri kavuşmuş.",
  },
  {
    id: "ayakta-08",
    src: "/images/portre/ayakta-08.jpg",
    width: 1013,
    height: 1800,
    alt: "Bülent Alıcı, bordo ceketle ayakta, gülümseyerek.",
  },
];

export const aboutPortraitId = "masa-mavi";

/** Her çekimden bir kare. Aynı kadrajın renk veya poz tekrarı yok. */
export const galleryPortraitIds = [
  "masa-mavi",
  "ayakta-03",
  "koltuk-mavi-tam",
  "masa-siyah",
  "mavi-gomlek",
  "masa-bej-kalem",
  "koltuk-bej",
  "masa-siyah-kupa",
] as const;

export const homeGalleryIds = [
  "ayakta-03",
  "koltuk-mavi-tam",
  "masa-siyah",
  "mavi-gomlek",
  "masa-bej-kalem",
  "koltuk-bej",
] as const;

export function getPortrait(id: string): Portrait | undefined {
  return portraits.find((portrait) => portrait.id === id);
}

export function getPortraits(ids: readonly string[]): Portrait[] {
  return ids.flatMap((id) => {
    const portrait = getPortrait(id);
    return portrait ? [portrait] : [];
  });
}
