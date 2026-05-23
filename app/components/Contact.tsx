import SectionLine from "./SectionLine";

export default function Contact() {
  return (
    <section id="contact" className="bg-band py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <SectionLine align="center" />
        <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[19px] leading-relaxed text-body">
          For strategic advisory enquiries, speaking engagements or partnership
          discussions.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:james@monkscroft.com"
            className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Email James
          </a>
          <a
            href="https://www.linkedin.com/company/monkscroft/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
