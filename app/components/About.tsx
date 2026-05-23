import Image from "next/image";
import SectionLine from "./SectionLine";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="text-center">
          <SectionLine align="center" />
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            About
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-stretch md:gap-8">
          {/* Bio card with portrait floated right — text wraps around */}
          <div className="rounded-sm border border-border bg-white p-6 shadow-sm sm:p-8">
            <div className="float-right mb-3 ml-5 overflow-hidden rounded-sm shadow-sm">
              <Image
                src="/portrait.webp"
                alt="James Hoxey"
                width={400}
                height={500}
                className="h-28 w-24 object-cover sm:h-32 sm:w-28"
              />
            </div>

            <h3 className="text-xl font-bold leading-tight text-foreground">
              James Hoxey
            </h3>
            <div className="mt-1 text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
              Founder
            </div>

            <div className="mt-5 space-y-4 text-[19px] leading-relaxed text-body">
              <p>
                James brings extensive cross-sector experience spanning
                motorsport, aerospace, defence and industrial electrification.
                His career has been defined by operating at the boundary
                between advanced technology development and commercial
                deployment, translating complex engineering programmes into
                structured commercial outcomes.
              </p>
              <p>
                Monkscroft Advisory was established to provide senior-level
                strategic guidance to organisations navigating the
                industrialisation of electrification technologies. James works
                directly with CTOs, programme directors and investors who
                require commercially grounded, technically credible advisory
                support.
              </p>
            </div>

            <div className="clear-both" />
          </div>

          {/* Onsite photo */}
          <div className="overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/onsite_photo.jpeg"
              alt="James onsite at an industrial electrification project"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
