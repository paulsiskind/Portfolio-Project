export const Projects = () => {
    return (
        <section id="Projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Example project cards */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Project Title 1</h3>
                        <p className="text-gray-400">Description of the project goes here.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Project Title 2</h3>
                        <p className="text-gray-400">Description of the project goes here.</p>
                    </div>
                    {/* Add more project cards as needed */}
                </div>
            </div>
        </section>
    );
}