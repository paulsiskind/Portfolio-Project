import skills from "../../data/skills.json"; 
export const About = () => {
    const avSkills = skills.avSkills;
     
    return (
        <section id="About" className="min-h-screen flex flex-col items-center overflow-auto py-20">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-8">About Us</h1>
                <div className="rounded-xl px-8 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="text-lg mb-8">HollyHock Automations is a boutique AV company based in the Roaring Fork Valley.</p>
                    <p className="text-lg mb-8">We specialize in providing high-quality audio and video solutions for events, installations, and more.</p>
                    <p className="text-lg mb-8">Our team is dedicated to delivering exceptional service and ensuring that your experience with us is seamless and enjoyable.</p>
                    <p className="text-lg mb-8">Whether You are an AV Pro or an End User, we are here to provide a solution to whatever your problem..</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all text-center">
                            <h3 className="text-xl font-bold mb-4">Home Control</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {avSkills.map((skill, index) => (
                                     <img
                                     key={index}
                                     src={skill.src}
                                     alt={skill.alt}
                                     className="max-w-full h-auto object-cover rounded-lg shadow-lg"
                                 />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}