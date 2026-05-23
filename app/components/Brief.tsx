import type { Brief as BriefType } from "../data/briefs";

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function Brief({
  brief,
  className = "",
}: {
  brief: BriefType;
  className?: string;
}) {
  const external = isExternal(brief.href);
  return (
    <a
      href={brief.href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group relative block h-full pt-3 ${className}`}
    >
      {/* Folder tab — lighter brand blue */}
      <span
        aria-hidden="true"
        className="absolute left-5 top-0 h-3 w-24 rounded-t-sm bg-brand shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5"
      />

      {/* Folder body — dark slate panel */}
      <div className="relative flex h-full flex-col rounded-sm rounded-tl-none bg-panel p-6 text-panel-text shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:p-7">
        <div className="text-[15px] font-semibold uppercase tracking-[0.2em] text-brand">
          Brief
        </div>

        <h3 className="mt-2 text-base font-bold leading-snug text-white sm:text-lg">
          {brief.title}
        </h3>
        <div className="mt-1 text-[15px] font-medium leading-snug text-white/75">
          {brief.whenWhere}
        </div>

        <p className="mt-5 text-[18px] leading-relaxed text-white/90">
          {brief.focus}
        </p>

        <div className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[17px] font-semibold text-white">
          {brief.cta}
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
