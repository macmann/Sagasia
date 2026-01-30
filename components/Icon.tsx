import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type IconCategory = "services" | "industries";

interface IconProps {
  name: string;
  category?: IconCategory;
  size?: number;
  alt?: string;
  className?: string;
  containerClassName?: string;
}

export function Icon({
  name,
  category = "services",
  size = 24,
  alt,
  className,
  containerClassName,
}: IconProps) {
  const label = alt ?? name.replace(/-/g, " ");
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-2xl border border-border bg-section-bg text-text-dark/80",
        containerClassName
      )}
      style={{ width: size + 20, height: size + 20 }}
    >
      <Image
        src={`/images/icons/${category}/${name}.svg`}
        alt={label}
        width={size}
        height={size}
        className={cn("h-auto w-auto", className)}
      />
    </span>
  );
}
