import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/types/content";

export function NewsCard({
  item,
  titleAs,
}: {
  item: NewsItem;
  titleAs: "h2" | "h3";
}) {
  const Title = titleAs;
  const cover = item.images[0];

  return (
    <article className="content-card flex h-full flex-col">
      {cover ? (
        <Link href={`/haberler/${item.slug}`} className="block bg-surface">
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="h-auto w-full object-contain"
          />
        </Link>
      ) : null}
      <p className="mt-4 text-sm leading-relaxed">
        {item.listedOn}
        {item.sourceName ? ` · ${item.sourceName}` : ""}
      </p>
      <Title className="mt-2 text-xl font-semibold leading-snug text-navy">
        <Link href={`/haberler/${item.slug}`} className="underline-offset-4 hover:underline">
          {item.title}
        </Link>
      </Title>
      {item.contentType === "text_and_image" && item.summary ? (
        <p className="mt-2 leading-relaxed">{item.summary}</p>
      ) : null}
    </article>
  );
}
