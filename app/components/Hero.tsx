import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-band">
      {/* Faint background detail */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(61,126,166,0.18) 0%, transparent 65%)",
        }}
      />

      <div id="top" className="relative mx-auto max-w-[1100px] px-6 py-16 text-center sm:py-24">
        <div id="hero-logo" className="mx-auto mb-10 w-[240px] sm:mb-12 sm:w-[340px]">
          <Image
            src="/logo.webp"
            alt="Monkscroft Advisory"
            width={612}
            height={210}
            priority
            className="h-auto w-full"
          />
        </div>

        <h1 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
          Strategic advisory across electrification, battery systems and
          industrial decarbonisation.
        </h1>

        <p className="mt-5 text-[19px] text-body sm:text-base">
          Technically grounded. Commercially structured. Programme-tested.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#engagements"
            className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            See How We Work
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-accent px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
