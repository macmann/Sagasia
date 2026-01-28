import { Card } from "@/components/Card";
import { HeroVisual } from "@/components/HeroVisual";
import { Section } from "@/components/Section";
import { ContactForm } from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a strategic conversation with Sagasia's advisory team."
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <Section className="section-gradient px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Schedule a strategic conversation</h1>
            <p className="text-lg text-slate-600">
              Begin a confidential, focused discussion about your objectives. We will follow up with a tailored
              proposal within two business days.
            </p>
          </div>
          <HeroVisual
            src="/images/contact-hero.svg"
            alt="Illustration of a consulting team ready to connect"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <Card className="space-y-4 bg-slate-50">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Contact information</h2>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-800">Email:</span> info@sagasia.com
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Office:</span> Hong Kong
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Coverage:</span> ASEAN and Asia-Pacific
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">What to expect</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>• Intro call with a senior advisor.</li>
                <li>• Clear scope, stakeholders, and milestones.</li>
                <li>• Strategic roadmap tailored to your objectives.</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
