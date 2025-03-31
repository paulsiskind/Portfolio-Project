import emailjs from 'emailjs-com';

export const Contact = () => {

    const [formData, setFormData]= useState({
        email:"",
        name:"",
        message:"",
    });

    const SERVICE_ID = "service_zu63idr"
    const TEMPLATE_ID = "template_uqzccwe"
    const PUBLIC_KEY = "d-Z_gIFgw3cfopum4"
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                alert(result.text);
                setFormData({
                    email:"",
                    name:"",
                    message:""
                });
            }).catch(() => alert("There was an error. Please try again later."));
    };
    

    return (
        <section id="Contact" className="relative min-h-screen flex items-center justify-end py-20">
             <div className="w-1/2 h-full flex items-center justify-center ml-30">
                <div className="p-4 border-4 border-white rounded-lg shadow-2xl">
                    <img
                        src="public/poolHouse1.jpeg"
                        alt="Contact Us"
                        className="max-w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="max-w-5xl ml-auto px-4 mr-76">
                <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
                <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                        <input type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-2 bg-gray-700 text-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" 
                        className="block text-gray-300 mb-2">Email</label>
                        <input type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-2 bg-gray-700 text-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" 
                        className="block text-gray-300 mb-2">Message</label>
                        <textarea 
                        id="message" 
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows="4" 
                        value={formData.message}
                        className="w-full p-2 bg-gray-700 text-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Send Message</button>
                </form>
            </div>
        </section>
    );
}