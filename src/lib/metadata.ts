import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const rootMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.candidacyTitle}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  verification: {
    google: "NB908RVBcDbz_syUyY6fanaiJa_GrGH3JChsxqsmgmQ",
  },
  ...(siteConfig.origin
    ? { metadataBase: new URL(siteConfig.origin) }
    : { robots: { index: false, follow: false } }),
};
