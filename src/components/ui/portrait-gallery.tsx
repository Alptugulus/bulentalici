"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { PortraitFrame } from "@/components/ui/portrait-frame";
import type { Portrait } from "@/content/portraits";

export function PortraitGallery({ items }: { items: readonly Portrait[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const openRef = useRef(false);
  const titleId = useId();
  const current = index === null ? null : items[index];

  useEffect(() => {
    if (index === null) {
      if (openRef.current) {
        openRef.current = false;
        openerRef.current?.focus();
      }
      return;
    }

    if (!openRef.current) {
      openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      openRef.current = true;
      closeRef.current?.focus();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIndex(null);
      }
      if (event.key === "ArrowRight") {
        setIndex((value) => (value === null ? value : (value + 1) % items.length));
      }
      if (event.key === "ArrowLeft") {
        setIndex((value) => (value === null ? value : (value - 1 + items.length) % items.length));
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, items.length]);

  return (
    <>
      <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((portrait, itemIndex) => (
          <li key={portrait.id} className="min-w-0">
            <button
              type="button"
              className="block w-full text-left"
              aria-label={portrait.alt}
              onClick={() => setIndex(itemIndex)}
            >
              <PortraitFrame
                portrait={portrait}
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
            </button>
          </li>
        ))}
      </ul>
      {current && index !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4"
          role="presentation"
          onClick={() => setIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-full w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 text-white">
              <p id={titleId} className="text-sm leading-relaxed">
                {index + 1} / {items.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                className="rounded-md border border-white px-3 py-1.5 font-medium"
                onClick={() => setIndex(null)}
              >
                Kapat
              </button>
            </div>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              quality={90}
              sizes="(min-width: 768px) 48rem, 100vw"
              className="mx-auto mt-3 h-auto max-h-[70vh] w-auto max-w-full"
            />
            <div className="mt-3 flex items-center justify-between gap-3 text-white">
              <button
                type="button"
                className="rounded-md border border-white px-3 py-1.5 font-medium"
                onClick={() => setIndex((value) => (value === null ? value : (value - 1 + items.length) % items.length))}
              >
                Önceki
              </button>
              <button
                type="button"
                className="rounded-md border border-white px-3 py-1.5 font-medium"
                onClick={() => setIndex((value) => (value === null ? value : (value + 1) % items.length))}
              >
                Sonraki
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
