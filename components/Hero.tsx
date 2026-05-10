export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-violet-200/60 px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8 dark:border-violet-500/20"
    >
      {/* Base wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-violet-100 via-sky-50 to-indigo-100 dark:from-[#0c1222] dark:via-violet-950/90 dark:to-blue-950"
      />
      {/* Purple spotlight — top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_100%_70%_at_15%_-10%,rgba(139,92,246,0.45),transparent_58%)] dark:bg-[radial-gradient(ellipse_100%_70%_at_15%_-10%,rgba(167,139,250,0.35),transparent_55%)]"
      />
      {/* Blue spotlight — upper right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_90%_55%_at_95%_5%,rgba(59,130,246,0.38),transparent_52%)] dark:bg-[radial-gradient(ellipse_90%_55%_at_95%_5%,rgba(96,165,250,0.22),transparent_50%)]"
      />
      {/* Indigo depth — bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_85%_55%_at_50%_110%,rgba(99,102,241,0.25),transparent_55%)] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_110%,rgba(129,140,248,0.18),transparent_52%)]"
      />
      {/* Soft vignette for readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-violet-950/5 dark:to-slate-950/60"
      />
      {/* Subtle mesh grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] dark:[background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 inline-flex items-center rounded-full border border-white/40 bg-white/55 px-3 py-1 text-xs font-medium text-violet-950/80 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/45 dark:text-violet-100/90">
          Fixed income investor · Learning AI &amp; Next.js
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          Bo Wu
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          My name is Bo Wu, I&apos;m a fixed income investor, and I&apos;m
          learning to build with AI and Next.js.
        </p>
        <p className="mt-8 max-w-2xl border-l-2 border-violet-500 pl-5 text-base font-medium leading-relaxed text-slate-800 dark:border-violet-400 dark:text-slate-100">
          Bridging markets discipline with thoughtful, AI-assisted engineering—
          shipping interfaces that earn trust the same way a thesis earns
          conviction.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110 hover:shadow-violet-500/35"
          >
            View selected work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/60 px-6 py-3 text-sm font-medium text-violet-950 shadow-sm backdrop-blur-md transition hover:bg-white/80 dark:border-white/15 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900/70"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
