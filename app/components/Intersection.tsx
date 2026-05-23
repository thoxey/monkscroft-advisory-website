import SectionLine from "./SectionLine";

const rows = [
  {
    label: "Challenge",
    body: "Advanced technology exists. Deployment pathways remain unclear. Fragmented stakeholders. Misaligned incentives. Commercial uncertainty blocking adoption.",
  },
  {
    label: "Monkscroft's Role",
    body: "Strategic connector. Programme bridge. Deployment translator. We provide the commercial-technical coordination that turns isolated capability into coherent deployment strategy.",
  },
  {
    label: "Outcome",
    body: "Clearer deployment pathways. Aligned stakeholder priorities. Connected capability. Accelerated commercial adoption. De-risked industrialisation.",
  },
];

export default function Intersection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-6 md:grid-cols-[55%_45%] md:gap-12">
        <div>
          <SectionLine />
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Where Technology Meets Deployment Reality
          </h2>
          <div className="mt-6 space-y-4 text-[19px] leading-relaxed text-body">
            <p>
              Many industrial electrification challenges look like technology
              problems. But they rarely are. Technology alone is never the
              constraint. The constraint is coordination: fragmented
              ecosystems, disconnected stakeholders, misalignment between
              technical capability and commercial reality.
            </p>
            <p>
              Monkscroft operates at this intersection. We connect the right
              organisations, sectors and capabilities to solve real deployment
              challenges. We bridge the gap between what&rsquo;s technically
              possible and what&rsquo;s commercially achievable.
            </p>
          </div>
        </div>

        <div className="md:pl-4">
          <div className="rounded-sm border border-border bg-white shadow-sm">
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`p-6 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <div className="text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {r.label}
                </div>
                <p className="mt-3 text-[18px] leading-relaxed text-body">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
