import { Card } from "@/components/Card";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Sagasia advisory services spanning strategy, market entry, competitive intelligence, and execution support."
};

const services = [
  {
    id: "strategy-growth-advisory",
    title: "Strategy & Growth Advisory",
    icon: "strategy-growth",
    description:
      "Shape clear, fact-based strategies to drive sustainable growth and competitive advantage across Asia-Pacific.",
    summary:
      "Sagasia supports leadership teams on corporate and business strategy, growth prioritization, and capital allocation decisions. Our work focuses on clarifying strategic direction and translating ambition into executable growth pathways.",
    supports: [
      "Corporate and business unit strategy",
      "Growth roadmap and market prioritization",
      "Investment thesis and portfolio strategy",
      "New business model assessment",
    ],
  },
  {
    id: "market-entry-expansion",
    title: "Market Entry & Expansion",
    icon: "market-entry",
    description:
      "Reduce entry risk and accelerate execution when entering or scaling in ASEAN and APAC markets.",
    summary:
      "We help clients validate market attractiveness, understand local dynamics, and design entry or expansion strategies grounded in primary research and operational feasibility.",
    supports: [
      "Market sizing and demand validation",
      "Go-to-market and route-to-market design",
      "Partner, distributor, or acquisition screening",
      "ASEAN expansion planning",
    ],
  },
  {
    id: "competitor-market-intelligence",
    title: "Competitor & Market Intelligence",
    icon: "competitor-intelligence",
    description:
      "Deliver independent, decision-grade intelligence on competitors, customers, and market structure.",
    summary:
      "Sagasia provides objective competitor and market insight to inform strategic positioning, pricing decisions, and competitive response strategies.",
    supports: [
      "Competitor benchmarking and positioning",
      "Pricing and value-chain analysis",
      "Channel and customer behavior mapping",
      "Market structure and dynamics assessment",
    ],
  },
  {
    id: "commercial-due-diligence",
    title: "Commercial Due Diligence & Opportunity Assessment",
    icon: "commercial-due-diligence",
    description:
      "Support confident investment and strategic decisions with rigorous, primary-research-led diligence.",
    summary:
      "We assist corporates and investors in assessing market opportunities, risks, and upside potential prior to capital deployment or strategic commitment.",
    supports: [
      "Commercial due diligence for M&A or investments",
      "Market attractiveness and growth validation",
      "Revenue and demand assessment",
      "Risk and sensitivity analysis",
    ],
  },
  {
    id: "go-to-market-strategy",
    title: "Go-to-Market & Commercial Strategy",
    icon: "go-to-market",
    description:
      "Translate insight into clear commercial actions that drive revenue and market traction.",
    summary:
      "Sagasia helps clients align product, pricing, channels, and customer targeting with local market realities to build effective commercial strategies.",
    supports: [
      "Go-to-market strategy design",
      "Pricing and value proposition development",
      "Channel and partner strategy",
      "Sales model optimization",
    ],
  },
  {
    id: "execution-enablement",
    title: "Execution Enablement & Strategic PMO",
    icon: "execution-enablement",
    description:
      "Bridge the gap between strategy and execution to ensure momentum and accountability.",
    summary:
      "We support early-stage execution by structuring initiatives, governance, and performance tracking to help strategies deliver results in fast-moving markets.",
    supports: [
      "Strategy implementation support",
      "Initiative prioritization and sequencing",
      "KPI and performance tracking",
      "Cross-market execution coordination",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <Section className="section-gradient px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Advisory services</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Our Services</h1>
          </div>
          <HeroVisual
            src="/images/services-hero.svg"
            alt="Illustration of consulting services and growth enablement"
          />
        </div>
      </Section>

      <Section className="section-dots px-8">
        <div className="space-y-6">
          {services.map((service) => (
            <Card key={service.title} id={service.id} className="space-y-4">
              <div className="space-y-3">
                <Icon name={service.icon} />
                <h2 className="text-2xl font-semibold text-text-dark">{service.title}</h2>
                <p className="text-sm text-text-dark/70">{service.description}</p>
                <p className="text-sm text-text-dark/70">{service.summary}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">What We Support</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-dark/70">
                  {service.supports.map((support) => (
                    <li key={support}>{support}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
