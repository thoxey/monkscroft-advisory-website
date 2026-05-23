import SectionLine from "./SectionLine";
import BriefsCarousel from "./BriefsCarousel";

export default function Insights() {
  return (
    <section id="insights" className="bg-band py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionLine />
        <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Insights & Briefings
        </h2>
        <p className="mt-4 max-w-3xl text-[19px] leading-relaxed text-body">
          Executive briefing notes and strategic intelligence from market
          engagement and conference participation. Swipe through the
          collection below or watch for featured briefings as you scroll.
        </p>

        <div className="mt-12">
          <BriefsCarousel />
        </div>
      </div>
    </section>
  );
}
