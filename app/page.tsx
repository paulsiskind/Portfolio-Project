import { HeroSection } from "@/components/sections/hero";
import dynamic from "next/dynamic";
const ValuePillars = dynamic(() =>
  import("@/components/sections/value-pillars").then((m) => ({
    default: m.ValuePillars
  }))
);
const ServiceMasonry = dynamic(() =>
  import("@/components/sections/services-grid").then((m) => ({
    default: m.ServiceMasonry
  }))
);
const CaseSpotlight = dynamic(() =>
  import("@/components/sections/case-spotlight").then((m) => ({
    default: m.CaseSpotlight
  }))
);
const PartnerMarquee = dynamic(() =>
  import("@/components/sections/partners-marquee").then((m) => ({
    default: m.PartnerMarquee
  }))
);
const ProcessTimeline = dynamic(() =>
  import("@/components/sections/process-timeline").then((m) => ({
    default: m.ProcessTimeline
  }))
);
const TestimonialSection = dynamic(() =>
  import("@/components/sections/testimonial").then((m) => ({
    default: m.TestimonialSection
  }))
);
const ConsultationCTA = dynamic(() =>
  import("@/components/sections/consult-cta").then((m) => ({
    default: m.ConsultationCTA
  }))
);

export default function Page() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <ValuePillars />
      <ServiceMasonry />
      <CaseSpotlight />
      <PartnerMarquee />
      <ProcessTimeline />
      <TestimonialSection />
      <ConsultationCTA />
    </div>
  );
}
