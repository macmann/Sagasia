import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

const values = [
  {
    title: "Executive-level partnership",
    description: "Work directly with senior advisors who have led growth at global organizations."
  },
  {
    title: "Market-driven clarity",
    description: "We translate research, stakeholder input, and competitive signals into decisive action."
  },
  {
    title: "Outcomes first",
    description: "Every engagement is tied to measurable momentum across narrative, pipeline, and retention."
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <Section className="space-y-6">
        <Badge>About Sagasia</Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Strategic growth partner for modern leaders</h1>
        <p className="text-lg text-slate-600">
          Sagasia works with founders, executives, and investor-backed teams to clarify positioning, align stakeholders,
          and accelerate commercial momentum. We blend advisory rigor with activation-ready plans.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
