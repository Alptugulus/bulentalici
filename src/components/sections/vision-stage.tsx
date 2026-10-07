"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";

export function VisionStage({ children }: { children: ReactNode }) {
  const [height, setHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const fit = () => {
      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      setHeight(Math.max(Math.round(window.innerHeight - headerHeight), 360));
    };

    fit();
    const header = document.querySelector("header");
    const observer = new ResizeObserver(fit);
    if (header) {
      observer.observe(header);
    }
    window.addEventListener("resize", fit);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <section
      className="relative isolate h-[calc(100svh-11rem)] overflow-hidden bg-navy text-white md:h-[calc(100svh-4.85rem)]"
      style={height ? { height } : undefined}
      aria-labelledby="vizyonumuz-baslik"
      data-vision-height={height ?? undefined}
    >
      {children}
    </section>
  );
}
