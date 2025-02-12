import React from 'react'
import cc1 from '../../Images/Instruc1.png';
import cc2 from '../../Images/Instruc2.png';
import cc3 from '../../Images/Instruc3.png';
import cc4 from '../../Images/Instruc4.png';
const Instructors = () => {
    const instructorsData = [
        {
            id: 1,
            name: 'Jacob Jones',
            title: 'Gym Trainer',
            image: cc1
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            title: 'Yoga Instructor',
            image: cc2
        },
        {
            id: 3,
            name: 'Michael Smith',
            title: 'Fitness Coach',
            image: cc3
        },
        {
            id: 4,
            name: 'Emily Davis',
            title: 'Pilates Trainer',
            image: cc4
        }
    ];
    return (
        <div className="bg-[#1E1E1E] py-10 relative">
            <div className="text-center text-white">
                <h1 className=" font-Outfit font-semibold text-48px mb-10">Instructors</h1>
            </div>
            <div className="absolute left-0 bottom-1/4 w-96 h-14 bg-gradient-to-t from-orangeL to-orangeR   opacity-30"></div>
            {/* Second blurred line */}
            <div className="absolute left-0 bottom-20 w-1/2 h-14 bg-gradient-to-t from-orangeL to-orangeR  opacity-30"></div>
            <div className="container mx-auto px-5 z-10 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                    {instructorsData.map((instructor) => (
                        <div key={instructor.id} className="bg-transparent text-center z-10 " >
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src={instructor.image}
                                alt={instructor.name}
                            />
                            <div className="mt-4">
                                <h2 className="font-Outfit font-medium text-24px text-white">{instructor.name}</h2>
                                <p className="text-gray-400 font-Outfit font-regular text-16px">{instructor.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;