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
            <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/60">Contact</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Start the Conversation</h1>
            <p className="text-lg text-text-dark/70">
              If you are exploring a new market, evaluating a growth opportunity, or refining your competitive
              strategy, we would be pleased to speak with you. Initial discussions are confidential and focused on
              understanding your objectives and decision context.
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
          <Card className="space-y-4 bg-section-bg">
            <div>
              <h2 className="text-xl font-semibold text-text-dark">Contact Information</h2>
              <ul className="mt-2 space-y-2 text-sm text-text-dark/70">
                <li>
                  <span className="font-semibold text-text-dark">Email:</span> info@sagasia.com
                </li>
                <li>
                  <span className="font-semibold text-text-dark">Office:</span> Hong Kong
                </li>
                <li>
                  <span className="font-semibold text-text-dark">Coverage:</span> ASEAN and Asia-Pacific
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-dark">Engagement Prompt</h3>
              <p className="mt-2 text-sm text-text-dark/70">
                Every engagement begins with a focused conversation to understand your priorities and assess how we can
                support you. Whether you are at an early exploration stage or approaching a decision point, we aim to
                provide clarity from the first discussion.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
