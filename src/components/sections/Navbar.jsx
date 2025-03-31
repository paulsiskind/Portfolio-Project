import { useEffect } from "react"

export const Navbar = (menuOpen, setMenuOpen) => {
    console.log("Navbar rendered>>>>>>>>>>>>>>>>>>>>>>>>>");

    useEffect(() => {
        console.log("Navbar rendered>>>>>>>>>>>>>>>>>>>>>>>>>");
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }
    , [menuOpen]);
    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,.8)] backdrop-blur-lg border-b border-white/10 shadow-lg"> 
        <div className="max-w-5xl mx-auto px-4">
            <div className='flex justify-between items-center h-16'>
                <a href="#Home" className="text-xl font-mono font-bold text-white">
                    {" "}
                    HollyHock<span className="text-blue-500">Automations</span> {" "}
                </a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-4xl" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#Home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="#About" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#Projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#Contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    {/* <a href="#Pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a> */}
                </div>
            </div>
        </div>
    </nav>
    )
}