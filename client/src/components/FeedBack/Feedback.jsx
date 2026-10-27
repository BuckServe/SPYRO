import React from 'react';
import { FaStar } from 'react-icons/fa';
import CF1 from '../../Images/CF1.webp';
import classessBG from '../../Images/classessBG.webp';

// Placeholder testimonials: replace with real member reviews before launch
const reviews = [
    {
        review: 'The trainers actually check your form and push you just enough. Three months in and I am lifting more than I ever have.',
        rating: 5,
        name: 'Courtney Henry',
        profile_picture: CF1,
    },
    {
        review: 'Total Body Burnout is tough but so much fun. The group energy keeps me coming back every week.',
        rating: 4,
        name: 'Brooklyn Simmons',
        profile_picture: CF1,
    },
    {
        review: 'Clean equipment, friendly people and classes for every level. I started as a complete beginner and never felt out of place.',
        rating: 4,
        name: 'Jane Cooper',
        profile_picture: CF1,
    },
];

const Feedback = () => {
    return (
        <section className="w-full bg-ink bg-cover bg-center pb-16 lg:pb-20" style={{ backgroundImage: `url(${classessBG})` }}>
            <div className="container">
                <h2 className="section-title py-12 text-center lg:pb-14 lg:pt-20">Client’s Feedback</h2>
                <div className="mx-auto grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
                    {reviews.map((item) => (
                        <figure
                            key={item.name}
                            className="flex h-full flex-col justify-between rounded-lg border-b-8 border-orange-700 bg-gray-800 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
                        >
                            <blockquote className="mb-6 font-Outfit text-base text-white sm:text-lg">“{item.review}”</blockquote>
                            <figcaption>
                                <div className="mb-3 flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <FaStar key={i} className={i < item.rating ? 'text-yellow-400' : 'text-gray-600'} aria-hidden="true" />
                                    ))}
                                </div>
                                <div className="flex items-center">
                                    <img src={item.profile_picture} alt="" className="h-10 w-10 rounded-full sm:h-12 sm:w-12" width="60" height="60" loading="lazy" />
                                    <p className="ml-3 font-Outfit text-sm text-white sm:text-base md:text-lg">{item.name}</p>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
