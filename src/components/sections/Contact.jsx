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
            .then((result) => {
                alert("Message sent successfully!");
                setFormData({
                    email: "",
                    name: "",
                    message: ""
                });
                e.target.reset(); // Reset the form fields
            })
            .catch((error) => {
                alert("There was an error. Please try again later.");
                console.error("EmailJS error:", error);
            });
    };

    return (
        <section id="Contact" className="relative min-h-screen flex items-center justify-end scroll-mt-16">
            <div className="w-1/2 h-full flex items-center justify-center ml-30">
                <div className="p-4 border-4 border-white rounded-lg shadow-2xl">
                    <img
                        src="/poolHouse1.jpeg" // Fixed image path
                        alt="Contact Us"
                        className="max-w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-start py-20 px-10 bg-gray-900">
                {/* Contact Us Form */}
                <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-2xl mb-10">
                    <h2 className="text-4xl font-bold mb-6 text-center text-white">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full p-3 bg-gray-700 text-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full p-3 bg-gray-700 text-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full p-3 bg-gray-700 text-gray-300 rounded"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

    
                <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4 text-white">Contact Information</h3>
                    <p className="text-lg text-gray-300 mb-2">
                        <strong>Email:</strong> contact@hollyhockautomations.com
                    </p>
                    <p className="text-lg text-gray-300">
                        <strong>Phone:</strong> (970) 404-0239
                    </p>
                </div>
            </div>     
        </section>
    );
};