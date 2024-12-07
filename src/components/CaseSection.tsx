"use client";

import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cases = [
    {
        title: "Как автоматизация обмена данными сократила затраты на 40%",
        description:
            "С помощью интеграции 1С и Битрикс24 мы автоматизировали управление складом, что сократило затраты компании на 40%.",
        bg: "bg-pink-100",
    },
    {
        title: "Интеграция CMS + 1С + Битрикс24 увеличила продажи на 30%",
        description:
            "Автоматизация работы с клиентами позволила одному из наших клиентов увеличить свои продажи на 30%.",
        bg: "bg-pink-200",
    },
    {
        title: "Скорость обработки заказов увеличена в 2 раза",
        description:
            "Сложная интеграция Битрикс24 и 1С повысила скорость обработки заказов в два раза, что сократило время доставки клиентам.",
        bg: "bg-pink-300",
    },
];

const CaseSection: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Определяем, десктопное ли устройство
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        handleResize(); // Устанавливаем начальное значение
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
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                {/* Заголовок */}
                {isDesktop ? (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Реальные кейсы, которые <span className="text-kobi">улучшают бизнес</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Эти кейсы доказывают, что интеграция 1С и Битрикс24 — это не просто синхронизация,
                            а инструмент для роста бизнеса и повышения эффективности.
                        </p>
                    </motion.div>
                ) : (
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Реальные кейсы, которые <span className="text-kobi">улучшают бизнес</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Эти кейсы доказывают, что интеграция 1С и Битрикс24 — это не просто синхронизация,
                            а инструмент для роста бизнеса и повышения эффективности.
                        </p>
                    </div>
                )}

                {/* Кейсы */}
                <div className="mt-12 space-y-8">
                    {cases.map((caseItem, index) =>
                        isDesktop ? (
                            <motion.div
                                key={index}
                                className={`${caseItem.bg} rounded-2xl p-8 shadow-lg flex flex-col justify-between`}
                                initial={{opacity: 0, x: -50}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: index * 0.2,
                                }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {caseItem.title}
                                </h3>
                                <p className="text-gray-700 text-lg">{caseItem.description}</p>
                            </motion.div>
                        ) : (
                            <div
                                key={index}
                                className={`${caseItem.bg} rounded-2xl p-8 shadow-lg flex flex-col justify-between`}
                                data-aos="fade-left"
                                data-aos-delay={`${index * 200}`}
                            >
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {caseItem.title}
                                </h3>
                                <p className="text-gray-700 text-lg">{caseItem.description}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default CaseSection;
