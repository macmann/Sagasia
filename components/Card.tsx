import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  iconClassName?: string;
}

export function Card({ className, icon, iconClassName, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:shadow-md",
        className
      )}
      {...props}
    >
      {icon ? (
        <div
          className={cn(
            "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-section-bg text-text-dark/70",
            iconClassName
          )}
        >
          {icon}
        </div>
      ) : null}
      {children}
    </div>
  );
}
