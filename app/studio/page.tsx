import { Metadata } from "next";
import { partners } from "@/data/partners";
import { studioValues } from "@/data/values";

export const metadata: Metadata = {
  title: "Studio — Hollyhock Automations",
  description:
    "Aspen-based automation studio blending architecture, engineering, and concierge service for private clients."
};

export default function StudioPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="container mx-auto pt-24">
        <div className="section-grid">
          <header className="space-y-4">
            <p className="section-eyebrow">Studio</p>
            <h1 className="section-title max-w-3xl">
              Hollyhock is the automation studio trusted by Aspen architects and private client teams.
            </h1>
            <p className="max-w-3xl text-[var(--foreground-muted)]">
              Founded by integrators, programmers, and project managers with decades in private estates, yacht systems, and boutique hospitality. We keep the studio intentionally focused so every engagement receives senior attention and concierge care.
            </p>
          </header>

          <div className="grid gap-10 md:grid-cols-3">
            {studioValues.map((value) => (
              <article
                key={value.title}
                className="glass-surface space-y-4 p-8 text-[var(--foreground-muted)]"
              >
                <h2 className="text-xl font-display text-[var(--foreground)]">
                  {value.title}
                </h2>
                <p>{value.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="section-grid">
          <header className="space-y-4">
            <p className="section-eyebrow">Partners</p>
            <h2 className="section-title">Trusted collaborators</h2>
            <p className="max-w-2xl text-[var(--foreground-muted)]">
              Hollyhock maintains certifications and direct relationships with the world&apos;s leading lighting, automation, and networking providers, ensuring estate-level reliability.
            </p>
          </header>
          <div className="grid items-center gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
