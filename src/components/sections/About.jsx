import skills from "../../data/skills.json";

export const About = () => {
    const avSkills = skills.avSkills;

    return (
        <section
            id="About"
            className="relative min-h-screen flex items-center py-28 scroll-mt-[72px] overflow-hidden"
            style={{
                backgroundImage: "url('/theatre1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(16,33,43,0.58)] via-[rgba(16,28,38,0.62)] to-[rgba(9,12,16,0.5)]" />
            <div className="absolute -top-40 right-10 w-[360px] h-[360px] bg-[rgba(199,59,50,0.12)] blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[rgba(242,217,161,0.06)] blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 hh-section grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                <div className="space-y-8 text-center lg:text-left">
                    <div className="hh-tag justify-center lg:justify-start">
                        <span>About</span>
                    </div>
                    <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--hh-offwhite)]">
                        Engineering Spaces That Feel Effortless
                    </h2>
                    <p className="text-base sm:text-lg text-[#d4dbe2]/90 leading-relaxed">
                        HollyHock Automations is a boutique AV practice born in the Roaring Fork Valley. We weave together
                        strategy, design, and ongoing care so your technology adapts as elegantly as the architecture it lives
                        within—whether you&apos;re an industry pro or exploring smart living for the first time.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 text-left">
                        {[
                            { title: "Consultative", blurb: "Workshops to map the ideal experience before hardware enters the scene." },
                            { title: "Crafted", blurb: "Systems tuned to your rhythm, not packaged kits pulled from a shelf." },
                            { title: "Sustained", blurb: "Lifecycle support, refreshes, and training long after the ribbon cutting." },
                        ].map((item) => (
                            <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-5">
                                <p className="text-sm font-semibold text-[var(--hh-cream)] tracking-wide uppercase mb-2">
                                    {item.title}
                                </p>
                                <p className="text-xs text-[#cdd5dd] leading-relaxed">{item.blurb}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl px-6 sm:px-10 py-10 backdrop-blur-sm shadow-[0_35px_60px_rgba(9,14,20,0.45)]">
                    <h3 className="text-2xl font-semibold text-white text-center mb-4">
                        Trusted Home Control Partners
                    </h3>
                    <p className="text-sm sm:text-base text-[#d4dbe2]/85 text-center mb-6">
                        Tap a logo to explore the ecosystems we elevate daily. Each alliance keeps us nimble as technology
                        evolves.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                        {avSkills.map((skill, index) => (
                            <a
                                key={index}
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center"
                            >
                                <span className="absolute inset-0 scale-110 rounded-xl bg-[rgba(199,59,50,0.2)] blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                                <img
                                    src={skill.src}
                                    alt={skill.alt}
                                    className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain rounded-xl bg-white/10 p-4 shadow-xl transition-transform duration-300 group-hover:scale-105"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
