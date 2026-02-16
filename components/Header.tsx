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
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight no-underline hover:no-underline"
          >
            <Image
              src="/images/scp-logo.svg"
              alt="SCP Advisory"
              width={180}
              height={44}
              className="h-11 w-auto"
              priority
            />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 text-left text-base font-bold text-[#0b2e63] md:flex"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:text-[#082349] ${active ? "text-[#082349]" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm font-medium text-text-dark/80 transition hover:text-primary md:hidden"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
          <Link href="/contact" className={buttonClasses("primary")}>
            Book an intro call
          </Link>
        </div>
      </Container>
      <div
        id="primary-navigation"
        className={`border-t border-border bg-background md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <Container className="flex flex-col gap-4 py-4 text-sm font-semibold text-[#0b2e63]">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-[#082349] ${active ? "text-[#082349]" : ""}`}
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
