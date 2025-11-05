import Image from "next/image";
import { flagshipCaseStudy } from "@/data/case-study";
import { Button } from "@/components/ui/button";

export function CaseSpotlight() {
  const caseStudy = flagshipCaseStudy;
  return (
    <section className="container mx-auto py-24">
      <div className="section-grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="section-eyebrow">Flagship Project</p>
          <h2 className="section-title">{caseStudy.title}</h2>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground-muted)]">
            {caseStudy.location}
          </p>
          <p className="max-w-2xl text-[var(--foreground-muted)]">
            {caseStudy.narrative}
          </p>
          <ul className="space-y-3 text-sm text-[var(--foreground-muted)]">
            {caseStudy.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" asChild>
            <a href="/case-studies/ridgeview">View detailed case study</a>
          </Button>
        </div>
        <div className="glass-surface relative overflow-hidden">
          <Image
            src={caseStudy.media.src}
            alt={caseStudy.media.alt}
            width={960}
            height={720}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
