export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <p className="section-eyebrow">404</p>
      <h1 className="section-title">The page you are looking for has been archived.</h1>
      <p className="max-w-xl text-[var(--foreground-muted)]">
        Please return to the homepage or contact the studio for further guidance.
      </p>
      <a
        href="/"
        className="rounded-full border border-white/15 px-6 py-3 text-sm text-[var(--foreground)] hover:border-white/30"
      >
        Back to home
      </a>
    </div>
  );
}
