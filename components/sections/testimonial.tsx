import { testimonial } from "@/data/testimonials";

export function TestimonialSection() {
  return (
    <section className="container mx-auto py-24">
      <div className="glass-surface px-10 py-16 text-center md:px-16">
        <p className="section-eyebrow mb-6">Testimonials</p>
        <blockquote className="mx-auto max-w-3xl text-2xl font-display text-[var(--foreground)]">
          “{testimonial.quote}”
        </blockquote>
        <p className="mt-6 text-sm text-[var(--foreground-muted)]">
          {testimonial.author} · {testimonial.role}
        </p>
      </div>
    </section>
  );
}
