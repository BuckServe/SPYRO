import React from 'react';
import c1Image from '../../Images/c1.png';
import c2Image from '../../Images/c2.png';
import c3Image from '../../Images/c3.png';
import c4Image from '../../Images/c4.png';

const Moves = () => {
    return (
        <div className="bg-[#1E1E1E] py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center text-center mb-10">
                    <h1 className="font-Outfit font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">Find what moves you</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 bg-transparent">

                    {/* GYM Section */}
                    <div className="md:col-span-2 flex flex-col justify-between bg-transparent rounded-tl-[40px] lg:rounded-tl-[60px] h-full">
                        <div className="bg-transparent text-white rounded-lg overflow-hidden h-full flex flex-col">
                            <div className="relative h-full">
                                <img
                                    src={c1Image}
                                    alt="Gym"
                                    className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover border-t-2 border-l-2 border-r-2 border-transparent"
                                    style={{
                                        borderImage: 'linear-gradient(to right, #FF4300, #FF6400) 1',
                                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                    }}
                                />
                            </div>
                            <div className="pt-4 sm:pt-6 px-4 flex-grow space-y-3">
                                <h2 className="text-xl sm:text-2xl font-semibold">GYM</h2>
                                <p className="font-Outfit font-light text-sm sm:text-base lg:text-[14px]">
                                    Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Zumba Section */}
                    <div className="h-full flex flex-col">
                        <div className="relative overflow-hidden h-full">
                            <img src={c2Image} alt="Zumba" className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover" />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg sm:text-xl">
                                Zumba
                            </div>
                        </div>
                    </div>

                    {/* Yoga Section */}
                    <div className="h-full flex flex-col">
                        <div className="relative overflow-hidden h-full">
                            <img src={c3Image} alt="Yoga" className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover" />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg sm:text-xl">
                                Yoga
                            </div>
                        </div>
                    </div>

                    {/* Martial Arts Section */}
                    <div className="h-full flex flex-col">
                        <div className="relative overflow-hidden h-full">
                            <img src={c4Image} alt="Martial Arts" className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover" />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg sm:text-xl">
                                Martial Arts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moves;
