import { pillars } from "@/data/pillars";

export function ValuePillars() {
  return (
    <section className="container mx-auto py-24">
      <div className="glass-surface grid gap-10 px-8 py-12 md:flex md:items-center md:justify-between md:px-14 md:py-16">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="space-y-2">
            <p className="text-4xl font-display text-[var(--foreground)]">
              {pillar.kpi}
            </p>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
              {pillar.label}
            </p>
            <p className="max-w-[18rem] text-sm text-[var(--foreground-muted)]">
              {pillar.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
