"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { primaryNav } from "@/lib/nav";
import { siteConfig } from "@/lib/siteConfig";
import { buttonClasses } from "@/components/Button";
import { Container } from "@/components/Container";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = useMemo(() => primaryNav, []);

  const isActive = (href: string) => {
    if (!pathname) {
      return false;
    }
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <Image
            src="/images/sagasia-logo.svg"
            alt="Sagasia"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="sr-only sm:not-sr-only">{siteConfig.name}</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-slate-900 ${active ? "text-slate-900" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 md:hidden"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
          <Link href="/contact" className={buttonClasses("secondary", "hidden sm:inline-flex")}>
            Let’s talk
          </Link>
          <Link href="/contact" className={buttonClasses("primary")}>
            Start a project
          </Link>
        </div>
      </Container>
      <div
        id="primary-navigation"
        className={`border-t border-slate-200 bg-white md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <Container className="flex flex-col gap-4 py-4 text-sm text-slate-700">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-slate-900 ${active ? "text-slate-900" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}
        </Container>
      </div>
    </header>
  );
}
