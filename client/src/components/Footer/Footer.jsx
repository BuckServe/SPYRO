import React from 'react';
import footerBG from '../../Images/footerbg.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <div
            className="w-full bg-cover bg-center py-12"
            style={{ backgroundImage: `url(${footerBG})` }}
        >
            <div className="text-center max-w-4xl mx-auto px-6">
                <a
                    href="/"
                    className="font-extrabold text-2xl text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text"
                >
                    SPYRO
                </a>
                <p className="text-white font-Outfit text-base sm:text-lg mt-4 px-4 sm:px-12 lg:px-20">
                    Join us today and experience the transformative power of our fitness classes. Don't wait to start your fitness journey. Take the first step towards a healthier, stronger you. Let's sweat, have fun, and make fitness a way of life together!
                </p>

                {/* Divider */}
                <div className="w-full border-t border-gray-400 mt-8 mb-6 opacity-50"></div>

                <div className="flex justify-center space-x-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-white text-xl hover:text-orange-500" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white text-xl hover:text-orange-500" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white text-xl hover:text-orange-500" />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-white text-xl hover:text-orange-500" />
                    </a>
                </div>

                <div className="text-white text-sm mt-6">
                    &copy; SPYRO 2025. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
