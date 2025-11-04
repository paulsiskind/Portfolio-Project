export const Services = () => {
    const remoteServices = [
        "Support",
        "Programming",
        "Troubleshooting",
        "Consulting",
        "Design",
    ];

    const onsiteServices = [
        "Control Systems",
        "Smart Lighting",
        "Shades",
        "Audio",
        "Video",
        "Networks",
        "Programming",
        "Advanced Logic",
        "Design",
        "Installation",
        "Troubleshooting",
        "POE Lighting",
        "IP Video Matrixing",
        "Video Conferencing",
    ];

    const highlights = [
        "Certified across Savant, Control4, Crestron, and more",
        "Hands-on engineering with white-glove delivery",
        "Flexible retainers and project-based engagements",
    ];

    const cardBaseClasses =
        "relative overflow-hidden bg-[rgba(17,24,39,0.9)] border border-blue-500/30 rounded-2xl p-8 shadow-[0_25px_80px_rgba(59,130,246,0.35)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(96,165,250,0.55)] backdrop-blur-sm before:absolute before:-inset-px before:-z-10 before:content-[''] before:bg-gradient-to-br before:from-blue-500/20 before:via-transparent before:to-blue-500/10";

    return (
        <section
            id="Services"
            className="relative min-h-screen flex items-center justify-center py-24 mt-16"
            style={{
                backgroundImage: "url('/office1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
                <div className="text-center mb-14">
                    <span className="inline-block text-base tracking-[0.35em] uppercase text-blue-300 mb-5">
                        Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                        Tailored Solutions For Every Environment
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        From remote triage to full-scale deployments, we build smart spaces that feel effortless. Explore how we partner with homeowners and AV professionals alike.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className={cardBaseClasses}>
                        <div className="flex items-center mb-6">
                            <span className="text-3xl mr-3">🏠</span>
                            <h3 className="text-2xl font-semibold text-white">Onsite Services</h3>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base mb-6">
                            We architect, install, and program bespoke systems that elevate everyday living and mission-critical workspaces.
                        </p>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-100 text-base md:text-lg">
                            {onsiteServices.map((service) => (
                                <li key={service} className="flex items-center">
                                    <span className="text-blue-300 mr-2">•</span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cardBaseClasses}>
                        <div className="flex items-center mb-6">
                            <span className="text-3xl mr-3">🌐</span>
                            <h3 className="text-2xl font-semibold text-white">Remote Services</h3>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base mb-6">
                            Get expert help no matter where your project lives. Perfect for fast turnarounds and ongoing support.
                        </p>
                        <ul className="space-y-3 text-gray-100 text-lg">
                            {remoteServices.map((service) => (
                                <li key={service} className="flex items-center">
                                    <span className="text-blue-400 mr-3">▹</span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cardBaseClasses}>
                        <div className="flex items-center mb-6">
                            <span className="text-3xl mr-3">🤝</span>
                            <h3 className="text-2xl font-semibold text-white">Why Teams Choose Us</h3>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base mb-6">
                            HollyHock is your boutique partner—plug us in for the phase you need and we&apos;ll handle the technical heavy lifting.
                        </p>
                        <ul className="space-y-3 text-gray-100 text-lg">
                            {highlights.map((highlight) => (
                                <li key={highlight} className="flex items-start">
                                    <span className="text-blue-400 mr-3 mt-1">★</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 bg-blue-500/10 border border-blue-400/40 rounded-xl p-6">
                            <p className="text-blue-200 font-semibold mb-2 text-sm md:text-base">Need a custom scope?</p>
                            <p className="text-gray-300 text-sm md:text-base">
                                Let&apos;s co-design your roadmap. We move from vision to handoff with white-glove project management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
