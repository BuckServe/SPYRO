import React from 'react';
import cc1 from '../../Images/cc3.png';
import classessBG from '../../Images/classessBG.png';
import { Link } from 'react-router-dom';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';
const Strength = () => {
    return (
        <div
            className=" bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen p-20 text-white bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 1), rgba(30, 30, 30, 0) 30%), 
                                  linear-gradient(to bottom, rgba(30, 30, 30, 0) 60%, rgba(30, 30, 30, 1)), 
                                  url(${classessBG})`
            }}
        >
            <h1 className="font-Outfit font-semibold text-16 mb-4">Strength & Sweat</h1>
            <div className='flex flex-row'>
                <div className='flex-1 pe-10 font-Outfit font-regular text-18px'>
                    <p className=" mb-2">Category: Yoga</p>
                    <p className=" mb-2">Instructor: Esther Howard</p>
                    <p className=" mb-2">Duration: 2 Hours</p>
                    <p className=" mb-2">Number of Classes: 30</p>
                    <p className=" mb-6">Difficulty Level: Beginner</p>
                    <p className=" mb-6 font-Outfit font-normal text-18px">
                        This class focuses on building strength and increasing stamina through a series of yoga poses. Perfect for beginners who want to get a full-body workout while also improving flexibility and mindfulness.
                    </p>
                </div>
                <div className=" flex-1 relative flex justify-center text-center mb-5">
                    <div className="relative">
                        <div
                            className="absolute inset-x-0 -left-2 -right-2 -bottom-2 h-1/2 bg-orange-500 rounded rounded-tr-[30px] sm:rounded-tr-[40px] lg:rounded-tr-[50px]"
                            style={{ clipPath: "polygon(0 33%, 100% 0, 100% 100%, 0 100%)" }}
                        ></div>
                        <img className="relative z-10 w-full h-auto" src={cc1} alt="strength" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <Link to=""><OneSideCurveButton text="Enroll Now" p_x="2vw" p_y="10px" /></Link>
                <OneSideCurveButtonWithOutline text="Start a free trial" />
            </div>
        </div>
    );
};

export default Strength;
