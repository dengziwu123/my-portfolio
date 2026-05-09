const skills = [
  "Fixed income",
  "Credit analysis",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "AI-assisted development",
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div className="relative aspect-square max-w-md lg:max-w-none">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-accent-soft to-transparent ring-1 ring-border" />
          <div className="absolute inset-6 rounded-2xl bg-card shadow-xl ring-1 ring-border" />
          <div className="relative flex h-full items-center justify-center p-12">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-accent-soft text-4xl font-bold text-accent">
                NW
              </div>
              <p className="text-sm font-medium text-muted">
                Investor · Builder in progress
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
            About me
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Markets, rigor, and new tools
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            I spend my professional life in fixed income—investing with
            discipline, reading risk, and stress-testing assumptions. I&apos;m
            now applying that same curiosity to software: clear structure,
            repeatable process, and honest communication.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            This site is part of that journey—built with Next.js and AI as
            copilot, not shortcut.
          </p>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Focus areas
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
