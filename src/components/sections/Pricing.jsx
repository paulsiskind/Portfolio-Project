export const Pricing = () => {
    return (
        <section id="Pricing" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Example pricing cards */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Basic</h3>
                        <p className="text-gray-400">Description of the plan goes here.</p>
                        <p className="text-2xl font-semibold mt-4">$10</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Buy Now</button>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Standard</h3>
                        <p className="text-gray-400">Description of the plan goes here.</p>
                        <p className="text-2xl font-semibold mt-4">$20</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Buy Now</button>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Premium</h3>
                        <p className="text-gray-400">Description of the plan goes here.</p>
                        <p className="text-2xl font-semibold mt-4">$30</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Buy Now</button>
                    </div>
                    {/* Add more pricing cards as needed */}
                </div>
            </div>
        </section>
    );
}
