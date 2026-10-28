import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import avatar1 from '../../Images/avatar-1.webp';
import avatar2 from '../../Images/avatar-2.webp';
import avatar3 from '../../Images/avatar-3.webp';
import avatar4 from '../../Images/avatar-4.webp';

// Sample testimonials: swap in real member reviews before launch
const reviews = [
    {
        name: 'Sara R.',
        avatar: avatar1,
        rating: 5,
        text: 'I joined SPYRO to get back in shape after a long break and the coaches made it easy from day one. Every class is different, the trainers check your form, and the app reminds me of my sessions. Three months in and I feel stronger than ever!',
    },
    {
        name: 'Maya L.',
        avatar: avatar2,
        rating: 5,
        text: 'The zumba and yoga classes are my favourite part of the week. Booking a spot in the app takes seconds, the studio is always clean, and the community is so welcoming. I never thought I would look forward to working out this much.',
    },
    {
        name: 'Daniel K.',
        avatar: avatar3,
        rating: 4,
        text: 'Total Body Burnout pushes me harder than any class I have tried. I like that I can track my progress and see my lifts go up week after week. It gets busy in the evenings, so book early, but the trainers still give everyone attention.',
    },
    {
        name: 'Omar H.',
        avatar: avatar4,
        rating: 5,
        text: 'Great equipment, friendly trainers and a plan that actually fits my schedule. The Bootcamp Challenge is tough but the energy in the room keeps you going. Highly recommend SPYRO to anyone who wants real results.',
    },
];

const AUTOPLAY_MS = 6000;

const Feedback = () => {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchX = useRef(null);
    const count = reviews.length;

    const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);

    // Slide on automatically, unless the visitor is hovering, has focus inside, or prefers less motion
    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (paused || reduce) return undefined;
        const t = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
        return () => window.clearTimeout(t);
    }, [index, paused, go]);

    const onKeyDown = (e) => {
        if (e.key === 'ArrowRight') go(index + 1);
        if (e.key === 'ArrowLeft') go(index - 1);
    };

    return (
        <section className="green-grid w-full px-4 pb-16 lg:pb-24">
            <h2 data-reveal className="section-title title-bar py-12 text-center lg:pb-14 lg:pt-20">Testimonials</h2>

            <div
                data-reveal="zoom"
                className="relative mx-auto max-w-[640px] overflow-hidden bg-[#0b1b1a]/90 shadow-2xl shadow-black/40"
                role="region"
                aria-roledescription="carousel"
                aria-label="Member testimonials"
                tabIndex={0}
                onKeyDown={onKeyDown}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
                onTouchEnd={(e) => {
                    if (touchX.current == null) return;
                    const dx = e.changedTouches[0].clientX - touchX.current;
                    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
                    touchX.current = null;
                }}
            >
                <div
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {reviews.map((r, i) => (
                        <figure
                            key={r.name}
                            className="w-full shrink-0 px-6 pb-10 pt-8 font-Outfit sm:px-8"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${i + 1} of ${count}`}
                            aria-hidden={i !== index}
                        >
                            <blockquote className="text-[15px] leading-relaxed text-gray-100 sm:text-base">{r.text}</blockquote>
                            <div className="mt-5 flex gap-1.5" aria-label={`${r.rating} out of 5 stars`}>
                                {Array.from({ length: 5 }, (_, s) => (
                                    <FaStar key={s} className={`text-xl sm:text-2xl ${s < r.rating ? 'text-orangeL' : 'text-white/20'}`} aria-hidden="true" />
                                ))}
                            </div>
                            <figcaption className="mt-6 flex items-center gap-4">
                                <img src={r.avatar} alt="" width="96" height="96" loading="lazy" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" />
                                <span className="text-base font-medium text-white sm:text-lg">{r.name}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                {/* Dots */}
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                    {reviews.map((r, i) => (
                        <button
                            key={r.name}
                            type="button"
                            onClick={() => go(i)}
                            aria-label={`Show review ${i + 1}`}
                            aria-current={i === index}
                            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-orangeR' : 'w-2 bg-white/25 hover:bg-white/50'}`}
                        />
                    ))}
                </div>

                {/* Orange bar along the bottom; it fills while the current review is showing */}
                <div className="h-2 bg-orangeL/35" aria-hidden="true">
                    <div
                        key={`${index}-${paused}`}
                        className={`h-full bg-orangeL ${paused ? 'w-full' : 'testimonial-timer'}`}
                        style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Feedback;
