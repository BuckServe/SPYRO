import React from 'react';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import backgroundImg from '../../Images/background.png';

const Banner = () => {
    return (
        <div
            className="flex justify-center items-center min-h-[100vh] lg:min-h-[145vh] bg-cover bg-no-repeat relative"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 1), rgba(30, 30, 30, 0) 30%), 
                                  linear-gradient(to bottom, rgba(30, 30, 30, 0) 60%, rgba(30, 30, 30, 1)), 
                                  url(${backgroundImg})`
            }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="text-white">
                        <h1 className="font-orbitron font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] leading-tight sm:leading-snug">
                            <span
                                className="leading-snug text-transparent"
                                style={{ WebkitTextStroke: "2px #FF4300" }}
                            >
                                Unleash
                            </span> your <br /> inner Athlete
                        </h1>
                        <p className="mt-4 font-Outfit font-medium text-sm sm:text-base lg:text-lg xl:text-[18px]">
                            Get ready to sweat it out and achieve your fitness goals with our high-energy fitness classes! Our classes are designed to cater to all fitness levels and provide a fun and motivating environment to help you reach your peak performance.
                        </p>
                        <div className="mt-6">
                           
                            <OneSideCurveButton text="Start free trail" p_x="2vw" p_y="10px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
