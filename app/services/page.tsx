import Link from "next/link";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { services } from "@/lib/constants";
import { buttonClasses } from "@/components/Button";

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <Section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Advisory services for growth moments</h1>
        <p className="text-lg text-slate-600">
          We deliver strategic clarity, leadership alignment, and execution plans that unlock revenue momentum.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Need a custom engagement?</h3>
            <p className="text-sm text-slate-600">We tailor scope, cadence, and stakeholders to your growth goals.</p>
          </div>
          <Link href="/contact" className={buttonClasses("primary")}>
            Talk to Sagasia
          </Link>
        </Card>
      </Section>
    </div>
  );
}
