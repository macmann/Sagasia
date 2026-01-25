import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  headingClassName?: string;
  subheadingClassName?: string;
}

export function Section({
  className,
  title,
  subtitle,
  headingClassName,
  subheadingClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)} {...props}>
      {title || subtitle ? (
        <div className="mb-8 space-y-3">
          {title ? (
            <h2 className={cn("text-3xl font-semibold text-slate-900 sm:text-4xl", headingClassName)}>
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <p className={cn("text-sm text-slate-600 sm:text-base", subheadingClassName)}>{subtitle}</p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
