import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const rootMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.candidacyTitle}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  ...(siteConfig.origin
    ? { metadataBase: new URL(siteConfig.origin) }
    : { robots: { index: false, follow: false } }),
};
