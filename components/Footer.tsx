import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-footer-bg text-white">
      <Container className="space-y-8 py-10">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="text-lg font-semibold text-white">{siteConfig.name}</div>
            <p className="text-sm text-white/80">{siteConfig.description}</p>
            <div className="space-y-1 text-sm text-white/80">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a className="text-white/80 hover:text-accent" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-white">
                <span className="font-semibold text-white">Address:</span>{" "}
                {siteConfig.officeLocation}
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a className="text-white/80 hover:text-accent" href={`tel:${siteConfig.phone}`}>
                  {siteConfig.phone}
                </a>
              </p>
              <p className="text-white">
                <span className="font-semibold text-white">Coverage:</span> {siteConfig.coverage}
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="font-semibold text-white">Quick links</div>
            <ul className="space-y-2 text-white/80">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-sm">
            <div className="font-semibold text-white">Resources</div>
            <ul className="space-y-2 text-white/80">
              {footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/70 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>Independent advice for consequential decisions.</span>
        </div>
      </Container>
    </footer>
  );
}
