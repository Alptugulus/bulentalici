import Image from "next/image";
import { BrandLink } from "@/components/layout/brand-link";
import { Container } from "@/components/layout/container";
import { SiteNav } from "@/components/layout/site-nav";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header border-b border-ink/10 bg-paper">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3">
          <BrandLink className="header-logo" label={siteConfig.name}>
            <Image
              src="/images/giris/imza-header.png"
              alt=""
              width={410}
              height={128}
              priority
            />
          </BrandLink>
          <SiteNav />
        </div>
      </Container>
    </header>
  );
}
