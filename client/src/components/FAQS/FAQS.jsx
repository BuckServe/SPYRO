import React, { useState } from 'react';
import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';

const faqsData = [
    {
        id: '01',
        question: 'Do I need to be fit already to join a class?',
        answer: 'Not at all. Every class has a difficulty level, and our instructors show easier and harder versions of each move so beginners and athletes can train side by side.',
    },
    {
        id: '02',
        question: 'How does the free trial work?',
        answer: 'Send us a message through the contact form and we will book your free trial session. Come in, try a class and meet the team before you decide on a membership.',
    },
    {
        id: '03',
        question: 'What should I bring to my first session?',
        answer: 'Comfortable workout clothes, training shoes, a water bottle and a small towel. For yoga classes we provide mats, but you are welcome to bring your own.',
    },
    {
        id: '04',
        question: 'Can I get a personal trainer?',
        answer: 'Yes. Our instructors offer one-to-one sessions with a plan built around your goals, whether that is weight loss, strength, mobility or preparing for an event.',
    },
    {
        id: '05',
        question: 'Can I switch between classes?',
        answer: 'Of course. Mix strength, cardio, yoga and bootcamp sessions during the week; variety helps you progress faster and keeps training fun.',
    },
    {
        id: '06',
        question: 'Is there an app to book classes?',
        answer: 'Yes. Download the SPYRO app to see the class timetable, book your spot and track your progress.',
    },
    {
        id: '07',
        question: 'I have another question!',
        answer: 'We are happy to help. Reach out through the Contact Us page and a member of the team will get back to you soon.',
    },
];

const FAQS = () => {
    const [expanded, setExpanded] = useState(null);
    const toggleExpanded = (id) => setExpanded((prev) => (prev === id ? null : id));

    return (
        <section className="relative overflow-hidden bg-ink py-14 text-white lg:py-24">
            <div className="container max-w-5xl">
                <h2 data-reveal className="section-title title-bar mb-8 text-center">Frequently Asked Questions</h2>

                <div data-stagger className="divide-y divide-slate-200/70">
                    {faqsData.map((faq) => {
                        const open = expanded === faq.id;
                        return (
                            <div key={faq.id} className="py-3">
                                <h3>
                                    <button
                                        id={`faqs-title-${faq.id}`}
                                        type="button"
                                        className="flex w-full items-center justify-between py-2 text-left"
                                        onClick={() => toggleExpanded(faq.id)}
                                        aria-expanded={open}
                                        aria-controls={`faqs-text-${faq.id}`}
                                    >
                                        <span className="font-Outfit text-lg font-semibold md:text-xl">{faq.question}</span>
                                        <svg className="ml-4 shrink-0 fill-orangeR md:ml-8" width="16" height="16" aria-hidden="true">
                                            <rect y="7" width="16" height="2" rx="1" className={`origin-center transition duration-200 ease-out ${open ? '!rotate-180' : ''}`} />
                                            <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transition duration-200 ease-out ${open ? '!rotate-180' : ''}`} />
                                        </svg>
                                    </button>
                                </h3>
                                <div
                                    id={`faqs-text-${faq.id}`}
                                    role="region"
                                    aria-labelledby={`faqs-title-${faq.id}`}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        <div className="relative mx-2 mb-2 mt-2 -skew-x-6 p-4">
                                            <div className="absolute inset-0 bg-gradient-to-t from-orangeL to-orangeR opacity-30" aria-hidden="true" />
                                            <p className="relative skew-x-6 font-Outfit text-gray-100">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div data-reveal="zoom" className="mx-3 mt-10 flex -skew-x-6 flex-col bg-orangeL px-6 py-5 sm:-skew-x-12 sm:px-9 lg:mt-12 lg:flex-row lg:items-center">
                    <div className="flex-1 skew-x-6 sm:skew-x-12">
                        <h2 className="font-Outfit text-2xl font-semibold md:text-3xl lg:text-4xl">Are you ready to change?</h2>
                        <p className="mt-1 font-Outfit text-sm md:text-base">
                            Challenge your strength. Stretch your body. Breathe easy. Our team of world-class instructors will empower you.
                        </p>
                    </div>
                    <div className="mt-4 flex skew-x-6 justify-center sm:skew-x-12 lg:mt-0 lg:justify-end">
                        <OneSideCurveButtonWithOutline text="Start the free trial" className="!px-4 !py-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQS;
