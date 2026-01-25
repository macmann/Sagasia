import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { industries } from "@/lib/constants";

export default function IndustriesPage() {
  return (
    <div className="space-y-16">
      <Section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Industries we advise</h1>
        <p className="text-lg text-slate-600">
          We support leadership teams navigating complex growth stories, regulated markets, and global expansion.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <Card key={industry.title}>
              <h2 className="text-xl font-semibold text-slate-900">{industry.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{industry.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
