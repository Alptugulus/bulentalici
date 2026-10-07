"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

function scrollTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export function BrandLink({ className, label, children }: { className: string; label: string; children: ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={className}
      aria-label={label}
      onClick={(event) => {
        if (pathname === "/") {
          event.preventDefault();
          scrollTop();
        }
      }}
    >
      {children}
    </Link>
  );
}
