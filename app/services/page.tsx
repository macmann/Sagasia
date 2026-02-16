import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Services",
  description: "Structured strategy, transaction, operational, and transformation advisory services by SCP Advisory."
};

const serviceDetails = [
  {
    title: "Strategy Advisory",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Leadership team discussing strategic priorities in a boardroom",
    description:
      "Support leadership teams in defining clear strategic direction and priorities. SCP Advisory helps clients assess options, evaluate trade-offs, and develop fact-based strategies aligned with capabilities and market realities.",
    offers: [
      "Corporate and business unit strategy",
      "Growth and expansion planning",
      "Strategic reviews and scenario assessment"
    ]
  },
  {
    title: "Financial & Transaction Advisory",
    image:
      "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Finance professionals reviewing transaction and valuation documents",
    description:
      "Provide analytical and commercial support for investment, acquisition, and divestment decisions. Our work focuses on understanding value drivers, risks, and deal implications before commitments are made.",
    offers: [
      "Commercial due diligence",
      "Market and competitive assessment",
      "Deal evaluation and value drivers analysis"
    ]
  },
  {
    title: "Operational Advisory",
    image:
      "https://images.pexels.com/photos/7681674/pexels-photo-7681674.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Team collaborating on operational planning around a laptop",
    description:
      "Help organizations improve performance by addressing structural, process, and execution challenges. SCP Advisory works with management to identify practical improvements and support implementation.",
    offers: [
      "Operating model and process review",
      "Cost and efficiency initiatives",
      "Performance management support"
    ]
  },
  {
    title: "Transformation & Execution Support",
    image:
      "https://images.pexels.com/photos/8297057/pexels-photo-8297057.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Project team tracking transformation milestones on a digital dashboard",
    description:
      "Bridge strategy and execution during periods of change. We support clients in structuring initiatives, maintaining momentum, and ensuring accountability across complex programs.",
    offers: [
      "Transformation roadmap design",
      "Program governance and tracking",
      "Management support during execution"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-14">
      <Section className="pt-4">
        <div
          className="relative overflow-hidden rounded-3xl border border-border bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=2000')"
          }}
        >
          <div className="absolute inset-0 bg-[#0b1f3a]/35" aria-hidden="true" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl rounded-2xl bg-[#0b1f3a]/80 p-6 sm:p-8">
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Our Services</h1>
              <p className="mt-4 text-base text-white/90 sm:text-lg">
                SCP Advisory provides structured, practical support across strategy, transactions, operations, and
                transformation execution.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="section-dots px-8" title="Service Overview">
        <div className="space-y-6">
          {serviceDetails.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-6">
                <div className="space-y-4 sm:flex-1">
                  <h2 className="text-2xl font-semibold text-text-dark">{service.title}</h2>
                  <p className="text-base leading-7 text-text-dark/80">{service.description}</p>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-text-dark/70">What We Offer</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-text-dark/80">
                      {service.offers.map((offer) => (
                        <li key={offer}>{offer}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  role="img"
                  aria-label={service.imageAlt}
                  className="h-44 w-full rounded-xl bg-cover bg-center sm:h-auto sm:w-64 sm:self-stretch lg:w-72"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
