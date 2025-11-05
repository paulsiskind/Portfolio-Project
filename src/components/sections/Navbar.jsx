import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(16,33,43,0.85)] backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(10,18,28,0.45)]">
            <div className="hh-section flex items-center justify-between h-16">
                <a href="#Home" className="flex items-center gap-3">
                    <span className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-white/10 overflow-hidden">
                        <img src="/hollyhockAspen.png" alt="HollyHock icon" className="w-full h-full object-cover" />
                    </span>
                    <span className="font-['Playfair_Display'] text-xl font-semibold tracking-wide text-[var(--hh-cream)]">
                        HollyHock <span className="text-[var(--hh-red)]">Automations</span>
                    </span>
                </a>
                <button
                    type="button"
                    className="md:hidden text-3xl text-[var(--hh-cream)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hh-red)] rounded"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { href: "#Home", label: "Home" },
                        { href: "#About", label: "About" },
                        { href: "#Services", label: "Services" },
                        { href: "#Contact", label: "Contact" },
                    ].map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[#d9e1e8] hover:text-[var(--hh-cream)] transition-colors tracking-wide"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#Contact"
                        className="hh-btn-primary text-sm font-semibold tracking-wide px-5 py-2"
                    >
                        Start a Project
                    </a>
                </div>
            </div>
        </nav>
    )
}
