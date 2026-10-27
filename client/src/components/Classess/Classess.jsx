import React from 'react';
import { Link } from 'react-router-dom';
import { LuTimer, LuUser } from 'react-icons/lu';
import { CLASSES } from '../../data/classes';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';

const Classess = ({ showSeeAll = true }) => {
    return (
        <section id="classes" className="green-grid w-full pb-14 lg:pb-20">
            <div className="container">
                <h2 data-reveal className="section-title title-bar py-10 text-center lg:py-16">Classes</h2>

                <div data-stagger className="mx-auto grid max-w-sm grid-cols-1 gap-x-8 gap-y-12 text-white sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
                    {CLASSES.map((card) => (
                        <article key={card.slug} className="flex h-full flex-col">
                            <Link to={`/${card.slug}`} className="group relative mb-6 block" aria-label={`${card.title} details`}>
                                <div className="photo-accent class-accent" aria-hidden="true" />
                                <img
                                    className="relative z-10 h-auto w-full rounded-md object-cover transition-transform duration-300 group-hover:-translate-y-1"
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                    width="564"
                                    height="400"
                                />
                            </Link>

                            <div className="flex flex-grow flex-col font-Outfit">
                                <div className="flex items-center justify-between text-sm text-gray-300 sm:text-[15px]">
                                    <span className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-orangeL" aria-hidden="true" />
                                        {card.category}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <LuUser className="text-base" aria-hidden="true" />
                                        {card.students} students
                                    </span>
                                </div>
                                <div className="mt-3 flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-medium sm:text-[22px]">{card.title}</h3>
                                    <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold sm:text-base">
                                        <LuTimer className="text-lg" aria-hidden="true" />
                                        <span className="sr-only">Duration:</span>
                                        {card.duration.replace(/(\d+)H/, '$1 H')}
                                    </span>
                                </div>
                                <p className="mt-4 text-base sm:text-lg">Instructor: {card.instructor}</p>
                                <ul className="mt-2 flex-grow space-y-1 text-sm text-gray-200 sm:text-[15px]">
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-gray-300" aria-hidden="true" />
                                        No. of Classes: {card.classes}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-gray-300" aria-hidden="true" />
                                        Difficulty: {card.difficulty}
                                    </li>
                                </ul>
                                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                                    <OneSideCurveButton to={`/${card.slug}`} text="Learn more" p_x="1.25rem" p_y="0.45rem" className="!text-base" />
                                    <OneSideCurveButtonWithOutline text="Start a free trial" className="!px-4 !py-1.5 !text-base !border" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {showSeeAll && (
                    <div data-reveal className="mt-12 text-center">
                        <OneSideCurveButton to="/Classes" text="See all" p_x="clamp(3rem, 7vw, 3.5rem)" p_y="0.6rem" className="!text-base font-semibold shadow-[7px_0_0_#B83200]" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Classess;
