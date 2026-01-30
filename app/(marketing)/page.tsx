import Link from "next/link";
import { Badge } from "@/components/Badge";
import { buttonClasses } from "@/components/Button";
import { Card } from "@/components/Card";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icon";
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
      description:
        "Corporate and business strategy, growth prioritization, capital allocation, and investment thesis development across Asia-Pacific.",
      href: "/services#strategy-growth-advisory",
      icon: "strategy-growth",
      buttonText: "Explore Strategy & Growth Advisory →",
    },
    {
      title: "Market Entry & Expansion",
      description:
        "Market validation, go-to-market design, partner or acquisition screening, and expansion roadmaps across ASEAN and APAC.",
      href: "/services#market-entry-expansion",
      icon: "market-entry",
      buttonText: "Explore Market Entry & Expansion →",
    },
    {
      title: "Competitor & Market Intelligence",
      description:
        "Independent competitor benchmarking, pricing and value-chain analysis, channel mapping, and market structure insights.",
      href: "/services#competitor-market-intelligence",
      icon: "competitor-intelligence",
      buttonText: "Explore Competitor & Market Intelligence →",
    },
    {
      title: "Commercial Due Diligence & Opportunity Assessment",
      description:
        "Primary-research-led commercial diligence, market attractiveness assessment, and risk evaluation for investments and strategic decisions.",
      href: "/services#commercial-due-diligence",
      icon: "commercial-due-diligence",
      buttonText: "Explore Commercial Due Diligence →",
    },
    {
      title: "Go-to-Market & Commercial Strategy",
      description:
        "Go-to-market strategy design, pricing and value proposition development, and channel and sales model optimization.",
      href: "/services#go-to-market-strategy",
      icon: "go-to-market",
      buttonText: "Explore Go-to-Market Strategy →",
    },
    {
      title: "Execution Enablement & Strategic PMO",
      description:
        "Strategy implementation support, initiative sequencing, governance structuring, and performance tracking across markets.",
      href: "/services#execution-enablement",
      icon: "execution-enablement",
      buttonText: "Explore Execution Enablement →",
    },
  ];

  return (
    <div className="space-y-16">
      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Strategic advisory</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Asia-Pacific strategy and market intelligence for decisive growth.
              </h1>
              <p className="text-lg text-text-dark/70">
                We help leadership teams validate markets, prioritize growth, and execute expansion with primary
                research and practical, decision-ready recommendations.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonClasses("primary")}>Start the conversation →</Link>
            </div>
            <div className="grid gap-3 text-sm text-text-dark/70 sm:grid-cols-2">
              {[
                "100+ regional strategy and market-entry engagements.",
                "Primary research with local, on-the-ground insight.",
                "Market entry, growth, and competitive positioning.",
                "Execution-ready recommendations for leadership teams.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border/70 bg-background px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <HeroVisual
            src="/images/hero.svg"
            alt="Abstract illustration representing Asia-Pacific growth strategy"
            priority
          />
        </div>
        <div className="mt-10">
          <Card className="space-y-6 bg-section-bg">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-dark/60">
                About Sagasia
              </p>
              <h2 className="text-2xl font-semibold">About Us</h2>
              <p className="text-sm text-text-dark/70">
                Sagasia partners with leadership teams to enter, expand, and compete across Asia-Pacific. We combine
                100+ regional engagements with research-led insight to help clients move from opportunity to action
                across ASEAN and adjacent markets.
              </p>
            </div>
            <Link href="/contact" className={buttonClasses("primary")}>
              Start the conversation →
            </Link>
          </Card>
        </div>
      </Section>

      <Section className="section-dots px-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">What We Offer</p>
            <h2 className="text-3xl font-semibold">What We Offer</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-2xl border border-border bg-background p-4 text-sm text-text-dark/70">
              Local depth with strategic rigor.
            </li>
            <li className="rounded-2xl border border-border bg-background p-4 text-sm text-text-dark/70">
              Insight before commitment.
            </li>
            <li className="rounded-2xl border border-border bg-background p-4 text-sm text-text-dark/70">
              Actionable, execution-ready outputs.
            </li>
            <li className="rounded-2xl border border-border bg-background p-4 text-sm text-text-dark/70">
              Independent competitor intelligence.
            </li>
            <li className="rounded-2xl border border-border bg-background p-4 text-sm text-text-dark/70">
              Asia-Pacific focus by design.
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Service Snapshot</p>
            <h2 className="text-3xl font-semibold">Service Snapshot</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceSnapshots.map((service) => (
              <Card key={service.title} className="flex h-full flex-col justify-between gap-4">
                <div className="space-y-3">
                  <Icon name={service.icon} />
                  <h3 className="text-xl font-semibold text-text-dark">{service.title}</h3>
                  <p className="text-sm text-text-dark/70">{service.description}</p>
                </div>
                <Link href={service.href} className={buttonClasses("secondary")}>
                  {service.buttonText}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Proof Points</p>
            <h2 className="text-3xl font-semibold">
              Experience from 100+ strategy, market entry, and competitive intelligence projects across Asia-Pacific
              industries.
            </h2>
            <p className="text-base text-text-dark/70">
              Coverage spans priority sectors with proprietary insight slides on market size, structure, and competitive
              dynamics.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <Card className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Industry coverage</p>
              <ul className="grid gap-2 text-sm text-text-dark/70 sm:grid-cols-2">
                {[
                  "Energy & Renewables",
                  "Healthcare & Life Sciences",
                  "Automotive & Mobility",
                  "Consumer & Retail",
                  "Industrials & Manufacturing",
                  "Technology, Media & Telecommunications (TMT)",
                  "Logistics & Transportation",
                  "Financial Services & Investment",
                  "Infrastructure & Utilities",
                  "Natural Resources & Materials",
                ].map((industry) => (
                  <li key={industry} className="flex items-start gap-2 rounded-xl border border-border/60 p-2">
                    <span className="text-secondary">✓</span>
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="space-y-4 bg-section-bg">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Slides to-do list</p>
              <ul className="space-y-3 text-sm text-text-dark/70">
                <li>
                  Coverage across 5–8 priority industries, each supported by 2–3 proprietary insight slides
                  synthesizing market size, structure, and competitive dynamics.
                </li>
                <li>Register to download specific slides or papers.</li>
              </ul>
              <Link href="/contact?reason=download" className={buttonClasses("secondary")}>
                Register and download specific slides / papers
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-border bg-section-bg p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Next Steps</p>
              <h2 className="text-3xl font-semibold">Discuss Your Growth or Market Entry Challenge</h2>
              <p className="text-base text-text-dark/70">
                Whether you are assessing a new market, validating an investment, or sharpening competitive strategy,
                SCP is ready to support.
              </p>
              <ul className="space-y-2 text-sm text-text-dark/70">
                <li>
                  Email:{" "}
                  <a href="mailto:info@sagasia.com" className="font-semibold text-secondary underline hover:text-primary">
                    info@sagasia.com
                  </a>
                </li>
                <li>Contact Form: Submit an inquiry to start the conversation</li>
                <li>Initial Discussion: Confidential, focused, and insight-led</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link href="/contact" className={buttonClasses("primary")}>
                Start the conversation →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
