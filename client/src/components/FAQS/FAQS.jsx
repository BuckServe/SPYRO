import React, { useState } from 'react';

import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';

const FAQS = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpanded = (id) => {
        setExpanded((prev) => (prev === id ? null : id));
    };

    const faqsData = [
        {
            id: '01',
            question: 'What are the advantages of your service?',
            answer: 'If you go over your organizations or user limit, a member of the team will reach out about bespoke pricing...',
        },
        {
            id: '02',
            question: 'Are there any fees or commissions in addition to the monthly subscription?',
            answer: 'If you go over your organizations or user limit, a member of the team will reach out about bespoke pricing...',
        },
        {
            id: '03',
            question: "You really don't charge per user? Why not?",
            answer: 'If you go over your organizations or user limit, a member of the team will reach out about bespoke pricing...',
        },
        {
            id: '04',
            question: 'What happens when I go over my monthly active limit?',
            answer: 'If you go over your organizations or user limit, a member of the team will reach out about bespoke pricing...',
        },
        {
            id: '05',
            question: 'Can your service help me understand how to work with my product?',
            answer: 'If you go over your organizations or user limit, a member of the team will reach out about bespoke pricing...',
        },
        {
            id: '06',
            question: 'Which third-party application do you integrate with?',
            answer: 'If you go over your organizations or user limit, a member of the team will reach out about bespoke pricing...',
        },
        {
            id: '07',
            question: 'I have another question!',
            answer: 'If you go over your organizations or user limit, a member of the team will reach out about bespoke pricing...',
        },
    ];

    return (
        <div className="relative font-inter antialiased bg-[#1E1E1E] text-white">
            <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                <div className="w-full px-10 sm:px-6 md:mx-8 lg:px-36 mx-auto md:py-12 lg:py-24 ">
                    <h1 className=" font-Outfit font-semibold text-48px mb-4 text-center">Frequently Asked Questions</h1>

                    <div className="divide-y divide-slate-200 ">
                        {faqsData.map((faq) => (
                            <div key={faq.id} className="py-4">
                                <h2>
                                    <button
                                        id={`faqs-title-${faq.id}`}
                                        type="button"
                                        className="flex items-center justify-between w-full text-left font-semibold py-2"
                                        onClick={() => toggleExpanded(faq.id)}
                                        aria-expanded={expanded === faq.id}
                                        aria-controls={`faqs-text-${faq.id}`}
                                    >
                                        <span className="font-Outfit font-semibold text-lg md:text-xl">{faq.question}</span>
                                        <svg
                                            className="fill-indigo-500 shrink-0 ml-4 md:ml-8"
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                y="7"
                                                width="16"
                                                height="2"
                                                rx="1"
                                                className={`transform origin-center transition duration-200 ease-out ${expanded === faq.id ? '!rotate-180' : ''}`}
                                            />
                                            <rect
                                                y="7"
                                                width="16"
                                                height="2"
                                                rx="1"
                                                className={`transform origin-center rotate-90 transition duration-200 ease-out ${expanded === faq.id ? '!rotate-180' : ''}`}
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id={`faqs-text-${faq.id}`}
                                    role="region"
                                    aria-labelledby={`faqs-title-${faq.id}`}
                                    className={`relative transition-all duration-300 ease-in-out overflow-hidden ${expanded === faq.id ? 'max-h-[200px] border-t border-slate-200 mt-2' : 'max-h-0'
                                        }`}
                                >
                                    <div className="p-4 relative transform -skew-x-12">
                                        <div
                                            className="absolute inset-2 bg-gradient-to-t from-orangeL to-orangeR opacity-30"
                                            style={{ zIndex: -1 }}
                                        ></div>
                                        <p className="text-white relative">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row bg-orangeL transform -skew-x-12 py-3 px-10 sm:px-6 lg:px-9 align-middle mt-8 lg:mt-12">
                        <div className="flex-1">
                            <h1 className="font-Outfit font-semibold text-2xl md:text-3xl lg:text-4xl">Are you ready to change?</h1>
                            <p className="font-Outfit font-regular text-sm md:text-base">Challenge your strength. Stretch your body. Breathe easy. Our team of world-class instructors will empower</p>
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
                            <OneSideCurveButtonWithOutline text="Start the free trial" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FAQS;
