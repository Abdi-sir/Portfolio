import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const aboutRef = useRef(null);
    const [showContent, setShowContent] = useState(false);


    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowContent(true);
    //     }, 500);

    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         const windowHeight = window.innerHeight;

    //         // Scale effect based on scroll
    //         if (scrollPosition <= windowHeight) {
    //             const scaleFactor = 1 + scrollPosition / windowHeight;
    //             setSplineScale(scaleFactor > 1.8 ? 1.8 : scaleFactor); // Slightly reduced max scale
    //         }

    //         // Smooth scroll to the next section
    //         if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //             window.scrollTo({
    //                 top: window.innerHeight,
    //                 behavior: 'smooth',
    //             });
    //         }

    //         // Animate elements on scroll
    //         document.querySelectorAll('.scroll-animate').forEach((element) => {
    //             const rect = element.getBoundingClientRect();
    //             if (rect.top < window.innerHeight && rect.bottom > 0) {
    //                 element.classList.add('animate__animated', 'animate__slideInUp');
    //             } else {
    //                 element.classList.remove('animate__slideInUp');
    //             }
    //         });
    //     };

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.add('slide-in-active');
    //                 }
    //             });
    //         },
    //         { threshold: 0.2 }
    //     );

    //     if (aboutRef.current) {
    //         observer.observe(aboutRef.current);
    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         if (aboutRef.current) {
    //             observer.unobserve(aboutRef.current);
    //         }
    //     };
    // }, []);

    return (
        <section
            id="contact"
        
            className={`min-h-screen bg-[#EAEFF2] py-16 transition-opacity duration-500 'opacity-100'}`}
        >
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-bold text-[#05263b] mb-12 text-center">Contact Me</h1>

                {/* Contact Icons */}
                <div className="text-center mb-8">
                    <div className="inline-block mx-2">
                        <a href="mailto:abdellasiraje00@gmail.com" className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8]">
                            <FaEnvelope />
                        </a>
                    </div>
                    <div className="inline-block mx-2">
                        <a
                            href="https://www.linkedin.com/in/abdella-siraje"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8]"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="inline-block mx-2">
                        <a
                            href="https://github.com/abdi-sir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8]"
                        >
                            <FaGithub />
                        </a>
                    </div>
                    <div className="inline-block mx-2">
                        <a
                            href="https://wa.me/2519067415600"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8]"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                    <div className="inline-block mx-2">
                        <a
                            href="https://t.me/abdellasiraje"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8]"
                        >
                            <FaTelegram />
                        </a>
                    </div>
                </div>

                {/* Email Form */}
                <div className="w-4/5 mx-auto">
                    <form className="bg-[#aeb8c4] bg-opacity-75 p-8 rounded-lg shadow-md scroll-animate">
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-[#D1D5DB] rounded-lg bg-[#9CA6B8] placeholder-black"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-[#D1D5DB] rounded-lg bg-[#9CA6B8] placeholder-black"
                                placeholder="example@mail.com"
                            />
                        </div>

                        <div className="mb-4">
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full p-2 border border-[#D1D5DB] rounded-lg bg-[#9CA6B8] placeholder-black"
                                placeholder="Your message here..."
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#163b50] text-white py-2 px-6 rounded-lg hover:bg-[#05263b] transition duration-300"
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