import type { ReactNode } from "react";

export function EmptyState({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-navy/25 bg-paper px-5 py-8 leading-relaxed">
      {children}
    </p>
  );
}
