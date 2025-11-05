import Image from "next/image";
import { partners } from "@/data/partners";

export function PartnerMarquee() {
  return (
    <section className="border-y border-white/10 bg-[var(--bg-secondary)]/60 py-16">
      <div className="container mx-auto">
        <p className="section-eyebrow mb-10 text-center">
          Selected technology partners
        </p>
        <div className="grid items-center gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={160}
                height={48}
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
