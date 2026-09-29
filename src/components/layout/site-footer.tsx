import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer mt-auto bg-navy text-white">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="footer-mark" aria-label={siteConfig.name}>
            <Image src="/images/giris/imza-header.png" alt="" width={410} height={128} />
          </Link>
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-wide text-white/75">{siteConfig.organizationContext}</p>
            <p className="mt-2 text-lg font-semibold leading-snug">{siteConfig.candidacyTitle}</p>
            <p className="mt-6 border-l-4 border-white pl-4 text-2xl font-semibold leading-snug">
              {siteConfig.campaignLines[0]}
            </p>
            <p className="mt-2 pl-5 text-xl leading-snug text-white/90">{siteConfig.campaignLines[1]}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
