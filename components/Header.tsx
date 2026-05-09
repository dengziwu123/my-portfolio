"use client";

import { useEffect, useState } from "react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-14 max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:flex-nowrap sm:px-6 sm:py-0 lg:px-8">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-foreground transition hover:text-accent"
        >
          Nathan Wu
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:brightness-110 dark:text-slate-950"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
