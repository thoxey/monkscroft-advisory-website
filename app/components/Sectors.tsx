import SectionLine from "./SectionLine";

const sectors = [
  {
    name: "Motorsport",
    note: "High-performance energy systems",
    icon: "motorsport",
  },
  {
    name: "Aerospace",
    note: "Propulsion & power architecture",
    icon: "aerospace",
  },
  {
    name: "Defence",
    note: "Platform electrification & resilience",
    icon: "defence",
  },
  {
    name: "Marine",
    note: "Hybrid & zero-emission propulsion",
    icon: "marine",
  },
  {
    name: "Industrial Electrification",
    note: "Heavy-duty & off-highway systems",
    icon: "industrial-electrification",
  },
  {
    name: "Battery Supply Chain",
    note: "Cell-to-system value chain",
    icon: "battery",
  },
];

export default function Sectors() {
  return (
    <section id="industries" className="bg-band py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionLine />
        <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Sector Experience
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {sectors.map((s) => (
            <div
              key={s.name}
              className="rounded-sm border border-border bg-white p-6 text-center shadow-sm"
            >
              <div
                aria-hidden="true"
                className="mx-auto mb-4 h-14 w-14 bg-accent"
                style={{
                  WebkitMaskImage: `url(/sectors/${s.icon}.svg)`,
                  maskImage: `url(/sectors/${s.icon}.svg)`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
              <div className="text-base font-bold text-foreground">
                {s.name}
              </div>
              <div className="mt-1 text-[17px] text-body">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
