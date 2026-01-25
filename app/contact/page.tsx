import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <Section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Let’s plan your next launch</h1>
        <p className="text-lg text-slate-600">
          Tell us about your goals and we will follow up with a tailored plan within two business days.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                    id="first-name"
                    name="first-name"
                    placeholder="Avery"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                    id="last-name"
                    name="last-name"
                    placeholder="Patel"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                  Work email
                </label>
                <input
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  id="email"
                  name="email"
                  placeholder="you@sagasia.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                  Project details
                </label>
                <textarea
                  className="min-h-[140px] w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals, timeline, and team."
                />
              </div>
              <Button type="submit">Send inquiry</Button>
            </form>
          </Card>
          <Card className="space-y-4 bg-slate-50">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p className="text-sm text-slate-600">{siteConfig.contactEmail}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">What to expect</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>• Discovery call within 48 hours.</li>
                <li>• Tailored scope and timeline.</li>
                <li>• Dedicated senior lead for your engagement.</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
