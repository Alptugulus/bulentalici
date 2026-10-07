"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/navigation";

function isCurrent(pathname: string, href: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (href === "/") {
    return path === "/";
  }

  return path === href || path.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Ana menü" className="flex flex-wrap gap-x-4 gap-y-2">
      {mainNav.map((item) => {
        const current = isCurrent(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={current ? "page" : undefined}
            className="text-base leading-snug text-navy underline-offset-4 hover:underline"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
