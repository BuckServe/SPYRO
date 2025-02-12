import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classessBG from '../../Images/classessBG.png';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data); // Here you can send data to the backend or display a success message.
        setSubmitted(true); // Set submitted to true to show the confirmation message
    };

    return (
        <div
            className="bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen p-4 sm:p-10 md:p-20  text-white bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 1), rgba(30, 30, 30, 0) 30%), 
                          linear-gradient(to bottom, rgba(30, 30, 30, 0) 60%, rgba(30, 30, 30, 1)), 
                          url(${classessBG})`,
            }}
        >
            <div className="max-w-lg mx-auto p-4 sm:p-6 bg-[#1E1E1E] shadow-lg rounded-lg my-12 sm:my-20 md:my-24 pb-4 ">
                <h2 className="font-Outfit font-semibold text-2xl sm:text-3xl text-center mb-4">Contact Us</h2>
                {submitted ? (
                    <div className="text-center text-green-500">
                        <p>Thank you for contacting us! We will get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="font-Outfit font-semibold text-base text-white">
                            <label className="block">Name</label>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="font-Outfit font-semibold text-base text-white">
                            <label className="block">Email</label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="font-Outfit font-semibold text-base text-white">
                            <label className="block">Message</label>
                            <textarea
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: { value: 10, message: 'Message is too short' },
                                })}
                                className="w-full p-2 border border-gray-300 rounded text-black"
                                rows="4"
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-sm">{errors.message.message}</p>
                            )}
                        </div>
                        <div className="text-right">
                            <button type="submit">
                                <OneSideCurveButton text="Submit" p_x="8vw" p_y="10px" className="w-full sm:w-auto px-6 py-2" />
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactUs;