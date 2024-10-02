import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#abb5c6] py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-[#141414] mb-8 text-center">Contact Me</h1>

        {/* Contact Icons */}
        <div className="text-center mb-8">
          <div className="inline-block mx-2">
            <a href="mailto:abdellasiraje00@gmail.com" className="text-3xl text-[#5A5A5A] hover:text-[#141414]">
              <FaEnvelope />
            </a>
          </div>
          <div className="inline-block mx-2">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#2E7AFA] hover:text-[#1F5EBD]"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="inline-block mx-2">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#5A5A5A] hover:text-[#141414]"
            >
              <FaGithub />
            </a>
          </div>
          <div className="inline-block mx-2">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#41B883] hover:text-[#349765]"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="inline-block mx-2">
            <a
              href="https://t.me/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#2E7AFA] hover:text-[#1F5EBD]"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Email Form */}
        <div className="max-w-lg w-full mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#141414] text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-[#D1D5DB] rounded-lg"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-[#141414] text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-[#D1D5DB] rounded-lg"
                placeholder="example@mail.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-[#141414] text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-[#D1D5DB] rounded-lg"
                placeholder="Your message here..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#2E7AFA] text-white py-2 px-6 rounded-lg hover:bg-[#1F5EBD] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
