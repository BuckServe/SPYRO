import React from 'react';
import { Link } from 'react-router-dom';
import { CLASSES } from '../../data/classes';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';
import classessBG from '../../Images/classessBG.webp';

const Classess = ({ showSeeAll = true }) => {
    return (
        <section
            id="classes"
            className="w-full bg-ink bg-cover bg-center pb-14 lg:pb-20"
            style={{ backgroundImage: `url(${classessBG})` }}
        >
            <div className="container">
                <h2 data-reveal className="section-title title-bar py-10 text-center lg:py-16">Classes</h2>

                <div data-stagger className="mx-auto grid max-w-sm grid-cols-1 gap-x-8 gap-y-12 text-white sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
                    {CLASSES.map((card) => (
                        <article key={card.slug} className="flex h-full flex-col">
                            <Link to={`/${card.slug}`} className="group relative mb-6 block" aria-label={`${card.title} details`}>
                                <div className="photo-accent" aria-hidden="true" />
                                <img
                                    className="relative z-10 h-auto w-full transition-transform duration-300 group-hover:-translate-y-1"
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                    width="364"
                                    height="258"
                                />
                            </Link>

                            <div className="flex flex-grow flex-col font-Outfit">
                                <div className="flex justify-between text-sm font-medium sm:text-16px">
                                    <span>{card.category}</span>
                                    <span>{card.students} Students</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-semibold sm:text-24px">{card.title}</h3>
                                    <span className="text-sm font-medium sm:text-16px">{card.duration}</span>
                                </div>
                                <div className="flex-grow pt-2 text-sm font-medium sm:text-16px">
                                    <p>Instructor: {card.instructor}</p>
                                    <ul className="mt-1 list-disc pl-5">
                                        <li>
                                            <div className="flex justify-between"><span>No. of Classes:</span><span>{card.classes}</span></div>
                                        </li>
                                        <li>
                                            <div className="flex justify-between"><span>Difficulty:</span><span>{card.difficulty}</span></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                                    <OneSideCurveButton to={`/${card.slug}`} text="Learn more" p_x="0.75rem" p_y="0.4rem" />
                                    <OneSideCurveButtonWithOutline text="Start a free trial" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {showSeeAll && (
                    <div data-reveal className="mt-12 text-center">
                        <OneSideCurveButton to="/Classes" text="See all" p_x="clamp(3rem, 12vw, 8rem)" p_y="0.5rem" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Classess;
