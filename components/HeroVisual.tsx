import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils/cn";

const defaultBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=";

interface HeroVisualProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
  width?: number;
  height?: number;
}

export function HeroVisual({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  priority = false,
  overlay = true,
  width = 1200,
  height = 800,
}: HeroVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/80 shadow-sm",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={defaultBlurDataURL}
        priority={priority}
        className={cn("h-full w-full object-cover", imageClassName)}
      />
      {overlay ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-white/10 to-white/50"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
