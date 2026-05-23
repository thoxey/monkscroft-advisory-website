"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const heroLogo = document.getElementById("hero-logo");
    if (!heroLogo) return;

    const update = () => {
      const rect = heroLogo.getBoundingClientRect();
      // Show nav logo once the hero logo's bottom is above ~30px from viewport top
      setLogoVisible(rect.bottom < 30);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-band/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-[1100px] items-center justify-end gap-5 px-6 py-3 text-sm sm:gap-7">
        {/* Tiny logo, fades in once hero logo is off screen */}
        <a
          href="#top"
          aria-label="Monkscroft Advisory"
          className={`absolute left-6 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
            logoVisible
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src="/logo.webp"
            alt="Monkscroft Advisory"
            width={612}
            height={210}
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm border border-accent px-3 py-1.5 text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="-mr-2 p-2 text-foreground sm:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path
                d="M5 5l12 12M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 7h16M3 11h16M3 15h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-border bg-band sm:hidden">
          <div className="mx-auto flex max-w-[1100px] flex-col px-6 py-2 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-foreground/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 font-medium text-accent"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
