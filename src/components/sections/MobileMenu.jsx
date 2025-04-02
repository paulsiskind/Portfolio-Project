import { useEffect } from "react"
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,.8)] z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${
                            menuOpen
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                        }
                    `}                  
        >
            {/* Close Button */}
            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-3xl text-white focus:outline-none cursor-pointer transition-opacity duration-300"
            >
                &times;
            </button>

            {/* Menu Links */}
            {/* <a 
                href="#Home" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white transform transition-transform duration-300
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
            >
                Home
            </a>
            <a 
                href="#About"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white transform transition-transform duration-300
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
            >
                About
            </a>
            <a 
                href="#Projects"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white transform transition-transform duration-300
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
            >
                Projects
            </a>
            <a 
                href="#Contact" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white transform transition-transform duration-300
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
            >
                Contact
            </a> */}
        </div>
    );
};
