import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Button, buttonClasses } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { differentiators, industries, services, stats } from "@/lib/constants";
import { siteConfig } from "@/lib/siteConfig";

export default function MarketingHomePage() {
  return (
    <div className="space-y-16">
      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Strategic advisory</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {siteConfig.tagline}
              </h1>
              <p className="text-lg text-slate-600">
                Sagasia partners with founders, executives, and investor-backed teams to sharpen market narrative,
                accelerate commercial growth, and align leadership around the next chapter.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonClasses("primary")}>Schedule an executive briefing</Link>
              <Link href="/services" className={buttonClasses("secondary")}>View advisory services</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <Card className="space-y-6 bg-slate-50">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Focus engagement
              </p>
              <h2 className="text-2xl font-semibold">90-day strategic sprint</h2>
              <p className="text-sm text-slate-600">
                Align leadership, update your market story, and build the execution plan needed to grow.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span>Executive alignment + diagnostic</span>
                <span className="font-semibold text-slate-900">Weeks 1-2</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span>Market narrative + positioning</span>
                <span className="font-semibold text-slate-900">Weeks 3-6</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Growth roadmap + activation</span>
                <span className="font-semibold text-slate-900">Weeks 7-12</span>
              </div>
            </div>
            <Button variant="primary">Request the sprint brief</Button>
          </Card>
        </div>
      </Section>

      <Section className="rounded-3xl border border-slate-200 bg-slate-50 px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Services</p>
            <h2 className="text-3xl font-semibold">Advisory and growth execution</h2>
            <p className="text-base text-slate-600">
              Strategic support for leadership teams navigating growth, repositioning, or expansion.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Industries</p>
            <h2 className="text-3xl font-semibold">Experience across complex growth stories</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry.title}>
                <h3 className="text-lg font-semibold text-slate-900">{industry.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <CTA
          title="Align leadership and accelerate growth."
          description="Sagasia delivers strategy, narrative, and execution plans that keep your team aligned and your market confident."
        />
      </Section>
    </div>
  );
}
