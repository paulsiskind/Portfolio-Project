import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    });

    const SERVICE_ID = "service_zu63idr";
    const TEMPLATE_ID = "template_uqzccwe";
    const PUBLIC_KEY = "d-Z_gIFgw3cfopum4";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert("Message sent successfully!");
                setFormData({
                    email: "",
                    name: "",
                    message: ""
                });
                e.target.reset();
            })
            .catch((error) => {
                alert("There was an error. Please try again later.");
                console.error("EmailJS error:", error);
            });
    };

    return (
        <section
            id="Contact"
            className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center scroll-mt-[72px] bg-[rgba(8,14,20,0.78)] overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(16,33,43,0.56)] via-[rgba(14,24,34,0.6)] to-[rgba(7,12,18,0.64)]" />
            <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-[rgba(199,59,50,0.1)] blur-3xl rounded-full" />
            <div className="absolute -bottom-24 left-10 w-[340px] h-[340px] bg-[rgba(242,217,161,0.08)] blur-3xl rounded-full" />

            <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 py-12 lg:py-20">
                <div className="w-full max-w-lg bg-[rgba(17,30,40,0.92)] border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(9,14,20,0.45)] p-8 sm:p-10 backdrop-blur">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">
                        Let&apos;s Start A Project
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 text-center mb-8">
                        Share a few details and we&apos;ll reach out with next steps.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 mb-2 text-sm uppercase tracking-wide">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 mb-2 text-sm uppercase tracking-wide">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-2 text-sm uppercase tracking-wide">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full hh-btn-primary text-base"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="mt-8 text-center text-sm text-[#cdd6dd]">
                        <p>
                            Prefer to call? <span className="text-[var(--hh-cream)] font-medium">(970) 404-0239</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 w-full lg:w-1/2 h-[320px] sm:h-[420px] lg:h-full flex items-center justify-center px-6 sm:px-10 py-12 lg:py-20">
                <div className="absolute inset-0 lg:static lg:w-auto lg:h-auto rounded-3xl overflow-hidden shadow-[0_40px_70px_rgba(6,10,15,0.65)] border border-white/10">
                    <img
                        src="/poolHouse1.jpeg"
                        alt="Immersive smart home lighting setup"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
