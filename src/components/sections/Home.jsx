export const Home = () => {
    return (
        <section id="Home" className="relative min-h-screen flex items-center justify-center py-20 scroll-mt-20" 
                            style={{ backgroundImage: "url('/public/house1.jpeg')",
                                backgroundSize: "cover", // Ensures the image covers the entire section
                                backgroundPosition: "center", // Centers the image
                                backgroundRepeat: "no-repeat", // Prevents the image from repeating

        }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to HollyHock Automations</h1>
                <p className="text-lg mb-8">A Boutique AV Company Based in the Roaring Fork Valley.</p>
                <a href="#Projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Projects</a>
                <a href="#About" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ml-4">About</a>
                <a href="#Contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ml-4">Contact</a>
            </div>
        </section>
    );
}