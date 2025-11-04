import skills from "../../data/skills.json";

export const About = () => {
    const avSkills = skills.avSkills;

    return (
        <section
            id="About"
            className="relative min-h-screen flex items-center py-24 scroll-mt-[72px] px-4 sm:px-6"
            style={{
                backgroundImage: "url('/theatre1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 w-full max-w-5xl mx-auto">
                <div className="text-center">
                    <span className="inline-block text-sm tracking-[0.4em] uppercase text-blue-300 mb-4">
                        About
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Engineering Spaces That Feel Effortless
                    </h2>
                    <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        HollyHock Automations is a boutique AV partner in the Roaring Fork Valley. We bridge design,
                        engineering, and support so your technology feels as natural as the space around it—whether
                        you&apos;re an industry pro or exploring smart living for the first time.
                    </p>
                </div>

                <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-8 py-10 backdrop-blur-sm shadow-xl shadow-blue-900/20">
                    <h3 className="text-2xl font-semibold text-white text-center mb-6">
                        Trusted Home Control Partners
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 text-center max-w-3xl mx-auto mb-8">
                        We collaborate with industry-leading platforms to tailor each project. Tap a logo to learn more
                        about the ecosystems we integrate every day.
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
                                <span className="absolute inset-0 scale-110 rounded-xl bg-blue-500/20 blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                                <img
                                    src={skill.src}
                                    alt={skill.alt}
                                    className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain rounded-xl bg-white/5 p-4 shadow-xl transition-transform duration-300 group-hover:scale-105"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
