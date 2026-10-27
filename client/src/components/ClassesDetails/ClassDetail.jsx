import React from 'react';
import { CLASSES, getClass } from '../../data/classes';
import classessBG from '../../Images/classessBG.webp';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';

const ClassDetail = ({ slug }) => {
    const c = getClass(slug) || CLASSES[0];

    const facts = [
        ['Category', c.category],
        ['Instructor', c.instructor],
        ['Duration', c.durationLong],
        ['Number of Classes', c.classes],
        ['Difficulty Level', c.difficulty],
        ['Students', c.students],
    ];

    return (
        <section
            className="bg-ink bg-cover bg-center px-4 py-14 text-white sm:px-8 md:bg-fixed lg:py-20"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 1), rgba(30, 30, 30, 0) 30%),
                                  linear-gradient(to bottom, rgba(30, 30, 30, 0) 60%, rgba(30, 30, 30, 1)),
                                  url(${classessBG})`,
            }}
        >
            <div className="container grid items-center gap-10 md:grid-cols-2 lg:gap-16">
                <div className="font-Outfit">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-orangeR">{c.category}</p>
                    <h1 className="mt-2 text-3xl font-semibold sm:text-4xl lg:text-48px">{c.title}</h1>

                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-base sm:text-18px">
                        {facts.map(([k, v]) => (
                            <div key={k}>
                                <dt className="text-sm text-gray-400">{k}</dt>
                                <dd className="font-medium">{v}</dd>
                            </div>
                        ))}
                    </dl>

                    <p className="mt-6 text-base leading-relaxed text-gray-200 sm:text-18px">{c.description}</p>

                    <div className="mt-8 flex flex-wrap items-center gap-5">
                        <OneSideCurveButton to="/contact_us" text="Enroll Now" p_x="2rem" />
                        <OneSideCurveButtonWithOutline text="Start a free trial" className="!px-4 !py-2" />
                    </div>
                </div>

                <div className="mx-auto w-full max-w-md md:max-w-none">
                    <div className="relative">
                        <div className="photo-accent" aria-hidden="true" />
                        <img className="relative z-10 h-auto w-full" src={c.image} alt={c.title} width="364" height="258" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassDetail;
