import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classessBG from '../../Images/classessBG.webp';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';

const inputClass =
    'w-full rounded border border-gray-300 bg-white p-2.5 font-normal text-gray-900 placeholder-gray-400 focus:border-orangeR focus:outline-none focus:ring-2 focus:ring-orangeR/40';

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async () => {
        // No backend yet: show the confirmation. Hook an API / email service in here.
        setSubmitted(true);
        reset();
    };

    return (
        <section
            className="flex min-h-screen items-center bg-ink bg-cover bg-center px-4 pb-16 pt-28 text-white sm:px-10 md:bg-fixed"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 1), rgba(30, 30, 30, 0) 30%),
                          linear-gradient(to bottom, rgba(30, 30, 30, 0) 60%, rgba(30, 30, 30, 1)),
                          url(${classessBG})`,
            }}
        >
            <div className="mx-auto w-full max-w-lg rounded-lg bg-ink/95 p-5 shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:p-8">
                <h1 className="mb-6 text-center font-Outfit text-2xl font-semibold sm:text-3xl">Contact Us</h1>
                {submitted ? (
                    <div className="space-y-5 text-center" role="status">
                        <p className="text-green-400">Thank you for contacting us! We will get back to you soon.</p>
                        <OneSideCurveButton text="Send another message" onClick={() => setSubmitted(false)} />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-Outfit" noValidate>
                        <div>
                            <label htmlFor="name" className="mb-1 block font-semibold">Name</label>
                            <input
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                                type="text"
                                autoComplete="name"
                                className={inputClass}
                                aria-invalid={!!errors.name}
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-1 block font-semibold">Email</label>
                            <input
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
                                })}
                                type="email"
                                autoComplete="email"
                                className={inputClass}
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="mb-1 block font-semibold">Message</label>
                            <textarea
                                id="message"
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: { value: 10, message: 'Message is too short' },
                                })}
                                className={inputClass}
                                rows="4"
                                aria-invalid={!!errors.message}
                            />
                            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
                        </div>

                        <div className="pt-2 text-right">
                            <OneSideCurveButton type="submit" text="Submit" p_x="2.5rem" disabled={isSubmitting} />
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactUs;
