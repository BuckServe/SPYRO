import React from 'react';
import lifeStyleImage from '../../Images/LifeStyle.png';

const LifeStyle = () => {
    return (
        <div className="bg-[#1E1E1E] text-white py-5 relative">
            {/* First blurred line */}
            <div className="absolute right-0 bottom-1/4 w-48 sm:w-72 lg:w-96 h-10 sm:h-12 lg:h-14 bg-gradient-to-t from-orangeL to-orangeR opacity-30"></div>
            {/* Second blurred line */}
            <div className="absolute right-0 bottom-10 sm:bottom-14 w-1/2 h-10 sm:h-12 lg:h-14 bg-gradient-to-t from-orangeL to-orangeR opacity-30"></div>

            <div className="flex justify-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className=" font-Outfit font-semibold text-48px">Fit for your lifestyle</h1>
            </div>

            <div className="sm:px-12 md:px-72 lg:px-72 my-6 sm:my-8 lg:my-10 text-center">
                <span className="font-Outfit font-regular text-sm sm:text-base lg:text-lg xl:text-20px">
                    Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow. You’ll find movement for every mood with classes sorted by time, style, and skill level.
                </span>
            </div>

            <div className="relative flex justify-center text-center mb-5">
                <div className="relative w-2/3 sm:w-1/2 md:w-1/3">
                    <div
                        className="absolute inset-x-0 -left-1 -right-1 -bottom-2 h-1/2 bg-orange-500 rounded rounded-tr-[30px] sm:rounded-tr-[40px] lg:rounded-tr-[50px]"
                        style={{ clipPath: "polygon(0 33%, 100% 0, 100% 100%, 0 100%)" }}
                    ></div>
                    <img className="relative z-10 w-full h-auto" src={lifeStyleImage} alt="life style" />
                </div>
            </div>
        </div>
    );
};

export default LifeStyle;
