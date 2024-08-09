
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-slate-200 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Contact Me</h1>

        {/* Contact Icons */}
        <div className="text-center mb-8">
          <div className="inline-block mx-2">
            <a href="mailto:abdellasiraje00@gmail.com" className="text-3xl text-gray-800 hover:text-gray-900">
              <FaEnvelope />
            </a>
          </div>
          <div className="inline-block mx-2">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
          <div className="inline-block mx-2">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800 hover:text-gray-900">
              <FaGithub />
            </a>
          </div>
          <div className="inline-block mx-2">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-3xl text-green-600 hover:text-green-700">
              <FaWhatsapp />
            </a>
          </div>
          <div className="inline-block mx-2">
            <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-400 hover:text-blue-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Email Form */}
        <div className="max-w-lg mx-auto">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="John Doe" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="example@mail.com" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
              <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your message here..." />
            </div>
            
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
