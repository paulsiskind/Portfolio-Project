import { useEffect } from "react"

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
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
            <button onClick={() => setMenuOpen(false)} 
            className="absolute top-6 right-6 text-3xl text-white focus:outline-none cursor-pointer"
            >
                &times;
            </button>
            <a 
                href="#Home" 
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
                >Home
            </a>
            <a 
                href="#About"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)
                }
                >About
            </a>
            <a 
                href="#Projects"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)
                }
                >Projects
            </a>
            <a 
                href="#Contact" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)
                }
                >Contact</a>
         </div>
    );
};