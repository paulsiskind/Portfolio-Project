export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const links = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Services", label: "Services" },
        { href: "#Contact", label: "Contact" },
    ];

    return (
        <div
            className={`md:hidden fixed top-0 left-0 w-full bg-[rgba(16,33,43,0.88)] backdrop-blur-xl z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out px-6 ${
                menuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
            }`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-3xl text-[var(--hh-cream)] focus:outline-none cursor-pointer transition-opacity duration-300 hover:text-[var(--hh-red)]"
                aria-label="Close navigation menu"
            >
                &times;
            </button>

            <nav className="flex flex-col items-center space-y-6">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-[var(--hh-offwhite)] transition duration-200 ${
                            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        } hover:text-[var(--hh-red)]`}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
            <div className="absolute bottom-10 text-center text-sm text-[#cdd6dd]">
                <p>
                    Questions?{" "}
                    <a
                        href="#Contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-[var(--hh-cream)] hover:text-[var(--hh-red)] underline-offset-4 hover:underline"
                    >
                        Message us
                    </a>
                </p>
            </div>
        </div>
    );
};
