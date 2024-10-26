"use client";
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.message) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex justify-center items-center w-full min-h-screen  p-4">
            <div className="bg-white shadow-lg rounded-3xl p-8 max-w-md w-full relative">
                {submitted && <p className="text-green-500 mb-4">Your message has been sent successfully!</p>}

                <div className="absolute top-[-50px] left-4 text-6xl text-pink-500">✈️</div>

                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contact Us</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-orange-400"
                            placeholder="Full name"
                        />
                        {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-orange-400"
                            placeholder="Email address"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:border-orange-400"
                            placeholder="Message"
                            rows="4"
                        />
                        {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full focus:outline-none"
                    >
                        Submit →
                    </button>
                </form>

                <div className="flex justify-center space-x-4 mt-6">
                    <a href="#" className="text-blue-600 text-2xl">🌐</a>
                    <a href="#" className="text-blue-400 text-2xl">🐦</a>
                    <a href="#" className="text-pink-600 text-2xl">📸</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
