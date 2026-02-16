import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantStyles = {
  primary: "bg-secondary text-white hover:bg-secondary/90",
  secondary:
    "border border-secondary bg-white text-secondary hover:bg-secondary/10",
  ghost: "text-text-dark/70 hover:bg-section-bg"
};

export type ButtonVariant = keyof typeof variantStyles;

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(baseStyles, variantStyles[variant], className);
}

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

type ButtonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

export type ButtonProps = {
  variant?: ButtonVariant;
} & (ButtonLinkProps | ButtonButtonProps);

const isButtonLinkProps = (props: ButtonLinkProps | ButtonButtonProps): props is ButtonLinkProps =>
  typeof (props as ButtonLinkProps).href === "string";

export function Button(props: ButtonProps) {
  if (isButtonLinkProps(props)) {
    const { variant = "primary", className, href, ...rest } = props;
    return <Link className={buttonClasses(variant, className)} href={href} {...rest} />;
  }

  const { variant = "primary", className, href: _href, ...rest } = props;
  return <button className={buttonClasses(variant, className)} {...rest} />;
}
