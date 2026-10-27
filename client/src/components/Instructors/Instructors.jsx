import React from 'react';
import cc1 from '../../Images/Instruc1.webp';
import cc2 from '../../Images/Instruc2.webp';
import cc3 from '../../Images/Instruc3.webp';
import cc4 from '../../Images/Instruc4.webp';

const instructorsData = [
    { id: 1, name: 'Jacob Jones', title: 'Gym Trainer', image: cc1 },
    { id: 2, name: 'Sarah Johnson', title: 'Yoga Instructor', image: cc2 },
    { id: 3, name: 'Michael Smith', title: 'Fitness Coach', image: cc3 },
    { id: 4, name: 'Emily Davis', title: 'Pilates Trainer', image: cc4 },
];

const Instructors = () => {
    return (
        <section className="relative overflow-hidden bg-ink py-12">
            <h2 data-reveal className="section-title title-bar mb-10 text-center">Instructors</h2>
            <div data-scrollbar className="load-bar absolute bottom-1/4 left-0 h-14 w-2/3 max-w-96 bg-gradient-to-t from-orangeL to-orangeR opacity-40" aria-hidden="true" />
            <div data-scrollbar className="load-bar absolute bottom-20 left-0 h-14 w-1/2 bg-gradient-to-t from-orangeL to-orangeR opacity-40" aria-hidden="true" />
            <div className="container relative">
                <div data-stagger className="mx-auto grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {instructorsData.map((instructor) => (
                        <figure key={instructor.id} className="group text-center">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    className="aspect-[285/400] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={instructor.image}
                                    alt={instructor.name}
                                    width="285"
                                    height="400"
                                    loading="lazy"
                                />
                            </div>
                            <figcaption className="mt-4">
                                <h3 className="font-Outfit text-24px font-medium text-white">{instructor.name}</h3>
                                <p className="font-Outfit text-16px text-gray-400">{instructor.title}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructors;
