/**
 * Markalar ana menüde değil; Hakkımda ve alt bilgidedir.
 */
export const mainNav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/projelerimiz", label: "Projelerimiz" },
  { href: "/haberler", label: "Haberler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const brandsHref = { href: "/markalarimiz", label: "Markalarımız" } as const;
