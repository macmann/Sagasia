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
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md",
        className
      )}
      {...props}
    >
      {icon ? (
        <div
          className={cn(
            "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600",
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
