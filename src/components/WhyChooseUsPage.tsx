"use client";

import {motion} from "framer-motion";
import {Monitor, ShieldCheck, Star, Users} from "lucide-react";
import {useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const reasons = [
    {
        title: "Квалифицированные сотрудники",
        description:
            "Наши специалисты обладают опытом работы в различных сферах бизнеса и готовы предложить оптимальные решения.",
        icon: <Users className="w-10 h-10 text-yellow-sea"/>,
    },
    {
        title: "Справимся с любой задачей",
        description:
            "Мы берём на себя ответственность за выполнение сложных проектов. Ваша задача станет нашей заботой.",
        icon: <ShieldCheck className="w-10 h-10 text-yellow-sea"/>,
    },
    {
        title: "Гарантируем качество",
        description:
            "Наша работа построена на высоких стандартах, чтобы ваш бизнес получал только лучшие решения.",
        icon: <Star className="w-10 h-10 text-yellow-sea"/>,
    },
    {
        title: "Современные технологии",
        description:
            "Мы используем передовые технологии для повышения эффективности вашего бизнеса.",
        icon: <Monitor className="w-10 h-10 text-yellow-sea"/>,
    },
];

const ReasonsSectionContent: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        handleResize(); // Проверка при монтировании
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out",
        });
    }, []);

    return (
        <section data-aos="fade-up" className="py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-16">
                    Почему <span className="text-yellow-sea">выбирают нас?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) =>
                        isDesktop ? (
                            <motion.div
                                key={index}
                                className="reason-card flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 shadow-sm"
                                initial={{opacity: 0, scale: 0.8, rotate: -5}}
                                whileInView={{opacity: 1, scale: 1, rotate: 0}}
                                viewport={{once: true, amount: 0.5}}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: index * 0.15,
                                }}
                            >
                                <div className="mb-4">{reason.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-700 text-center text-lg">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ) : (
                            <div
                                key={index}
                                className="reason-card flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 shadow-sm"
                                data-aos="fade-left"
                                data-aos-delay={`${index * 150}`}
                            >
                                <div className="mb-4">{reason.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-700 text-center text-lg">
                                    {reason.description}
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default ReasonsSectionContent;
