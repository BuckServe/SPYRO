import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink, useLocation } from 'react-router-dom';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';

const LINKS = [
    { to: '/Classes', label: 'Classes' },
    { to: '/team', label: 'Team' },
    { to: '/about-us', label: 'About Us' },
    { to: '/gallery', label: 'Gallery' },
];

const linkClass = ({ isActive }) =>
    `no-underline transition-colors duration-200 hover:text-orangeR ${isActive ? 'text-orangeR' : 'text-white'}`;

const SNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close the mobile menu whenever the page changes
    useEffect(() => setIsMobileMenuOpen(false), [pathname]);

    const solid = isScrolled || isMobileMenuOpen;

    return (
        <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${solid ? 'bg-ink shadow-lg shadow-black/30' : 'bg-transparent'}`}>
            <div className="container flex items-center justify-between py-4">
                <Link
                    to="/"
                    className="bg-gradient-to-r from-orangeL to-orangeR bg-clip-text text-2xl font-extrabold text-transparent no-underline"
                >
                    SPYRO
                </Link>

                <div className="hidden items-center justify-center space-x-6 font-Outfit text-lg font-medium lg:flex">
                    {LINKS.map((l) => (
                        <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
                    ))}
                </div>

                <div className="hidden items-center lg:flex">
                    <OneSideCurveButton to="/contact_us" text="Contact Us" p_x="1.75rem" />
                </div>

                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen((o) => !o)}
                    className="flex items-center p-1 text-white lg:hidden"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`grid overflow-hidden bg-ink transition-[grid-template-rows] duration-300 lg:hidden ${isMobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="min-h-0">
                    <div className="flex flex-col items-center space-y-4 py-5 font-Outfit text-lg">
                        {LINKS.map((l) => (
                            <NavLink key={l.to} to={l.to} className={linkClass} tabIndex={isMobileMenuOpen ? 0 : -1}>{l.label}</NavLink>
                        ))}
                        <OneSideCurveButton to="/contact_us" text="Contact Us" p_x="3rem" tabIndex={isMobileMenuOpen ? 0 : -1} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SNavbar;
