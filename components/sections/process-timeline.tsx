const steps = [
  {
    title: "01 — Architectural immersion",
    body:
      "We read plans, walk the residence, and align with the architect, designer, and GC. Technology intent is codified alongside material palettes and lifestyle scenarios."
  },
  {
    title: "02 — Engineering & fabrication",
    body:
      "Lighting loads, audio zones, rack layouts, and control logic are engineered. Mockups, interface prototypes, and commissioning plans are shared before installation."
  },
  {
    title: "03 — Commissioning & care",
    body:
      "We program on-site, train residents and staff, and transition into concierge support with proactive monitoring, seasonal adjustments, and estate-wide reporting."
  }
];

export function ProcessTimeline() {
  return (
    <section className="container mx-auto py-24">
      <div className="section-grid">
        <header className="space-y-4">
          <p className="section-eyebrow">Engagement</p>
          <h2 className="section-title max-w-2xl">
            A concierge process designed for private clients and their teams.
          </h2>
        </header>
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />
          <ul className="space-y-12">
            {steps.map((step, index) => (
              <li key={step.title} className="md:pl-16">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground-muted)]">
                    Step {index + 1}
                  </p>
                  <h3 className="text-2xl font-display text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="max-w-2xl text-[var(--foreground-muted)]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
