import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

const values = [
  {
    title: "Clarity first",
    description: "We translate complexity into simple, durable messaging."
  },
  {
    title: "Systems over campaigns",
    description: "We build repeatable engines, not one-off plays."
  },
  {
    title: "Partnership mindset",
    description: "We embed with your team and move at your pace."
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <Section className="space-y-6">
        <Badge>About Sagasia</Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">A senior-led marketing studio</h1>
        <p className="text-lg text-slate-600">
          Sagasia helps ambitious teams align their brand, product, and growth programs. We blend strategic
          thinking with execution to build marketing systems that are resilient and ready for modern channels.
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
