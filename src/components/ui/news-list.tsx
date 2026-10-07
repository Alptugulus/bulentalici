import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { NewsItem } from "@/types/content";

export const NEWS_PAGE_SIZE = 10;

function newsNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function NewsList({
  items,
  startIndex = 0,
  titleAs,
}: {
  items: readonly NewsItem[];
  startIndex?: number;
  titleAs: "h2" | "h3";
}) {
  const Title = titleAs;

  return (
    <ol className="news-sheet" start={startIndex + 1}>
      {items.map((item, index) => {
        const cover = item.images[0];
        const orient = cover && cover.width >= cover.height ? "wide" : "tall";

        return (
          <li
            key={item.id}
            className="news-row"
            data-side={index % 2 === 0 ? "left" : "right"}
            data-orient={orient}
            data-lead={index === 0 ? "true" : undefined}
            style={
              {
                animationDelay: `${index * 60}ms`,
                "--step": index,
                "--frame": cover ? `${cover.width} / ${cover.height}` : "3 / 4",
              } as CSSProperties
            }
          >
            <Link href={`/haberler/${item.slug}`} className="news-row-link">
              <span className="news-index" aria-hidden="true">
                {newsNumber(startIndex + index + 1)}
              </span>
              <span className="news-thumb">
                {cover ? (
                  <Image
                    src={cover.src}
                    alt=""
                    width={cover.width}
                    height={cover.height}
                    sizes="(max-width: 767px) 42vw, 220px"
                  />
                ) : null}
              </span>
              <span className="news-copy">
                <span className="news-meta">
                  {item.listedOn}
                  {item.sourceName ? ` · ${item.sourceName}` : ""}
                </span>
                <Title className="news-title">{item.title}</Title>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
