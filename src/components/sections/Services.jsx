export const Services = () => {
    const remoteServices = ["Support", "Programming", "Troubleshooting", "Consulting", "Design"];

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

    const deliveryPhases = [
        {
            title: "Discovery & Strategy",
            detail:
                "Immersive workshops and walkthroughs that uncover how you live and work, translating goals into a technical brief.",
        },
        {
            title: "Engineering & Build",
            detail:
                "System design, documentation, and implementation handled by senior engineers who stay hands-on until sign-off.",
        },
        {
            title: "Training & Lifecycle",
            detail:
                "White-glove onboarding, proactive maintenance, and growth planning so the system keeps pace with your needs.",
        },
    ];

    const cardBaseClasses =
        "relative overflow-hidden bg-[rgba(15,27,36,0.78)] border border-white/12 rounded-3xl p-8 shadow-[0_22px_50px_rgba(8,14,20,0.45)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(199,59,50,0.28)] backdrop-blur-sm before:absolute before:-inset-px before:-z-10 before:content-[''] before:bg-gradient-to-br before:from-[rgba(199,59,50,0.14)] before:via-transparent before:to-[rgba(16,33,43,0.55)]";

    return (
        <section
            id="Services"
            className="relative min-h-screen flex items-center justify-center py-28 mt-16 overflow-hidden"
            style={{
                backgroundImage: "url('/office1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(16,33,43,0.55)] via-[rgba(14,24,34,0.6)] to-[rgba(8,14,20,0.46)]" />
            <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-[rgba(199,59,50,0.12)] blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[rgba(242,217,161,0.08)] blur-3xl rounded-full" />

            <div className="relative z-10 hh-section">
                <div className="text-center mb-16 space-y-6">
                    <div className="hh-tag justify-center">
                        <span>Service Suite</span>
                    </div>
                    <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-[var(--hh-offwhite)]">
                        Tailored Automations For Every Environment
                    </h2>
                    <p className="text-[#d4dbe2]/90 max-w-3xl mx-auto leading-relaxed">
                        Whether we&apos;re elevating a mountainside residence or orchestrating smart offices, each engagement
                        unfolds with boutique attention—strategy, deployment, and long-term stewardship woven together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className={cardBaseClasses}>
                        <div className="mb-6">
                            <span className="uppercase text-xs tracking-[0.3em] text-[var(--hh-cream)]/70 block mb-2">
                                Integrated environments
                            </span>
                            <h3 className="text-2xl font-semibold text-white">Onsite Services</h3>
                        </div>
                        <p className="text-[#d6dee5]/90 text-sm md:text-base mb-6">
                            We architect, install, and program systems that elevate every moment—effortless to live with, yet
                            powerful when you need to take command.
                        </p>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[var(--hh-offwhite)] text-base md:text-lg">
                            {onsiteServices.map((service) => (
                                <li key={service} className="flex items-center text-sm md:text-base">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-[var(--hh-cream)]/80" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cardBaseClasses}>
                        <div className="mb-6">
                            <span className="uppercase text-xs tracking-[0.3em] text-[var(--hh-cream)]/70 block mb-2">
                                Remote support
                            </span>
                            <h3 className="text-2xl font-semibold text-white">Remote Services</h3>
                        </div>
                        <p className="text-[#d6dee5]/90 text-sm md:text-base mb-6">
                            Rapid-response expertise delivered from anywhere. Ideal for fast turnarounds, proactive
                            maintenance, and keeping complex ecosystems humming.
                        </p>
                        <ul className="space-y-3 text-[var(--hh-offwhite)] text-base md:text-lg">
                            {remoteServices.map((service) => (
                                <li key={service} className="flex items-center text-sm md:text-base">
                                    <span className="mr-3 h-2 w-2 rounded-full bg-[var(--hh-red)]/80" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cardBaseClasses}>
                        <div className="mb-6">
                            <span className="uppercase text-xs tracking-[0.3em] text-[var(--hh-cream)]/70 block mb-2">
                                Partnership
                            </span>
                            <h3 className="text-2xl font-semibold text-white">Engagement Blueprint</h3>
                        </div>
                        <p className="text-[#d6dee5]/90 text-sm md:text-base mb-6">
                            Our team stays embedded from concept to lifecycle support, operating as an extension of your
                            architects, designers, and IT counterparts.
                        </p>
                        <ul className="space-y-4 text-[var(--hh-offwhite)] text-sm md:text-base">
                            {deliveryPhases.map((phase) => (
                                <li key={phase.title} className="border-l border-[rgba(242,217,161,0.25)] pl-4">
                                    <p className="text-[var(--hh-cream)] font-semibold">{phase.title}</p>
                                    <p className="text-[#d6dee5]/80 mt-1">{phase.detail}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 bg-[rgba(199,59,50,0.12)] border border-[rgba(199,59,50,0.28)] rounded-xl p-6">
                            <p className="text-[var(--hh-cream)] font-semibold mb-2 text-sm md:text-base">
                                Need a custom scope?
                            </p>
                            <p className="text-[#d6dee5]/90 text-sm md:text-base">
                                Let&apos;s co-design your roadmap. We move from discovery to handoff with white-glove project
                                management and tailored training.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
