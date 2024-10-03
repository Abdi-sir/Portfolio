// SocialMediaLinks.js
import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

const SocialMediaLinks = ({ position }) => {
    return (
        <div className={`social-media-links ${position} bg-black text-white`}>

            
            <div className="flex flex-col justify-between h-full">
                <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8] mb-2"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8] mb-2"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8] mb-2"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="https://t.me/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8] mb-2"
                >
                    <FaTelegram />
                </a>
                <a
                    href="mailto:abdellasiraje00@gmail.com"
                    className="text-3xl text-[#aeb8c4] hover:text-[#9ca6b8]"
                >
                    <FaEnvelope />
                </a>
            </div>

            <style jsx>{`
                .social-media-links {
                    position: fixed; 
                    top: 50%; /* Center vertically */
                    transform: translateY(-50%); /* Adjust for centering */
                    z-index: 1000; /* Ensure it stays above other elements */
                    height: 300px; /* Set the height */
                    width: 60px; /* Set the width */
                    background-color: rgba(0, 0, 0, 0.8); /* Optional: Add background color with transparency */
                    border-radius: 10px; /* Optional: Round the corners */
                    padding: 10px; /* Optional: Add padding */
                }

                .social-media-links.left {
                    left: 10px; /* Position on the left */
                }

                .social-media-links.right {
                    right: 10px; /* Position on the right */
                }
            `}</style>
        </div>
    );
};

export default SocialMediaLinks;
