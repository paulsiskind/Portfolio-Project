export type CaseStudy = {
  title: string;
  location: string;
  narrative: string;
  deliverables: string[];
  media: {
    src: string;
    alt: string;
  };
};

export const flagshipCaseStudy: CaseStudy = {
  title: "Ridgeview Residence",
  location: "Red Mountain, Aspen",
  narrative:
    "A 14,000 sq ft alpine estate orchestrated with adaptive lighting, curated acoustics, and secure remote management for a global family. Every touchpoint was refined with the architecture and interiors team so art, finishes, and the view remain the focal point.",
  deliverables: [
    "Architecture-grade lighting and shade logic",
    "Private cinema with custom acoustic envelope",
    "Redundant networking with secure remote oversight",
    "Voice-first interfaces for owners and estate staff"
  ],
  media: {
    src: "/poolHouse1.jpeg",
    alt: "Evening view of Ridgeview Residence living room with panoramic glazing and calm lighting."
  }
};
