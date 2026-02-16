import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { buttonClasses } from "@/components/Button";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SCP Advisory helps leadership teams, investors, and founders make clear, high-stakes strategic decisions."
};

const coreServices = [
  {
    title: "Strategy Advisory",
    description: "Corporate strategy, growth priorities, and strategic planning.",
    icon: "/images/icons/services/strategy-growth.svg"
  },
  {
    title: "Financial & Transaction Advisory",
    description: "M&A support, commercial due diligence, and valuation insights.",
    icon: "/images/icons/services/commercial-due-diligence.svg"
  },
  {
    title: "Operational Advisory",
    description: "Performance improvement, operating model design, and execution support.",
    icon: "/images/icons/services/go-to-market.svg"
  },
  {
    title: "Transformation Support",
    description: "Change initiatives, program structuring, and delivery oversight.",
    icon: "/images/icons/services/execution-enablement.svg"
  }
];

export default function MarketingHomePage() {
  return (
    <div className="space-y-14">
      <Section className="pt-4">
        <div
          className="relative overflow-hidden rounded-3xl border border-border bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2000')"
          }}
        >
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl rounded-2xl bg-[#0b1f3a]/80 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/85">SCP Advisory</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Clarity for high-stakes decisions.
              </h1>
              <p className="mt-4 text-base text-white/90 sm:text-lg">
                Independent strategy and advisory support for leadership teams, investors, and founders navigating
                growth, transformation, and transaction moments.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/services" className={buttonClasses("primary")}>
                  Explore our services
                </Link>
                <Link href="/contact" className={buttonClasses("secondary", "border-white text-white hover:bg-white/10")}>
                  Contact SCP Advisory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="section-gradient px-8" title="About SCP Advisory">
        <p className="max-w-4xl text-base leading-7 text-text-dark/80">
          SCP Advisory is an independent strategy and advisory firm supporting leadership teams, investors, and
          founders on high-stakes decisions. We focus on clarity, helping clients understand what truly matters before
          committing capital, time, or resources. Our work spans strategy formulation, transaction support, and
          operational improvement with a practical mindset grounded in real-world constraints. We combine structured
          thinking, financial rigor, and hands-on experience to translate complexity into clear options and decisive
          next steps.
        </p>
      </Section>

      <Section className="section-dots px-8" title="Our Team">
        <p className="max-w-4xl text-base leading-7 text-text-dark/80">
          SCP Advisory is led by professionals with backgrounds in strategy consulting, corporate finance, and
          operational leadership. Our team has supported executives, boards, and investors across diverse industries
          and transaction contexts. We value rigorous thinking, direct communication, and practical execution.
          Engagements are senior-led to ensure depth, continuity, and accountability. We work side-by-side with client
          teams as trusted thought partners through complex decisions and implementation.
        </p>
      </Section>

      <Section
        className="px-2"
        title="Our Services"
        subtitle="Focused advisory support tailored to each client’s objectives and stage."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {coreServices.map((service) => (
            <Card key={service.title} className="h-full space-y-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-section-bg">
                  <Image src={service.icon} alt={service.title} width={22} height={22} className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-text-dark">{service.title}</h3>
              </div>
              <p className="text-sm leading-6 text-text-dark/80">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
