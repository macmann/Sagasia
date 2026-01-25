import Link from "next/link";
import { primaryNav } from "@/lib/nav";
import { siteConfig } from "@/lib/siteConfig";
import { buttonClasses } from "@/components/Button";
import { Container } from "@/components/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className={buttonClasses("secondary", "hidden sm:inline-flex")}>
            Let’s talk
          </Link>
          <Link href="/contact" className={buttonClasses("primary")}>
            Start a project
          </Link>
        </div>
      </Container>
    </header>
  );
}
