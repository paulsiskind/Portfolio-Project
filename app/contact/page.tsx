import { Metadata } from "next";
import { ConsultationCTA } from "@/components/sections/consult-cta";

export const metadata: Metadata = {
  title: "Contact — Hollyhock Automations",
  description:
    "Schedule a private consultation with Hollyhock Automations. Discreet, architecture-led automation for residences and boutique hospitality."
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="container mx-auto pt-24">
        <div className="section-grid">
          <header className="space-y-4 max-w-3xl">
            <p className="section-eyebrow">Contact</p>
            <h1 className="section-title">
              Introduce your residence, team, and priorities. We\'ll prepare an automation brief.
            </h1>
            <p className="text-[var(--foreground-muted)]">
              Hollyhock meets clients in Aspen, New York, Los Angeles, or remotely via secure session. All details remain confidential.
            </p>
          </header>
        </div>
      </section>
      <ConsultationCTA />
    </div>
  );
}
