import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="space-y-8 py-10">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/images/sagasia-logo.svg"
                alt="Sagasia"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <div className="text-lg font-semibold">{siteConfig.name}</div>
            </div>
            <p className="text-sm text-slate-600">{siteConfig.description}</p>
            <div className="space-y-1 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a className="hover:text-slate-900" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Office:</span>{" "}
                {siteConfig.officeLocation}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Coverage:</span>{" "}
                {siteConfig.coverage}
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="font-semibold text-slate-900">Quick links</div>
            <ul className="space-y-2 text-slate-600">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-slate-900">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-sm">
            <div className="font-semibold text-slate-900">Resources</div>
            <ul className="space-y-2 text-slate-600">
              {footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-slate-900">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>Built for ambitious teams.</span>
        </div>
      </Container>
    </footer>
  );
}
