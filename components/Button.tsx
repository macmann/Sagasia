import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles = {
  primary: "bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900",
  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-slate-300",
  ghost: "text-slate-700 hover:bg-slate-100 focus-visible:outline-slate-300"
};

export type ButtonVariant = keyof typeof variantStyles;

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(baseStyles, variantStyles[variant], className);
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}
