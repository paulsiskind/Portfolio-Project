import skills from "../../data/skills.json"; 
export const About = () => {
    const avSkills = skills.avSkills;
     
    return (
        <section id="About" className="min-h-screen flex flex-col items-center overflow-auto py-20" 
        style={{ 
            backgroundImage: "url('/public/theatre1.png')",
            backgroundSize: "contain", // Ensures the image covers the entire section
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            height: "100vh",
}}>
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-8">About Us</h1>
                <div className="rounded-xl px-8 border-white/10 border hover:translate-y-1 transition-all text-bold">
                    <p className="text-lg mb-8">HollyHock Automations is a boutique AV company based in the Roaring Fork Valley.</p>
                    <p className="text-lg mb-8">We specialize in providing high-quality audio and video solutions for events, installations, and more.</p>
                    <p className="text-lg mb-8">Our team is dedicated to delivering exceptional service and ensuring that your experience with us is seamless and enjoyable.</p>
                    <p className="text-lg mb-8">Whether You are an AV Pro or an End User, we are here to provide a solution to whatever your problem..</p>
                    <div className="flex gap-4 items-center justify-center">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all text-center ">
                            <h3 className="text-3xl font-bold mb-8">Home Control</h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {avSkills.map((skill, index) => (
                                      <a
                                      key={index}
                                      href={skill.url} // Navigate to the company's webpage
                                      target="_blank" // Open the link in a new tab
                                      rel="noopener noreferrer" // Security best practice for external links
                                      className="hover:scale-105 transition-transform"
                                  >
                                      <img
                                          src={skill.src}
                                          alt={skill.alt}
                                          className="w-40 h-40 object-contain rounded-lg shadow-lg"
                                      />
                                  </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}