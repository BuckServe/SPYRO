import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import footerBG from '../../Images/footerbg.webp';

const SOCIALS = [
    { href: 'https://facebook.com', label: 'Facebook', Icon: FaFacebookF },
    { href: 'https://twitter.com', label: 'Twitter', Icon: FaTwitter },
    { href: 'https://instagram.com', label: 'Instagram', Icon: FaInstagram },
    { href: 'https://tiktok.com', label: 'TikTok', Icon: FaTiktok },
];

const Footer = () => {
    return (
        <footer className="w-full bg-ink bg-cover bg-center py-12" style={{ backgroundImage: `url(${footerBG})` }}>
            <div className="mx-auto max-w-4xl px-6 text-center">
                <Link to="/" className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-2xl font-extrabold text-transparent no-underline">
                    SPYRO
                </Link>
                <p className="mt-4 font-Outfit text-base text-white sm:px-12 sm:text-lg lg:px-20">
                    Join us today and experience the transformative power of our fitness classes. Don't wait to start your fitness journey. Take the first step towards a healthier, stronger you. Let's sweat, have fun, and make fitness a way of life together!
                </p>

                <div className="mb-6 mt-8 w-full border-t border-gray-400 opacity-50" />

                <div className="flex justify-center gap-6">
                    {SOCIALS.map(({ href, label, Icon }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white transition-colors hover:text-orange-500">
                            <Icon className="text-xl" />
                        </a>
                    ))}
                </div>

                <p className="mt-6 text-sm text-white">&copy; SPYRO {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
