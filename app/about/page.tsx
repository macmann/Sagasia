import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { HeroVisual } from "@/components/HeroVisual";
import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Sagasia supports leadership teams with Asia-Pacific strategy and market intelligence."
};

const coreServices = [
  "Strategy & Growth Advisory",
  "Market Entry & Expansion",
  "Competitor Intelligence"
];

const industryCoverage = [
  "Consumer & Retail",
  "Energy",
  "Automotive",
  "Industrials",
  "Healthcare",
  "Investment"
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <Section id="company-overview" className="section-gradient px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <Badge>About Sagasia</Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Company Overview
            </h1>
            <p className="text-lg text-text-dark/70">
              Sagasia partners with leadership teams to enter, grow, and compete in Asia-Pacific markets with
              practical, insight-led guidance.
            </p>
            <ul className="space-y-2 text-base text-text-dark/70">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>100+ strategy advisory and market-entry engagements across Asia.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Primary research and local access to validate opportunities.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Execution support across ASEAN and adjacent markets.</span>
              </li>
            </ul>
          </div>
          <HeroVisual
            src="/images/about-hero.svg"
            alt="Illustration of regional market insights and strategic collaboration"
          />
        </div>
      </Section>

      <Section id="core-services" className="section-dots px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Core Services</p>
              <h2 className="text-2xl font-semibold text-text-dark">Strategy, intelligence, and execution support.</h2>
            </div>
            <ul className="space-y-2 text-sm text-text-dark/70">
              {coreServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </Card>
          <Card className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Industry Coverage</p>
              <h2 className="text-2xl font-semibold text-text-dark">Grounded across priority sectors.</h2>
            </div>
            <ul className="space-y-2 text-sm text-text-dark/70">
              {industryCoverage.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="mission-vision">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Mission &amp; Vision</p>
            <h2 className="text-3xl font-semibold text-text-dark">Mission &amp; Vision</h2>
          </div>
          <p className="text-base text-text-dark/70">
            In Sagasia, we believe in becoming the most trusted strategic partner for businesses navigating the dynamic
            Asia-Pacific landscape, transforming market complexity into clear, actionable pathways for sustainable
            growth and market leadership.
          </p>
          <p className="text-base font-semibold text-text-dark">We are committed to:</p>
          <ul className="space-y-3 text-base text-text-dark/70">
            <li>
              Deliver actionable APAC growth strategies grounded in local realities.
            </li>
            <li>
              Validate market opportunities through rigorous primary research and analysis.
            </li>
            <li>
              Provide decisive competitor intelligence to inform strategic positioning.
            </li>
            <li>
              Support execution with practical guidance for ASEAN market success.
            </li>
            <li>
              Leverage deep on-the-ground access for true market insight.
            </li>
            <li>
              Transform complex regional dynamics into clear, executable client decisions.
            </li>
          </ul>
        </div>
      </Section>

      <Section id="operating-philosophy">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Operating Philosophy</p>
            <h2 className="text-3xl font-semibold text-text-dark">Operating Philosophy</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-text-dark">1. Diagnose with Local Depth:</h3>
              <p className="text-sm text-text-dark/70">
                We begin by deeply diagnosing the client&apos;s challenge through rigorous market assessment, competitive
                benchmarking, and local insight. This establishes a fact-based, granular understanding of the market
                landscape, its unique dynamics, and the specific opportunities or threats at play.
              </p>
            </Card>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-text-dark">2. Architect Adaptive Strategy:</h3>
              <p className="text-sm text-text-dark/70">
                Synthesize diagnostic findings to architect clear, adaptive strategies and potential new business
                models. This step translates market realities into actionable plans for growth, innovation, or market
                entry, ensuring recommendations are both ambitious and grounded in local operational feasibility.
              </p>
            </Card>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-text-dark">3. Co-Create Actionable Pathways:</h3>
              <p className="text-sm text-text-dark/70">
                Engage clients to stress-test and refine strategic options into prioritized, executable pathways. This
                collaborative phase ensures alignment, builds client ownership, and details the operational steps,
                resources, and metrics required to move from insight to implementation.
              </p>
            </Card>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-text-dark">4. Enable Execution &amp; Agility:</h3>
              <p className="text-sm text-text-dark/70">
                Partner through initial execution to embed capabilities, monitor progress, and adapt to market
                feedback. This final step focuses on transferring knowledge, building client resilience, and ensuring
                the strategy remains agile and responsive to the fast-changing Asian business environment.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section id="leadership-snapshot">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">
              Team Profile / Leadership Snapshot
            </p>
            <h2 className="text-3xl font-semibold text-text-dark">
              High-level introduction to expertise and experience. (will confirm again)
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <Card key={card} className="flex h-full flex-col justify-center">
                <p className="text-sm text-text-dark/70">Leadership profiles to be added.</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
