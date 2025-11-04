export const Home = () => {
    return (
        <section
            id="Home"
            className="relative min-h-screen flex items-center justify-center py-24 scroll-mt-[72px] px-4 sm:px-6"
            style={{
                backgroundImage: "url('/house1.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-3xl text-center text-white space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                    Welcome to HollyHock Automations
                </h1>
                <p className="text-base sm:text-lg text-gray-200">
                    A boutique AV company based in the Roaring Fork Valley, crafting smarter spaces for living and working.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <a
                        href="#About"
                        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg shadow-blue-500/30"
                    >
                        About
                    </a>
                    <a
                        href="#Services"
                        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg shadow-blue-500/30"
                    >
                        Services
                    </a>
                    <a
                        href="#Contact"
                        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg shadow-blue-500/30"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
