import { Card } from "@/components/Card";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "See the industries Sagasia advises across Asia-Pacific markets."
};

export default function IndustriesPage() {
  const targetIndustries = [
    { label: "Energy & Renewables", icon: "energy-renewables" },
    { label: "Healthcare & Life Sciences", icon: "healthcare-life-sciences" },
    { label: "Automotive & Mobility", icon: "automotive-mobility" },
    { label: "Consumer & Retail", icon: "consumer-retail" },
    { label: "Industrials & Manufacturing", icon: "industrials-manufacturing" },
    { label: "Technology/Media/Telecommunications (TMT)", icon: "tmt" },
    { label: "Logistics & Transportation", icon: "logistics-transportation" },
    { label: "Financial Services & Investment", icon: "financial-services" },
    { label: "Infrastructure & Utilities", icon: "infrastructure-utilities" },
    { label: "Natural Resources & Materials", icon: "natural-resources-materials" },
  ];

  const keyChallenges = [
    {
      title: "Understanding What Is Really Attractive",
      description:
        "Clients often face conflicting data, internal assumptions, and optimistic narratives. We help clarify what is truly attractive across markets, opportunities, investments, or strategic options. We achieve this by grounding decisions in realistic demand, economics, risks, and execution feasibility, not headline figures or internal momentum.",
    },
    {
      title: "Knowing How to Compete and Win",
      description:
        "Many markets look crowded and opaque. We help clients clearly understand competitor strategies, customer expectations, and points of differentiation, so they can position themselves effectively and compete with confidence rather than reacting to incomplete or biased information.",
    },
    {
      title: "Turning Strategy into Action",
      description:
        "Strong strategies often fail at execution. We support clients in translating strategic intent into clear priorities, practical actions, and executable plans that account for local constraints, internal capabilities, and the realities of operating across multiple markets.",
    },
  ];

  const adaptationApproach = [
    {
      title: "We Start with the Market Reality",
      description:
        "Every engagement begins with a clear understanding of the conditions you face, informed by primary research and local insight. We help you see what is realistically achievable, so your strategy and decisions are grounded in facts, not assumptions.",
    },
    {
      title: "We Adjust to Your Industry Context",
      description:
        "Each industry you operate in has its own economics, regulations, and competitive pressures. We tailor our analysis and recommendations to reflect how value is created in your sector and what matters most for your specific situation.",
    },
    {
      title: "We Work Closely with You",
      description:
        "We collaborate directly with you and your leadership team throughout the engagement, rather than working in isolation. This ensures strategies reflect your priorities, fit your organization, and are owned by the people responsible for execution.",
    },
    {
      title: "We Focus on What Comes Next",
      description:
        "Our work is designed to help you make decisions and move forward with confidence. We translate insight into clear priorities and practical next steps that you can act on in complex, fast-changing environments.",
    },
  ];

  return (
    <div className="space-y-16">
      <Section className="section-gradient px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Industries</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Industries / Focus Areas</h1>
          </div>
          <HeroVisual
            src="/images/industries-hero.svg"
            alt="Illustration of industry sectors across Asia-Pacific markets"
          />
        </div>
      </Section>

      <Section className="section-dots px-8">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Target industries</p>
            <h2 className="text-2xl font-semibold text-text-dark">Where we focus</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {targetIndustries.map((industry) => (
              <Card key={industry.label} className="flex items-center gap-4 py-4">
                <Icon name={industry.icon} category="industries" />
                <p className="text-sm font-semibold text-text-dark">{industry.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">
              Key challenges we help clients navigate
            </p>
            <h2 className="text-2xl font-semibold text-text-dark">Key Challenges We Help Clients Navigate</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {keyChallenges.map((challenge, index) => (
              <Card key={challenge.title} className="space-y-4 py-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-section-bg text-sm font-semibold text-text-dark/80">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-text-dark">{challenge.title}</h3>
                <p className="text-sm text-text-dark/70">{challenge.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Adaptation approach</p>
            <h2 className="text-2xl font-semibold text-text-dark">How Sagasia tailors solutions across different sectors.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {adaptationApproach.map((approach) => (
              <Card key={approach.title} className="flex items-start gap-3 py-4">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary" aria-hidden="true" />
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-text-dark">{approach.title}</p>
                  <p className="text-sm text-text-dark/70">{approach.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
