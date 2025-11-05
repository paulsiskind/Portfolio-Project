"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto grid gap-16 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="section-eyebrow">Aspen / Remote Worldwide</p>
            <motion.h1
              className="section-title text-balance"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Technology, architecture, and service orchestrated with quiet
              precision.
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg text-[var(--foreground-muted)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            >
              Hollyhock designs and maintains automation ecosystems for private
              residences and boutique hospitality. Lighting, audio, networks,
              and interfaces that dissolve into the architecture.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
          >
            <Button asChild size="lg">
              <Link href="/contact">Schedule a private consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/case-studies">View recent work</Link>
            </Button>
          </motion.div>
          <div className="grid gap-6 text-sm text-[var(--foreground-muted)] sm:grid-cols-3">
            <HeroStat label="Active residences" value="48" />
            <HeroStat label="Architecture partners" value="12" />
            <HeroStat label="Critical response" value="< 2 hours" />
          </div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
        >
          <div className="glass-surface relative overflow-hidden">
            <img
              src="/hollyhockAspen.png"
              alt="Architectural living space with panoramic Aspen view and calm lighting"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b141a] via-[#0b141a]/40 to-transparent px-10 py-9 text-sm text-[var(--foreground-muted)]">
              Lighting, media, networking, and voice logic choreographed with
              Hart & Ridge Architects for a Red Mountain estate.
            </div>
          </div>
        </motion.div>
      </div>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[radial-gradient(circle_at_20%_20%,rgba(185,58,44,0.28),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(209,164,86,0.18),transparent_45%)]",
          "opacity-70"
        )}
      />
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-white/15 pl-4">
      <p className="text-2xl font-semibold text-[var(--foreground)]">{value}</p>
      <p>{label}</p>
    </div>
  );
}
