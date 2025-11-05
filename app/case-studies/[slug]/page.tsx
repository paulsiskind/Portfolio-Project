import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { flagshipCaseStudy } from "@/data/case-study";

const caseStudies = {
  ridgeview: flagshipCaseStudy
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const study = caseStudies[params.slug];
  if (!study) {
    return {};
  }
  return {
    title: `${study.title} — Hollyhock Automations`,
    description: study.narrative
  };
}

export default function CaseStudyPage({
  params
}: {
  params: { slug: string };
}) {
  const study = caseStudies[params.slug];
  if (!study) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-24">
      <section className="container mx-auto pt-24">
        <div className="section-grid">
          <header className="space-y-4">
            <p className="section-eyebrow">Case Study</p>
            <h1 className="section-title text-balance">{study.title}</h1>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground-muted)]">
              {study.location}
            </p>
          </header>
          <Image
            src={study.media.src}
            alt={study.media.alt}
            width={1600}
            height={900}
            className="h-auto w-full rounded-3xl object-cover"
            priority
          />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-[var(--foreground-muted)]">
              <p>{study.narrative}</p>
              <p>
                Hollyhock led the automation strategy end-to-end, working with
                interior designers, art consultants, and the construction team
                to integrate technology at the structural level. Confidentiality
                is maintained at the client\'s request.
              </p>
            </div>
            <aside className="glass-surface p-8 text-sm text-[var(--foreground-muted)]">
              <p className="section-eyebrow mb-4">Deliverables</p>
              <ul className="space-y-3">
                {study.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
