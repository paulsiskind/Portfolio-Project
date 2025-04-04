export const Services = () => {
    return (
        <section id="Services" className="min-h-screen flex items-center justify-center py-20 mt-16" style={{ 
            backgroundImage: "url('/office1.png')",
            backgroundSize: "cover", // Ensures the image covers the entire section
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            height: "100vh",

}}>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Example project cards */}
                    <div className="p-6 rounded-lg shadow-lg"
                            style={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }} // Equivalent to bg-gray-800 with 80% opacity
                        >
                        <h3 className="text-xl font-semibold mb-4">Remote Services</h3>
                        <ul className="list-disc list-inside text-gray-400">
                            <li className="mb-2">
                                Support
                            </li>
                            <li className="mb-2">
                                Programming
                            </li>
                            <li className="mb-2">
                                Troubleshooting
                            </li>
                            <li className="mb-2">
                                Consulting
                            </li>
                            <li className="mb-2">
                                Design
                            </li>
                        </ul>

                        <p className="text-xl font-semibold mb-4 mt-4">We Are Here To Help</p>
                        <p className="text-gray-400"> These Servies are not just for the end user.  We are here to help other AV Pro's Level Up and compete against the Goliaths in the Room.</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg"
                            style={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }} // Equivalent to bg-gray-800 with 80% opacity
                         >
                        <h3 className="text-xl font-semibold mb-4">Onsite Services</h3>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-400">
    <li className="mb-2">Control Systems</li>
    <li className="mb-2">Smart Lighting</li>
    <li className="mb-2">Shades</li>
    <li className="mb-2">Audio</li>
    <li className="mb-2">Video</li>
    <li className="mb-2">Networks</li>
    <li className="mb-2">Programming</li>
    <li className="mb-2">Troubleshooting</li>
</ul>
                        
                    </div>
                    {/* Add more project cards as needed */}
                </div>
            </div>
        </section>
    );
}