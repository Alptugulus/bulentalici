"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { NewsImage } from "@/types/content";

export function NewsFigures({ images }: { images: readonly NewsImage[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const current = open === null ? null : images[open];

  useEffect(() => {
    if (open === null) {
      return;
    }

    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <div className="mt-8 space-y-6">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="block w-full bg-surface text-left"
            onClick={() => setOpen(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 768px) 48rem, 100vw"
              priority={index === 0}
              className="h-auto w-full object-contain"
            />
            <span className="sr-only">Görseli büyüt</span>
          </button>
        ))}
      </div>
      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4"
          role="presentation"
          onClick={() => setOpen(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-full w-full max-w-5xl overflow-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3 text-white">
              <p id={titleId} className="text-sm leading-relaxed">
                {current.alt}
              </p>
              <button
                ref={closeRef}
                type="button"
                className="min-h-11 px-3"
                onClick={() => setOpen(null)}
              >
                Kapat
              </button>
            </div>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="mx-auto h-auto max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
