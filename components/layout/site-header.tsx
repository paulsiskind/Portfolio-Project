import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="border-b border-white/10 bg-[var(--bg-primary)]/75">
        <div className="container mx-auto flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <span className="h-9 w-9 overflow-hidden rounded-full border border-white/20 bg-white/10">
              <span className="sr-only">Hollyhock Automations</span>
              <img
                src="/navbar.png"
                alt="Hollyhock bloom emblem"
                className="h-full w-full object-cover"
              />
            </span>
            Hollyhock
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-[var(--foreground-muted)] lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "primary", size: "sm" }),
              "hidden lg:inline-flex"
            )}
          >
            Private Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
