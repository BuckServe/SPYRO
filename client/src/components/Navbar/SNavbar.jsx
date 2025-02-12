import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import { Link } from 'react-router-dom';

const SNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#1E1E1E]' : 'bg-transparent'}`}
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
                <Link
                    to='/'
                    className="font-extrabold text-2xl text-transparent bg-gradient-to-r from-orangeL to-orangeR bg-clip-text no-underline"
                    id="Nav-Icon"
                >
                    SPYRO
                </Link>

                <div className="hidden lg:flex justify-center items-center space-x-6 font-Outfit text-lg font-medium">
                    <Link to="/Classes" className="text-white no-underline">Classes</Link>
                    <Link to="/team" className="text-white no-underline">Team</Link>
                    <Link to="/about-us" className="text-white no-underline">About Us</Link>
                    <a href="/gallery" className="text-white no-underline">Gallery</a>
                </div>

                <div className="hidden lg:flex items-center">
                    <Link to="/contact_us"><OneSideCurveButton text="Contact Us" p_x="2vw" p_y="10px" /></Link>
                </div>

                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
                        {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden flex flex-col items-center bg-[#1E1E1E] text-white space-y-4 py-4">
                    <a href="/Classes" className="text-lg no-underline text-white">Classes</a>
                    <a href="/team" className="text-lg no-underline text-white">Team</a>
                    <a href="/about-us" className="text-lg no-underline text-white">About Us</a>
                    <a href="/gallery" className="text-lg no-underline text-white">Gallery</a>
                    <Link to="/contact_us"><OneSideCurveButton text="Contact Us" p_x="15vw" p_y="10px" /></Link>
                </div>
            )}
        </nav>
    );
};

export default SNavbar;
