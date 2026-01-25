import Link from "next/link";
import { buttonClasses } from "@/components/Button";
import { Card } from "@/components/Card";

interface CTAProps {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CTA({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Book a strategy call",
  secondaryHref = "/services",
  secondaryLabel = "Explore services"
}: CTAProps) {
  return (
    <Card className="bg-slate-900 text-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
          <p className="text-sm text-slate-200 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className={buttonClasses("secondary", "bg-white text-slate-900")} href={primaryHref}>
            {primaryLabel}
          </Link>
          <Link className={buttonClasses("ghost", "text-white hover:bg-white/10")} href={secondaryHref}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </Card>
  );
}
