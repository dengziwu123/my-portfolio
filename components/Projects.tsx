import Image from "next/image";

const projects = [
  {
    title: "Personal portfolio",
    description:
      "This site—App Router, Tailwind, and layered UI—served as a hands-on lab while learning Next.js with an AI copilot.",
    tags: ["Next.js", "Tailwind", "Responsive"],
    href: "#hero",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Laptop on a desk with code on screen",
  },
  {
    title: "Credit watchlist (concept)",
    description:
      "A dashboard concept for tracking issuer updates, spread moves, and catalysts—pairing fixed-income discipline with a clear UI.",
    tags: ["Research", "Dashboard", "Finance"],
    href: "#contact",
    year: "Concept",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Financial charts and market data on screens",
  },
  {
    title: "Thesis notebook",
    description:
      "Structured templates for turning messy market reads into durable theses—experimenting with AI-assisted drafting and checklists.",
    tags: ["Writing", "Workflow", "AI-assisted"],
    href: "#contact",
    year: "In progress",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
    imageAlt: "Team reviewing analytics and documents",
  },
] as const;

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
            Projects
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Selected work
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Three snapshots of what I&apos;m building at the intersection of
            markets rigor and modern web craft. Swap images or copy anytime—each
            card links to a relevant section.
          </p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title} className="h-full">
              <a
                href={project.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:border-accent/30 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-slate-900 shadow-sm backdrop-blur-sm dark:bg-slate-900/85 dark:text-slate-100">
                    {project.year}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground transition group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center text-sm font-medium text-accent">
                    {project.href.startsWith("#contact")
                      ? "Discuss this project"
                      : "View related"}
                    <span
                      aria-hidden
                      className="ml-1 transition group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
