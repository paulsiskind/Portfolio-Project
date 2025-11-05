export const Home = () => {
    const highlights = [
        { stat: "4.9★", label: "Client satisfaction rating" },
        { stat: "24/7", label: "Concierge support" },
        { stat: "100%", label: "Tailored implementations" },
    ];

    return (
        <section
            id="Home"
            className="relative min-h-screen flex items-center py-28 scroll-mt-[72px] overflow-hidden"
            style={{
                backgroundImage: "url('/house1.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(16,33,43,0.55)] via-[rgba(16,33,43,0.58)] to-[rgba(11,18,26,0.42)]" />
            <div className="absolute -top-48 -right-36 w-[420px] h-[420px] bg-[rgba(199,59,50,0.14)] blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-20 w-[360px] h-[360px] bg-[rgba(242,217,161,0.1)] blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 w-full hh-section flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="max-w-2xl space-y-8 text-center lg:text-left">
                    <div className="hh-tag justify-center lg:justify-start">
                        <span className="text-[0.7rem]">HollyHock Automations</span>
                    </div>
                    <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl leading-tight text-[var(--hh-offwhite)]">
                        Bespoke AV Experiences Crafted To Bloom
                    </h1>
                    <p className="text-base sm:text-lg text-[#d4dbe2]/90 leading-relaxed">
                        We blend intelligent systems, purposeful design, and white-glove service to shape homes and
                        workplaces that feel alive. Rooted in the Roaring Fork Valley—available wherever vision calls.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4">
                        <a href="#Contact" className="hh-btn-primary w-full sm:w-auto text-center">
                            Book a Discovery Call
                        </a>
                        <a href="#Services" className="hh-btn-ghost w-full sm:w-auto text-center">
                            Explore Capabilities
                        </a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6">
                        {highlights.map((item) => (
                            <div
                                key={item.stat}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center lg:text-left"
                            >
                                <p className="text-2xl font-bold text-[var(--hh-cream)]">{item.stat}</p>
                                <p className="text-xs uppercase tracking-[0.1rem] text-[#c8d2da]">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative flex-shrink-0">
                    <div className="relative w-[260px] sm:w-[300px] lg:w-[340px] mx-auto pb-16">
                        <div className="absolute -inset-6 rounded-[32px] border border-white/10 bg-white/10 blur-2xl opacity-40" />
                        <img
                            src="/hollyhockAspen.png"
                            alt="HollyHock emblem"
                            className="relative w-full rounded-[32px] border border-white/15 shadow-[0_45px_60px_rgba(12,19,28,0.55)] object-contain bg-[var(--hh-navy)]"
                        />
                        <div className="mt-6 bg-[rgba(16,33,43,0.9)] border border-white/10 rounded-2xl px-6 py-4 shadow-lg text-center max-w-[320px] mx-auto">
                            <p className="text-sm uppercase tracking-[0.3rem] text-[var(--hh-cream)]">
                                Signature Palette
                            </p>
                            <p className="text-xs text-[#c8d2da] mt-1">
                                Inspired by the HollyHock bloom—bold, balanced, and iconic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
