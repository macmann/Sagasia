import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  items: string[];
}

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 text-accent"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path d="M6 10.5l2.5 2.5L14 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export function List({ items, className, ...props }: ListProps) {
  return (
    <ul className={cn("space-y-3", className)} {...props}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-text-dark/80 sm:text-base">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-section-bg">
            <CheckIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
