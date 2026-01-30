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
                Sagasia is a strategy and market intelligence advisory partner supporting businesses entering,
                expanding, and competing across Asia-Pacific.
              </h1>
              <p className="text-lg text-text-dark/70">
                Founded in 2025, Sagasia draws on experience from 100+ strategy and market-entry engagements across the
                region, delivering insight-driven recommendations grounded in primary research, local access, and
                on-the-ground execution realities. We help clients cut through market complexity, validate growth
                opportunities, and make confident investment and expansion decisions across ASEAN and adjacent markets.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonClasses("primary")}>Start the conversation →</Link>
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
                Sagasia is a strategy and market intelligence advisory partner supporting businesses entering,
                expanding, and competing across Asia-Pacific. Founded in 2025, Sagasia draws on experience from 100+
                strategy and market-entry engagements across the region, delivering insight-driven recommendations
                grounded in primary research, local access, and on-the-ground execution realities. We help clients cut
                through market complexity, validate growth opportunities, and make confident investment and expansion
                decisions across ASEAN and adjacent markets.
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
              Experience across 100+ strategy, market entry, and competitive intelligence projects across a variety of
              industries in Asia-Pacific:
            </h2>
            <p className="text-base text-text-dark/70">
              ✓ Energy &amp; Renewables
              <br />
              ✓ Healthcare &amp; Life Sciences
              <br />
              ✓ Automotive &amp; Mobility
              <br />
              ✓ Consumer &amp; Retail
              <br />
              ✓ Industrials &amp; Manufacturing
              <br />
              ✓ Technology, Media &amp; Telecommunications (TMT)
              <br />
              ✓ Logistics &amp; Transportation
              <br />
              ✓ Financial Services &amp; Investment
              <br />
              ✓ Infrastructure &amp; Utilities
              <br />
              ✓ Natural Resources &amp; Materials
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-section-bg p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Slides To-do list:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-dark/70">
              <li>
                Coverage across 5–8 priority industries, each supported by 2–3 proprietary insight slides synthesizing
                market size, structure, and competitive dynamics.
              </li>
              <li>(button to register and download specific slides / papers)</li>
            </ul>
          </div>
          <div>
            <Link href="/contact?reason=download" className={buttonClasses("secondary")}>
              Register and download specific slides / papers
            </Link>
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
