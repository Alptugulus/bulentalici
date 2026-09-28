import Image from "next/image";
import type { Portrait } from "@/content/portraits";

export function PortraitFrame({
  portrait,
  priority = false,
  sizes,
}: {
  portrait: Portrait;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <span className="relative block aspect-[3/4] overflow-hidden rounded-md bg-surface">
      <Image
        src={portrait.src}
        alt={portrait.alt}
        fill
        priority={priority}
        quality={90}
        sizes={sizes}
        className="object-contain"
      />
    </span>
  );
}
