import React, { useRef, useState } from 'react';

// All gallery photos (G1 ... G20) bundled as WebP
const ctx = require.context('../../Images', false, /^\.\/G\d+\.webp$/);
const img = (n) => ctx(`./G${n}.webp`);


const Gallery = () => {
    const instructorsData = [
        { id: 1, name: 'High Quality Benches', title: 'Main Hall', image: img(1) },
        { id: 2, name: 'Pull Up Machine', title: 'For Biceps & Chest', image: img(2) },
        { id: 3, name: 'Treadmill', title: 'Stamina Building', image: img(3) },
        { id: 4, name: 'Flat Bench', title: 'For Chest & Shoulder', image: img(4) },
        { id: 5, name: 'Cardio Exercise Area', title: 'All Types of Cardio Machines', image: img(5) },
        { id: 6, name: 'Height Improvement', title: 'Body Stretching', image: img(6) },
        { id: 7, name: 'David Rock', title: 'Bodybuilding Champion', image: img(7) },
        { id: 8, name: 'Howard Gill', title: 'Professional Boxer', image: img(8) },
        { id: 9, name: 'Famous Influencer', title: 'Influencers Visit', image: img(9) },
        { id: 10, name: 'Liana Kart', title: 'Fitness Model', image: img(10) },
        { id: 11, name: 'Happy Environment', title: 'Friendly Community', image: img(11) },
        { id: 12, name: 'Mental Growth', title: 'Concentration Improvement', image: img(12) },
        { id: 13, name: 'Weight Loss', title: 'Rope Skipping', image: img(13) },
        { id: 14, name: 'Jack Mark', title: 'Fitness Model', image: img(14) },
        { id: 15, name: 'Jack Mark', title: 'Fitness Model', image: img(15) },
        { id: 16, name: 'Elizabeth', title: 'Weightlifter', image: img(16) },
        { id: 17, name: 'New Members', title: 'Learning Proper Gym Techniques', image: img(17) },
        { id: 18, name: 'Zumba', title: 'Weekly Zumba Classes', image: img(18) },
        { id: 19, name: 'Pushups', title: 'Bodyweight Exercise', image: img(19) },
        { id: 20, name: 'Pull Ups', title: 'Upper Body Strength', image: img(20) }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const topRef = useRef(null);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(instructorsData.length / itemsPerPage);
    const currentItems = instructorsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goTo = (page) => {
        setCurrentPage(page);
        // Bring the top of the gallery back into view after changing page
        topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const pagerBtn = (disabled) =>
        `relative inline-block -skew-x-12 px-7 py-2 font-Outfit text-base font-medium transition-colors duration-200 md:text-lg ${
            disabled ? 'cursor-not-allowed bg-gray-500 text-gray-300' : 'bg-orangeL text-slate-100 hover:bg-white hover:text-orangeL'
        }`;

    return (
        <section ref={topRef} className="relative scroll-mt-16 overflow-hidden bg-ink py-12">
            <h1 className="section-title mb-10 text-center">Gallery</h1>
            <div className="absolute bottom-1/2 left-0 h-14 w-2/3 max-w-96 bg-gradient-to-t from-orangeL to-orangeR opacity-30" aria-hidden="true" />
            <div className="absolute bottom-1/3 left-0 h-14 w-1/2 bg-gradient-to-t from-orangeL to-orangeR opacity-30" aria-hidden="true" />
            <div className="container relative">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                    {currentItems.map((item) => (
                        <figure key={item.id} className="group text-center">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    className="aspect-[285/400] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={item.image}
                                    alt={item.name}
                                    width="285"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <figcaption className="mt-3">
                                <h2 className="font-Outfit text-base font-medium text-white sm:text-xl md:text-2xl">{item.name}</h2>
                                <p className="font-Outfit text-sm text-gray-400 sm:text-base md:text-lg">{item.title}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <nav className="mt-10 flex flex-wrap items-center justify-center gap-4" aria-label="Gallery pages">
                    <button type="button" onClick={() => goTo(currentPage - 1)} disabled={currentPage === 1} className={pagerBtn(currentPage === 1)}>
                        Previous
                    </button>
                    <span className="font-Outfit text-base font-semibold text-white sm:text-lg" aria-live="polite">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button type="button" onClick={() => goTo(currentPage + 1)} disabled={currentPage >= totalPages} className={pagerBtn(currentPage >= totalPages)}>
                        Next
                    </button>
                </nav>
            </div>
        </section>
    );
};

export default Gallery;
