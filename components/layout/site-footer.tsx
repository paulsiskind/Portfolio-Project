import Link from "next/link";

const footerLinks = [
  {
    title: "Studio",
    items: [
      { href: "/studio", label: "About" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/services", label: "Services" }
    ]
  },
  {
    title: "Information",
    items: [
      { href: "/contact", label: "Private Consultation" },
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--bg-primary)]">
      <div className="container mx-auto grid gap-10 py-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-[var(--foreground)]">
            Hollyhock Automations
          </h2>
          <p className="max-w-md text-sm text-[var(--foreground-muted)]">
            Architecture-led automation studio based in Aspen. Lighting, AV,
            networks, and intelligent interfaces crafted for private clients and
            boutique hospitality.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--foreground-muted)]">
                {section.title}
              </p>
              <ul className="space-y-2 text-sm text-[var(--foreground)]/90">
                {section.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[var(--foreground)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-[var(--foreground-muted)]">
        © {new Date().getFullYear()} Hollyhock Automations. Aspen ∙ Remote
        Worldwide.
      </div>
    </footer>
  );
}
