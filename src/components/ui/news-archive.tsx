"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NEWS_PAGE_SIZE, NewsList } from "@/components/ui/news-list";
import type { NewsItem } from "@/types/content";

function pageCountOf(count: number) {
  return Math.max(1, Math.ceil(count / NEWS_PAGE_SIZE));
}

function parsePage(value: string | null, count: number) {
  const pages = pageCountOf(count);
  if (value === null) {
    return 1;
  }

  const raw = Number(value);
  if (!Number.isInteger(raw) || raw < 1) {
    return 1;
  }

  return Math.min(raw, pages);
}

function visiblePageNumbers(current: number, total: number) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const wanted = [1, total, current - 1, current, current + 1].filter(
    (value, index, all) => value >= 1 && value <= total && all.indexOf(value) === index,
  );

  return wanted.sort((left, right) => left - right);
}

export function NewsArchive({ items }: { items: readonly NewsItem[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sheetRef = useRef<HTMLDivElement>(null);
  const seenPage = useRef<number | null>(null);
  const requested = searchParams.get("sayfa");
  const pages = pageCountOf(items.length);
  const page = parsePage(requested, items.length);
  const start = (page - 1) * NEWS_PAGE_SIZE;
  const pageItems = items.slice(start, start + NEWS_PAGE_SIZE);

  useEffect(() => {
    if (requested === null) {
      return;
    }

    const canonical = page <= 1 ? null : String(page);
    if (canonical === requested) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (page <= 1) {
      params.delete("sayfa");
    } else {
      params.set("sayfa", String(page));
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [page, pathname, requested, router, searchParams]);

  useEffect(() => {
    if (seenPage.current === null) {
      seenPage.current = page;
      return;
    }

    if (seenPage.current === page) {
      return;
    }

    seenPage.current = page;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sheetRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }, [page]);

  function go(next: number) {
    const params = new URLSearchParams(searchParams.toString());
    if (next <= 1) {
      params.delete("sayfa");
    } else {
      params.set("sayfa", String(next));
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const numbers = visiblePageNumbers(page, pages);

  return (
    <div ref={sheetRef} className="news-sheet-wrap">
      <p className="sr-only" aria-live="polite">
        {`Sayfa ${page}, ${pageItems.length} yazı`}
      </p>
      <NewsList key={page} items={pageItems} startIndex={start} titleAs="h2" />
      {pages > 1 ? (
        <nav className="news-pager" aria-label="Basın sayfaları">
          <p className="news-pager-count">
            {String(page).padStart(2, "0")}
            <span>{` / ${String(pages).padStart(2, "0")}`}</span>
          </p>
          <div className="news-pager-actions">
            <button
              type="button"
              className="news-pager-step"
              onClick={() => go(page - 1)}
              disabled={page <= 1}
            >
              Önceki
            </button>
            {numbers.map((number, index) => {
              const previous = numbers[index - 1];
              const gap = previous !== undefined && number - previous > 1;

              return (
                <span key={number} className="news-pager-slot">
                  {gap ? (
                    <span className="news-pager-gap" aria-hidden="true">
                      …
                    </span>
                  ) : null}
                  <button
                    type="button"
                    className="news-pager-step news-pager-num"
                    aria-current={number === page ? "page" : undefined}
                    onClick={() => go(number)}
                  >
                    {number}
                  </button>
                </span>
              );
            })}
            <button
              type="button"
              className="news-pager-step"
              onClick={() => go(page + 1)}
              disabled={page >= pages}
            >
              Sonraki
            </button>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
