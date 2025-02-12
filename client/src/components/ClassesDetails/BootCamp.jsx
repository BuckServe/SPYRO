import React from 'react';
import cc3 from '../../Images/cc1.png'; // Using the new uploaded image
import classessBG from '../../Images/classessBG.png';
import { Link } from 'react-router-dom';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';

const BootCamp = () => {
    return (
        <div
            className="bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen p-20 text-white bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 1), rgba(30, 30, 30, 0) 30%), 
                                  linear-gradient(to bottom, rgba(30, 30, 30, 0) 60%, rgba(30, 30, 30, 1)), 
                                  url(${classessBG})`
            }}
        >
            <h1 className="font-Outfit font-semibold text-2xl mb-4">Yoga</h1>
            <div className="flex flex-row">
                <div className="flex-1 pe-10 font-Outfit font-regular text-lg">
                    <p className="mb-2">Bootcamp Challenge</p>
                    <p className="mb-2">Instructor: Robert Fox</p>
                    <p className="mb-2">Duration: 3 Hours</p>
                    <p className="mb-2">Number of Classes: 52</p>
                    <p className="mb-6">Difficulty Level: Hard</p>
                    <p className="mb-6 font-Outfit font-normal text-lg">
                        This intensive yoga bootcamp is designed to challenge your strength and endurance. Ideal for advanced practitioners looking to push their limits.
                    </p>
                </div>
                <div className="flex-1 relative flex justify-center text-center mb-5">
                    <div className="relative">
                        <div
                            className="absolute inset-x-0 -left-2 -right-2 -bottom-2 h-1/2 bg-orange-500 rounded rounded-tr-[30px] sm:rounded-tr-[40px] lg:rounded-tr-[50px]"
                            style={{ clipPath: "polygon(0 33%, 100% 0, 100% 100%, 0 100%)" }}
                        ></div>
                        <img className="relative z-10 w-full h-auto" src={cc3} alt="Bootcamp Challenge" />
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

export default BootCamp;
