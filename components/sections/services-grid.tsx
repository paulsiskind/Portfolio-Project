"use client";

import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ServiceMasonry() {
  return (
    <section className="container mx-auto py-24">
      <div className="section-grid">
        <header className="space-y-4">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title max-w-2xl">
            Architectural technology orchestrated for private clients.
          </h2>
          <p className="max-w-2xl text-[var(--foreground-muted)]">
            Every engagement begins with architecture. We collaborate with
            designers, builders, and estate managers to deliver systems that
            disappear into the residence yet remain effortless to maintain.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className={cn(
                "glass-surface group relative overflow-hidden border border-white/8",
                "p-8 sm:p-10 transition-transform duration-300 ease-out"
              )}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground-muted)]">
                  {service.title}
                </p>
                <p className="text-lg text-[var(--foreground)]">
                  {service.summary}
                </p>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-[var(--foreground-muted)]">
                {service.disciplines.map((disc) => (
                  <li key={disc} className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-white/20" aria-hidden />
                    <span>{disc}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
