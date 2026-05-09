const links = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://linkedin.com",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12 lg:p-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s connect
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Whether you want to talk markets, collaboration, or what I&apos;m
            learning in Next.js—send a note. I typically reply within a few
            business days.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {links.map((link) => (
              <li key={link.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {link.label}
                </p>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-2 block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition hover:text-accent hover:decoration-accent"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
