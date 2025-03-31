export const Services = () => {
    return (
        <section id="Services" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Example project cards */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Remote Services</h3>
                        <p className="text-gray-400">Whether you live in the Roaring Fork Valley
                            or across the country, we can help with all your programming needs. Something about your system is not right?
                            We can fix that too.  Most the time we dont necassarily need to be on site to fix the issue.  We can do it remotely.
                        </p>
                        <p className="text-xl font-semibold mb-4 mt-4">We Are Here To Help</p>
                        <p className="text-gray-400"> These Servies are not just for the end user.  We are here to help other AV Pro's Level Up and compete against the Goliaths in the Room.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Onsite Services</h3>
                        <p className="text-gray-400">We are committed to providing comprehensive support to ensure your smart home system
                             operates effectively. Our services encompass advanced conditional programming and detailed site walkthroughs,
                              tailored to meet your specific requirements. We are dedicated to ensuring that your smart home truly embodies 
                              the essence of smart home technology. </p>
                    </div>
                    {/* Add more project cards as needed */}
                </div>
            </div>
        </section>
    );
}