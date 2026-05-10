export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Bo Wu. All rights reserved.
        </p>
        <p className="text-sm text-muted">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
