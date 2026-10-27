import React from 'react';
import lifeStyleImage from '../../Images/LifeStyle.webp';

const LifeStyle = () => {
    return (
        <section className="relative overflow-hidden bg-ink py-10 text-white lg:py-14">
            <div data-scrollbar data-from="right" className="load-bar absolute bottom-1/4 right-0 h-10 w-48 bg-gradient-to-t from-orangeL to-orangeR opacity-40 sm:h-12 sm:w-72 lg:h-14 lg:w-96" aria-hidden="true" />
            <div data-scrollbar data-from="right" className="load-bar absolute bottom-10 right-0 h-10 w-1/2 bg-gradient-to-t from-orangeL to-orangeR opacity-40 sm:bottom-14 sm:h-12 lg:h-14" aria-hidden="true" />

            <div className="container relative">
                <h2 data-reveal className="section-title title-bar text-center">Fit for your lifestyle</h2>

                <p data-reveal className="mx-auto my-6 max-w-2xl text-center font-Outfit text-base sm:my-8 sm:text-lg lg:my-10 xl:text-20px">
                    Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow. You’ll find movement for every mood with classes sorted by time, style, and skill level.
                </p>

                <div data-reveal="zoom" className="mx-auto mb-5 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3">
                    <div className="relative">
                        <div className="photo-accent" aria-hidden="true" />
                        <img className="relative z-10 h-auto w-full" src={lifeStyleImage} alt="Member training with a kettlebell" width="576" height="381" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifeStyle;
