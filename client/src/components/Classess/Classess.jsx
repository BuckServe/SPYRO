import React from 'react';
import cc1 from '../../Images/cc3.png';
import cc2 from '../../Images/cc2.png';
import cc3 from '../../Images/cc1.png';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import classessBG from '../../Images/classessBG.png';
import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';
import { Link } from 'react-router-dom';

const Classess = () => {
    const cardData = [
        {
            category: "Yoga",
            title: "Strength & Sweat",
            students: 29,
            duration: "2H",
            instructor: "Esther Howard",
            classes: 30,
            difficulty: "Beginner",
            image: cc1,
            link: '/Strength'
        },
        {
            category: "Fitness",
            title: "Total Body Burnout",
            students: 34,
            duration: "4H",
            instructor: "Wade Warren",
            classes: 45,
            difficulty: "Medium",
            image: cc2,
            link: '/BurnOut'
        },
        {
            category: "Yoga",
            title: "Bootcamp Challenge",
            students: 60,
            duration: "3H",
            instructor: "Robert Fox",
            classes: 52,
            difficulty: "Hard",
            image: cc3,
            link: '/BootCamp'
        }
    ];

    return (
        <div
            className="w-full min-h-screen bg-cover bg-center pb-10 lg:pb-20"
            style={{ backgroundImage: `url(${classessBG})` }}
        >
            <div className="flex flex-col items-center">
                <div className="text-center px-4 sm:px-0">
                    <h1 className="text-white font-Outfit font-semibold text-48px py-10 lg:py-20">Classes</h1>
                </div>

                {/* Use grid for consistent card heights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-white sm:px-0 md:px-24 lg:px-28">
                    {cardData.map((card, index) => (
                        <div key={index} className="bg-transparent flex flex-col h-full px-10">
                            <div className="relative flex justify-center text-center mb-5">
                                <div className="relative">
                                    <div
                                        className="absolute inset-x-0 -left-2 -right-2 -bottom-2 h-1/2 bg-orange-500 rounded rounded-tr-[30px] sm:rounded-tr-[40px] lg:rounded-tr-[50px]"
                                        style={{ clipPath: "polygon(0 33%, 100% 0, 100% 100%, 0 100%)" }}
                                    ></div>
                                    <img className="relative z-10 w-full h-auto" src={card.image} alt={card.title} />
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow">
                                <div className="flex justify-between font-Outfit font-medium text-sm sm:text-16px">
                                    <span>{card.category}</span>
                                    <span>{card.students} Students</span>
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="font-Outfit font-semibold text-lg sm:text-24px">{card.title}</span>
                                    <span className="font-Outfit font-medium text-sm sm:text-16px">{card.duration}</span>
                                </div>
                                <div className="pt-2 font-Outfit font-medium text-sm sm:text-16px flex-grow">
                                    <p><span>Instructor:</span><span> {card.instructor}</span></p>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>
                                            <div className="flex justify-between w-full">
                                                <span>No. of Classes:</span><span>{card.classes}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-between w-full">
                                                <span>Difficulty:</span><span>{card.difficulty}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <Link to={card.link}><OneSideCurveButton text="learn more" p_x="0.5rem" p_y="0.5rem" /></Link>
                                    <OneSideCurveButtonWithOutline text="Start a free trial" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-5'>
                    <OneSideCurveButton text="See all" p_x="8rem" p_y="0.5rem" />
                </div>
            </div>
        </div>
    );
};

export default Classess;
