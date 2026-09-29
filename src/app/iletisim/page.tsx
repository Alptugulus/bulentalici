import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Bülent Alıcı kampanya iletişimi.",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="max-w-3xl py-16 md:py-20">
        <h1 className="page-title">İletişim</h1>
        <p className="mt-6 text-lg font-medium leading-snug text-navy">{siteConfig.organizationContext}</p>
        <p className="mt-2 text-lg leading-relaxed">{siteConfig.candidacyTitle}</p>
        <p className="mt-8 border-l-4 border-navy pl-4 text-2xl font-semibold leading-snug text-navy">
          {siteConfig.campaignLines[0]}
        </p>
        <p className="mt-2 pl-5 text-xl leading-snug">{siteConfig.campaignLines[1]}</p>
      </div>
    </Container>
  );
}
