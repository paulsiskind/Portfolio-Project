export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const links = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Services", label: "Services" },
        { href: "#Contact", label: "Contact" },
    ];

    return (
        <div
            className={`md:hidden fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.92)] backdrop-blur-lg z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out px-6 ${
                menuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
            }`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-3xl text-white focus:outline-none cursor-pointer transition-opacity duration-300 hover:text-blue-400"
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
                        className={`text-2xl font-semibold text-white transition duration-200 ${
                            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        } hover:text-blue-400`}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
            <div className="absolute bottom-10 text-center text-sm text-gray-400">
                <p>Questions? <a href="#Contact" onClick={() => setMenuOpen(false)} className="text-blue-400 hover:underline">Message Us</a></p>
            </div>
        </div>
    );
};
