import React from 'react';
import c1Image from '../../Images/c1.webp';
import c2Image from '../../Images/c2.webp';
import c3Image from '../../Images/c3.webp';
import c4Image from '../../Images/c4.webp';

const TILES = [
    { title: 'Zumba', image: c2Image },
    { title: 'Yoga', image: c3Image },
    { title: 'Martial Arts', image: c4Image },
];

const Moves = () => {
    return (
        <section className="bg-ink py-12">
            <div className="container">
                <h2 className="section-title mb-10 text-center">Find what moves you</h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {/* GYM */}
                    <div className="flex flex-col text-white sm:col-span-2 md:col-span-3 lg:col-span-2">
                        <div className="overflow-hidden rounded-tl-[40px] lg:rounded-tl-[60px]">
                            <img
                                src={c1Image}
                                alt="Gym"
                                width="511"
                                height="299"
                                className="h-56 w-full border-x-2 border-t-2 border-transparent object-cover sm:h-72 lg:h-[300px]"
                                style={{
                                    borderImage: 'linear-gradient(to right, #FF4300, #FF6400) 1',
                                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                }}
                            />
                        </div>
                        <div className="space-y-3 px-4 pt-4">
                            <h3 className="text-xl font-semibold sm:text-2xl">GYM</h3>
                            <p className="font-Outfit text-sm font-light sm:text-base">
                                Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.
                            </p>
                        </div>
                    </div>

                    {TILES.map((t) => (
                        <div key={t.title} className="group relative h-64 overflow-hidden sm:h-80 lg:h-auto lg:min-h-[400px]">
                            <img
                                src={t.image}
                                alt={t.title}
                                width="170"
                                height="400"
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-4 pt-10 text-center text-lg font-bold text-white sm:text-xl">
                                {t.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Moves;
