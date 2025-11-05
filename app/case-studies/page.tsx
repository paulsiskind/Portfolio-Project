import Link from "next/link";
import { Metadata } from "next";
import { flagshipCaseStudy } from "@/data/case-study";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies — Hollyhock Automations",
  description:
    "Selected private client and boutique hospitality engagements across Aspen, Telluride, and beyond."
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="container mx-auto pt-24">
        <div className="section-grid">
          <header className="space-y-4">
            <p className="section-eyebrow">Case Studies</p>
            <h1 className="section-title max-w-3xl">
              Selected engagements, crafted with architecture-level detail.
            </h1>
            <p className="max-w-2xl text-[var(--foreground-muted)]">
              We partner with architects, designers, and estate teams to deliver
              automation ecosystems for private residences and boutique
              hospitality worldwide. Each case study demonstrates a different
              design philosophy and technical choreography.
            </p>
          </header>

          <article className="glass-surface grid gap-10 overflow-hidden px-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="section-eyebrow">Flagship — {flagshipCaseStudy.location}</p>
              <h2 className="text-4xl font-display text-[var(--foreground)]">
                {flagshipCaseStudy.title}
              </h2>
              <p className="text-[var(--foreground-muted)]">
                {flagshipCaseStudy.narrative}
              </p>
              <Link
                href="/case-studies/ridgeview"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                View study
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={flagshipCaseStudy.media.src}
                alt={flagshipCaseStudy.media.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
