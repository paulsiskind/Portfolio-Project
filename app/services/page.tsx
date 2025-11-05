import { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceMasonry } from "@/components/sections/services-grid";
import { ConsultationCTA } from "@/components/sections/consult-cta";

export const metadata: Metadata = {
  title: "Services — Hollyhock Automations",
  description:
    "Lighting, AV, networking, and intelligent interface services engineered for private residences and boutique hospitality."
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="container mx-auto pt-24">
        <div className="section-grid">
          <header className="space-y-4">
            <p className="section-eyebrow">Services</p>
            <h1 className="section-title max-w-3xl">
              Architecture-led automation services for clients who expect
              discretion and perfection.
            </h1>
            <p className="max-w-2xl text-[var(--foreground-muted)]">
              Hollyhock partners with architects, interior designers, and estate
              managers to deliver tailored lighting, media, networking, and
              control systems that blend into the architecture.
            </p>
          </header>

          <div className="grid gap-10">
            {services.map((service) => (
              <article key={service.id} className="glass-surface p-10">
                <p className="section-eyebrow mb-3">{service.title}</p>
                <h2 className="text-3xl font-display text-[var(--foreground)]">
                  {service.summary}
                </h2>
                <ul className="mt-8 grid gap-3 text-sm text-[var(--foreground-muted)] md:grid-cols-2">
                  {service.disciplines.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </div>
  );
}
