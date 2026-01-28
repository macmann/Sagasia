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
    "Understanding What Is Really Attractive",
    "Knowing How to Compete and Win",
    "Turning Strategy into Action"
  ];

  const adaptationApproach = [
    "We Start with the Market Reality",
    "We Adjust to Your Industry Context",
    "We Work Closely with You",
    "We Focus on What Comes Next"
  ];

  return (
    <div className="space-y-16">
      <Section className="section-gradient px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Industries</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Industries we advise</h1>
            <p className="text-lg text-slate-600">
              We support leadership teams navigating complex growth stories, regulated markets, and global expansion.
            </p>
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
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Target industries</p>
            <h2 className="text-2xl font-semibold text-slate-900">Where we focus</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {targetIndustries.map((industry) => (
              <Card key={industry.label} className="flex items-center gap-4 py-4">
                <Icon name={industry.icon} category="industries" />
                <p className="text-sm font-semibold text-slate-900">{industry.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Key challenges we help clients navigate
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">Clarity, competitive edge, and execution</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {keyChallenges.map((challenge, index) => (
              <Card key={challenge} className="space-y-4 py-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{challenge}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Adaptation approach</p>
            <h2 className="text-2xl font-semibold text-slate-900">How we tailor every engagement</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {adaptationApproach.map((approach) => (
              <Card key={approach} className="flex items-start gap-3 py-4">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-slate-900" aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-900">{approach}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
