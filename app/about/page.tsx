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
  "Competitor & Market Intelligence",
  "Commercial Due Diligence & Opportunity Assessment",
  "Go-to-Market & Commercial Strategy",
  "Execution Enablement & Strategic PMO"
];

const industryCoverage = [
  "Technology & SaaS",
  "Fintech & Payments",
  "Consumer & Retail",
  "Industrial & Manufacturing",
  "Healthcare & Life Sciences",
  "Energy & Infrastructure"
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <Section id="company-overview" className="section-gradient px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <Badge>About Sagasia</Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Strategic growth partner for modern leaders
            </h1>
            <p className="text-lg text-text-dark/70">
              Asia-Pacific market intelligence and strategic advisory for teams ready to move decisively.
            </p>
            <p className="border-l-2 border-border pl-4 text-base text-text-dark/70">
              Sagasia is an independent Asia-Pacific strategy and market intelligence firm partnering with founders,
              executives, and investors to diagnose market realities, align leadership priorities, and translate insight
              into execution-ready growth plans across the region.
            </p>
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
            <h2 className="text-3xl font-semibold text-text-dark">Clarity that enables confident growth.</h2>
          </div>
          <ul className="space-y-3 text-base text-text-dark/70">
            <li>
              <span className="font-semibold text-text-dark">Vision:</span> To be the most trusted Asia-Pacific partner
              for leaders pursuing responsible growth and market expansion.
            </li>
            <li>
              <span className="font-semibold text-text-dark">Commitment:</span> Deliver locally grounded insight,
              decisive strategy, and execution readiness for every engagement.
            </li>
          </ul>
        </div>
      </Section>

      <Section id="operating-philosophy">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Operating Philosophy</p>
            <h2 className="text-3xl font-semibold text-text-dark">How we move from insight to action.</h2>
          </div>
          <ol className="space-y-3 text-base text-text-dark/70">
            <li>
              <span className="font-semibold text-text-dark">1.</span> Diagnose with Local Depth
            </li>
            <li>
              <span className="font-semibold text-text-dark">2.</span> Architect Adaptive Strategy
            </li>
            <li>
              <span className="font-semibold text-text-dark">3.</span> Co-Create Actionable Pathways
            </li>
            <li>
              <span className="font-semibold text-text-dark">4.</span> Enable Execution &amp; Agility
            </li>
          </ol>
        </div>
      </Section>

      <Section id="leadership-snapshot">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Leadership Snapshot</p>
            <h2 className="text-3xl font-semibold text-text-dark">Seasoned operators and advisors.</h2>
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
