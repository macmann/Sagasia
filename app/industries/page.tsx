import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "See the industries Sagasia advises across Asia-Pacific markets."
};

export default function IndustriesPage() {
  const targetIndustries = [
    "Energy & Renewables",
    "Healthcare & Life Sciences",
    "Automotive & Mobility",
    "Consumer & Retail",
    "Industrials & Manufacturing",
    "Technology/Media/Telecommunications (TMT)",
    "Logistics & Transportation",
    "Financial Services & Investment",
    "Infrastructure & Utilities",
    "Natural Resources & Materials"
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
      <Section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Industries we advise</h1>
        <p className="text-lg text-slate-600">
          We support leadership teams navigating complex growth stories, regulated markets, and global expansion.
        </p>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Target industries</p>
            <h2 className="text-2xl font-semibold text-slate-900">Where we focus</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {targetIndustries.map((industry) => (
              <Card key={industry} className="py-4">
                <p className="text-sm font-semibold text-slate-900">{industry}</p>
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
