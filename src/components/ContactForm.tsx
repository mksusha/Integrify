"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Форма успешно отправлена!");
    };

    return (
        <section data-aos="fade-up" className="py-20 relative">
            {}
            <motion.div
                className="absolute -top-16 left-1/4 w-48 h-48 bg-blue-400 rounded-full opacity-20"
                animate={{y: [0, 15, 0]}}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute -bottom-20 right-1/3 w-64 h-64 bg-purple-400 rounded-full opacity-20"
                animate={{y: [0, -15, 0]}}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
                {}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Оставьте заявку на расчет стоимости
                    </h2>
                    <p className="text-gray-700 text-lg mb-8">
                        Просто заполните форму ниже, и мы свяжемся с вами, чтобы обсудить детали.
                    </p>
                </motion.div>

                {}
                <motion.form
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.3}}
                    className="bg-white rounded-2xl shadow-2xl p-10 grid gap-6 border border-gray-200"
                    onSubmit={handleSubmit}
                >
                    {}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Ваш email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Ваш номер телефона"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <textarea
                        name="message"
                        placeholder="Ваше сообщение или запрос"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
                    />

                    {}
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                    >
                        Отправить заявку
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactForm;
