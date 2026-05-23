import SectionLine from "./SectionLine";

const items = [
  {
    title: "Technology Strategy & Positioning",
    body: "Sector mapping, competitive positioning and investment-grade analysis for organisations building or deploying advanced energy and electrification systems. We work from market and technical understanding, not market reports.",
  },
  {
    title: "Commercial & Market Development",
    body: "Go-to-market structuring, customer development and supply chain commercial strategy. Built on direct programme experience across multiple demanding sectors, turning theoretical into tangible, tactical activity.",
  },
  {
    title: "Programme & Technical-Commercial Integration",
    body: "Structured programme delivery bridging engineering, procurement and commercial teams. Milestone governance, technical translation and cross-functional coordination for complex industrialisation efforts.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-band py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionLine />
        <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          What We Do
        </h2>
        <p className="mt-4 max-w-3xl text-[19px] leading-relaxed text-body">
          We operate where advanced technology meets industrial reality. Our
          work focuses around structuring strategy, accelerating programmes and
          bridging the gap between engineering development and commercial
          deployment.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-sm border border-border bg-white p-7 shadow-sm"
            >
              <h3 className="text-base font-bold text-foreground">
                {it.title}
              </h3>
              <p className="mt-4 text-[18px] leading-relaxed text-body">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
