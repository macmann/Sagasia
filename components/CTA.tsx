import { Button } from "@/components/Button";
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
    <Card className="bg-primary text-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
          <p className="text-sm text-white/80 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          <Button className="text-white hover:bg-background/10" href={secondaryHref} variant="ghost">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
}
