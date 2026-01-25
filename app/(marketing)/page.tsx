import Link from "next/link";
import { Badge } from "@/components/Badge";
import { buttonClasses } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Sagasia delivers Asia-Pacific strategy, market intelligence, and growth execution support for leadership teams."
};

export default function MarketingHomePage() {
  const serviceSnapshots = [
    {
      title: "Strategy & Growth Advisory",
      description: "Board-level guidance that clarifies growth priorities and aligns leadership decisions.",
      href: "/services#strategy-growth-advisory",
    },
    {
      title: "Market Entry & Expansion",
      description: "Go deeper on the right markets with local signal, partner mapping, and entry pathways.",
      href: "/services#market-entry-expansion",
    },
    {
      title: "Competitor & Market Intelligence",
      description: "Independent intelligence to understand share shifts, disruptors, and white-space moves.",
      href: "/services#competitor-market-intelligence",
    },
    {
      title: "Commercial Due Diligence & Opportunity Assessment",
      description: "Evidence-backed sizing, demand validation, and risk assessments for decisive moves.",
      href: "/services#commercial-due-diligence",
    },
    {
      title: "Go-to-Market & Commercial Strategy",
      description: "Positioning, pricing, and channel strategy that turns insight into market action.",
      href: "/services#go-to-market-strategy",
    },
    {
      title: "Execution Enablement & Strategic PMO",
      description: "Operating rhythms, KPI alignment, and executive PMO support to deliver outcomes.",
      href: "/services#execution-enablement",
    },
  ];

  return (
    <div className="space-y-16">
      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Strategic advisory</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Strategy and intelligence for Asia-Pacific growth leaders.
              </h1>
              <p className="text-lg text-slate-600">
                We help leadership teams move with confidence by translating complex market realities into clear,
                execution-ready decisions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonClasses("primary")}>Start the conversation</Link>
              <Link href="/services" className={buttonClasses("secondary")}>View advisory services</Link>
            </div>
          </div>
          <Card className="space-y-6 bg-slate-50">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                About Sagasia
              </p>
              <h2 className="text-2xl font-semibold">Built for decisive market entry and growth.</h2>
              <p className="text-sm text-slate-600">
                Sagasia is an independent Asia-Pacific strategy and market intelligence firm supporting
                founders, executives, and investors with local depth, rigorous analysis, and commercially grounded
                recommendations.
              </p>
            </div>
            <Link href="/contact" className={buttonClasses("primary")}>
              Share your objectives
            </Link>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">About Us</p>
            <h2 className="text-3xl font-semibold">Local insight with global expectations.</h2>
            <p className="text-base text-slate-600">
              Sagasia positions leadership teams to enter, defend, and expand in Asia-Pacific by combining
              on-the-ground intelligence with board-ready strategy, ensuring every recommendation is ready for
              execution.
            </p>
          </div>
        </div>
      </Section>

      <Section className="rounded-3xl border border-slate-200 bg-slate-50 px-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">What We Offer</p>
            <h2 className="text-3xl font-semibold">Clarity, confidence, and momentum.</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Local depth with strategic rigor.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Insight before commitment.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Actionable, execution-ready outputs.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Independent competitor intelligence.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Asia-Pacific focus by design.
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Service Snapshot</p>
            <h2 className="text-3xl font-semibold">Focused support across the growth lifecycle.</h2>
            <p className="text-base text-slate-600">
              Six core service lines built to provide insight, strategy, and execution depth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceSnapshots.map((service) => (
              <Card key={service.title} className="flex h-full flex-col justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
                <Link href={service.href} className={buttonClasses("secondary")}>
                  Explore
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Proof Points</p>
            <h2 className="text-3xl font-semibold">Credible signal across strategic mandates.</h2>
            <p className="text-base text-slate-600">
              Experience across 100+ strategy, market entry, and competitive intelligence projects for global and
              regional leadership teams.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Industries covered</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-3">
              <span>Technology &amp; SaaS</span>
              <span>Fintech &amp; Payments</span>
              <span>Consumer &amp; Retail</span>
              <span>Industrial &amp; Manufacturing</span>
              <span>Healthcare &amp; Life Sciences</span>
              <span>Energy &amp; Infrastructure</span>
            </div>
          </div>
          <div>
            <Link href="/contact?reason=download" className={buttonClasses("secondary")}>
              Download proof points
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Next Steps</p>
              <h2 className="text-3xl font-semibold">Discuss Your Growth or Market Entry Challenge</h2>
              <p className="text-base text-slate-600">
                Reach the team directly at{" "}
                <a href="mailto:contact@sagasia.com" className="font-semibold text-slate-900 underline">
                  contact@sagasia.com
                </a>{" "}
                or share your objectives to start a tailored engagement.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link href="/contact" className={buttonClasses("primary")}>
                Talk with Sagasia
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
