import SectionLine from "./SectionLine";

const engagements = [
  {
    eyebrow: "Integrated / Fractional Retainer",
    title: "Strategic Advisory Retainer – Battery Systems Programme",
    challenge:
      "A growth-stage battery systems company lacked senior commercial and strategic bandwidth to align product roadmap, market entry and industrialisation priorities across multiple sectors.",
    approach:
      "Embedded as a fractional advisor to the leadership team, providing ongoing strategic support across market prioritisation, partnership evaluation, customer engagement and go-to-market planning.",
    outcome:
      "Established a clearer commercial strategy, prioritised near-term deployment sectors and supported partnership discussions that accelerated route-to-market planning and investor confidence.",
    keyInsight:
      "Early alignment between technical roadmap and commercial deployment strategy often creates more value than isolated technology optimisation.",
  },
  {
    eyebrow: "Scope-Based Engagement",
    title:
      "Market Entry & Commercialisation Strategy – Advanced Technology Platform",
    challenge:
      "An advanced technology developer required a structured market entry strategy to assess viable early-adoption sectors, define value proposition and identify realistic deployment pathways beyond initial technical validation.",
    approach:
      "Delivered a structured commercial assessment including sector prioritisation, customer landscape analysis, competitive positioning and phased go-to-market recommendations aligned to technical maturity.",
    outcome:
      "Produced a commercially grounded deployment roadmap that enabled targeted customer engagement, improved strategic focus and supported early commercial discussions.",
    keyInsight:
      "Commercial success in emerging technology markets often depends less on theoretical scale and more on solving immediate operational problems within existing industry constraints.",
  },
];

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
        {label}
      </div>
      <p className="mt-2 text-[18px] leading-relaxed text-body">{body}</p>
    </div>
  );
}

export default function Engagements() {
  return (
    <section id="engagements" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionLine />
        <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Selected Engagements
        </h2>

        <div className="mt-12 space-y-6">
          {engagements.map((e) => (
            <article
              key={e.title}
              className="rounded-sm border border-border bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
                {e.eyebrow}
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground sm:text-xl">
                {e.title}
              </h3>

              <div className="mt-7 grid gap-x-10 gap-y-7 md:grid-cols-2">
                <Block label="Challenge" body={e.challenge} />
                <Block label="Approach" body={e.approach} />
                <Block label="Outcome" body={e.outcome} />
                <Block label="Key Insight" body={e.keyInsight} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
