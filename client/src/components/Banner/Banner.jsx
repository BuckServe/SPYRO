import React from 'react';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import backgroundImg from '../../Images/background.webp';

const Banner = () => {
    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pb-16 pt-24 lg:min-h-[115vh]">
            <div
                className="hero-bg absolute inset-0 bg-cover bg-[70%_center] bg-no-repeat"
                aria-hidden="true"
                style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 1), rgba(30, 30, 30, 0) 30%),
                                  linear-gradient(to bottom, rgba(30, 30, 30, 0) 60%, rgba(30, 30, 30, 1)),
                                  url(${backgroundImg})`,
                }}
            />
            {/* Darken the left side on small screens so the text stays readable over the photo */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent xl:hidden" aria-hidden="true" />
            <div className="container relative">
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    <div className="hero-in max-w-xl text-white">
                        <h1 className="font-orbitron text-4xl font-bold leading-tight sm:text-5xl sm:leading-snug lg:text-6xl xl:text-[64px]">
                            <span className="stroke-glow text-transparent" style={{ WebkitTextStroke: '2px #FF4300' }}>
                                Unleash
                            </span>{' '}
                            your <br /> inner Athlete
                        </h1>
                        <p className="mt-4 font-Outfit text-sm font-medium leading-relaxed sm:text-base lg:text-lg">
                            Get ready to sweat it out and achieve your fitness goals with our high-energy fitness classes! Our classes are designed to cater to all fitness levels and provide a fun and motivating environment to help you reach your peak performance.
                        </p>
                        <div className="mt-8">
                            <OneSideCurveButton to="/contact_us" text="Start free trial" p_x="2rem" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
