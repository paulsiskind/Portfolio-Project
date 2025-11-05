export type Service = {
  id: string;
  title: string;
  summary: string;
  disciplines: string[];
};

export const services: Service[] = [
  {
    id: "lighting",
    title: "Lighting & Atmosphere",
    summary:
      "Lighting architecture, scene programming, and shade choreography calibrated to daylight, artwork, and material palettes.",
    disciplines: [
      "Human-centric lighting design",
      "Shade automation",
      "Architectural fixture integration",
      "Wellness lighting logic"
    ]
  },
  {
    id: "av",
    title: "Audio / Visual Architecture",
    summary:
      "Cinema-grade audio, ultra-low profile video, and immersive media experiences that disappear into the interior language.",
    disciplines: [
      "Distributed audio plans",
      "4K / 8K video distribution",
      "Private cinema engineering",
      "Acoustic treatments"
    ]
  },
  {
    id: "networks",
    title: "Networks & Infrastructure",
    summary:
      "Enterprise-grade networks, resilient power systems, and security layers engineered for estates, compounds, and alpine remote sites.",
    disciplines: [
      "Redundant networking",
      "Secure remote access",
      "Power conditioning",
      "Estate-wide monitoring"
    ]
  },
  {
    id: "voice",
    title: "Intelligent Interfaces",
    summary:
      "Natural voice control, curated touch interfaces, and bespoke logic that adjusts gracefully for owners, guests, and staff.",
    disciplines: [
      "Voice + AI assistants",
      "Bespoke control UI",
      "Scenario modeling",
      "Predictive automations"
    ]
  }
];
