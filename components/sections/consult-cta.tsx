import { Button } from "@/components/ui/button";

export function ConsultationCTA() {
  return (
    <section className="container mx-auto py-24">
      <div className="glass-surface grid gap-10 px-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="section-eyebrow">Next Step</p>
          <h2 className="section-title text-balance">
            Schedule a private consultation with the Hollyhock studio.
          </h2>
          <p className="max-w-xl text-[var(--foreground-muted)]">
            We meet clients in Aspen, New York, and Los Angeles, or remotely
            with secure design reviews. Introduce your residence, design team,
            timeline, and we will prepare an architectural technology brief.
          </p>
        </div>
        <div className="space-y-6 rounded-2xl border border-white/10 bg-white/4 p-8 text-sm text-[var(--foreground-muted)]">
          <form className="grid gap-4">
            <label className="grid gap-2 text-left">
              <span className="uppercase text-xs tracking-[0.3em] text-[var(--foreground-muted)]">
                Name
              </span>
              <input
                className="rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)]"
                placeholder="First and last name"
                required
              />
            </label>
            <label className="grid gap-2 text-left">
              <span className="uppercase text-xs tracking-[0.3em] text-[var(--foreground-muted)]">
                Email
              </span>
              <input
                type="email"
                className="rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)]"
                placeholder="you@domain.com"
                required
              />
            </label>
            <label className="grid gap-2 text-left">
              <span className="uppercase text-xs tracking-[0.3em] text-[var(--foreground-muted)]">
                Residence location
              </span>
              <input
                className="rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)]"
                placeholder="City, state, or region"
              />
            </label>
            <label className="grid gap-2 text-left">
              <span className="uppercase text-xs tracking-[0.3em] text-[var(--foreground-muted)]">
                Notes
              </span>
              <textarea
                className="min-h-[120px] rounded-3xl border border-white/15 bg-transparent px-5 py-4 text-sm text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)]"
                placeholder="Design partners, timeline, or priorities."
              />
            </label>
            <Button type="submit" className="justify-center">
              Request consultation
            </Button>
            <p className="text-xs text-[var(--foreground-muted)]">
              We respond within one business day. All inquiries are handled in
              confidence.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
