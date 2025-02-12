import React, { useState } from 'react';
import G1 from '../../Images/G1.png';
import G2 from '../../Images/G2.png';
import G3 from '../../Images/G3.png';
import G4 from '../../Images/G4.png';
import G5 from '../../Images/G5.png';
import G6 from '../../Images/G6.png';
import G7 from '../../Images/G7.png';
import G8 from '../../Images/G8.png';
import G9 from '../../Images/G9.png';
import G10 from '../../Images/G10.png';
import G11 from '../../Images/G11.png';
import G12 from '../../Images/G12.png';
import G13 from '../../Images/G13.png';
import G14 from '../../Images/G14.png';
import G15 from '../../Images/G15.png';
import G16 from '../../Images/G16.png';
import G17 from '../../Images/G17.png';
import G18 from '../../Images/G18.png';
import G19 from '../../Images/G19.png';
import G20 from '../../Images/G20.png';


const Gallery = () => {
    const instructorsData = [
        { id: 1, name: 'High Quality Benches', title: 'Main Hall', image: G1 },
        { id: 2, name: 'Pull Up Machine', title: 'For Biceps & Chest', image: G2 },
        { id: 3, name: 'Treadmill', title: 'Stamina Building', image: G3 },
        { id: 4, name: 'Flat Bench', title: 'For Chest & Shoulder', image: G4 },
        { id: 5, name: 'Cardio Exercise Area', title: 'All Types of Cardio Machines', image: G5 },
        { id: 6, name: 'Height Improvement', title: 'Body Stretching', image: G6 },
        { id: 7, name: 'David Rock', title: 'Bodybuilding Champion', image: G7 },
        { id: 8, name: 'Howard Gill', title: 'Professional Boxer', image: G8 },
        { id: 9, name: 'Famous Influencer', title: 'Influencers Visit', image: G9 },
        { id: 10, name: 'Liana Kart', title: 'Fitness Model', image: G10 },
        { id: 11, name: 'Happy Environment', title: 'Friendly Community', image: G11 },
        { id: 12, name: 'Mental Growth', title: 'Concentration Improvement', image: G12 },
        { id: 13, name: 'Weight Loss', title: 'Rope Skipping', image: G13 },
        { id: 14, name: 'Jack Mark', title: 'Fitness Model', image: G14 },
        { id: 15, name: 'Jack Mark', title: 'Fitness Model', image: G15 },
        { id: 16, name: 'Elizabeth', title: 'Weightlifter', image: G16 },
        { id: 17, name: 'New Members', title: 'Learning Proper Gym Techniques', image: G17 },
        { id: 18, name: 'Zumba', title: 'Weekly Zumba Classes', image: G18 },
        { id: 19, name: 'Pushups', title: 'Bodyweight Exercise', image: G19 },
        { id: 20, name: 'Pull Ups', title: 'Upper Body Strength', image: G20 }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = instructorsData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(instructorsData.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="bg-[#1E1E1E] py-10 relative">
            <div className="text-center text-white">
                <h1 className="font-Outfit font-semibold text-3xl md:text-4xl lg:text-5xl mb-10">Gallery</h1>
            </div>
            <div className="absolute left-0 bottom-1/2 w-96 h-14 bg-gradient-to-t from-orangeL to-orangeR opacity-30"></div>
            <div className="absolute left-0 bottom-1/3 w-1/2 h-14 bg-gradient-to-t from-orangeL to-orangeR opacity-30"></div>
            <div className="container mx-auto px-5 z-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentItems.map((instructor) => (
                        <div key={instructor.id} className="bg-transparent text-center z-10">
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src={instructor.image}
                                alt={instructor.name}
                            />
                            <div className="mt-4">
                                <h2 className="font-Outfit font-medium text-xl md:text-2xl text-white">{instructor.name}</h2>
                                <p className="text-gray-400 font-Outfit font-regular text-base md:text-lg">{instructor.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination Controls */}
                <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`relative inline-block text-slate-100 bg-orangeL transform -skew-x-12 hover:bg-white hover:text-orangeL font-Outfit font-medium text-base md:text-lg px-6 py-2 ${currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-orange-500 hover:bg-white"
                            }`}
                    >
                        Previous
                    </button>

                    {/* Pagination Number (Hidden on Mobile) */}
                    <span className="hidden sm:inline text-white text-lg font-semibold">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={nextPage}
                        disabled={currentPage >= totalPages}
                        className={`relative inline-block text-slate-100 bg-orangeL transform -skew-x-12 hover:bg-white hover:text-orangeL font-Outfit font-medium text-base md:text-lg px-8 py-2 ${currentPage >= totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-orange-500 hover:bg-white"
                            }`}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Gallery;