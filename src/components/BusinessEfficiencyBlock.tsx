"use client";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Briefcase, Clock, Layers} from "lucide-react";

const features = [
    {
        title: "Сокращение времени обработки заказов на 40%",
        description: "Ускорение бизнес-процессов для повышения клиентского сервиса.",
        icon: <Clock className="w-12 h-12 text-white"/>,
    },
    {
        title: "Увеличение производительности сотрудников",
        description: "Больше времени на стратегические задачи вместо рутины.",
        icon: <Briefcase className="w-12 h-12 text-white"/>,
    },
    {
        title: "Автоматизация учёта и управления",
        description: "Контроль клиентов и складов в единой системе.",
        icon: <Layers className="w-12 h-12 text-white"/>,
    },
];

interface BusinessEfficiencyBlockProps {
    contactFormRef: React.RefObject<HTMLDivElement>;
}

const BusinessEfficiencyBlock: React.FC<BusinessEfficiencyBlockProps> = ({contactFormRef}) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        handleResize(); // Устанавливаем начальное значение
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScrollToContactForm = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <section data-aos="fade-up"  className="py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                {isDesktop ? (
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: "easeOut"}}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Сколько <span className="text-anakiwa">экономит</span> ваш бизнес
                            с интеграцией <span className="text-anakiwa">1С и Битрикс24</span>?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Более 200 компаний уже повысили эффективность своих процессов и
                            сократили издержки на <span className="font-semibold">35%</span>.
                            Мы готовы помочь вашему бизнесу достичь тех же результатов.
                        </p>
                    </motion.div>
                ) : (
                    <div className="animate-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Сколько <span className="text-anakiwa">экономит</span> ваш бизнес
                            с интеграцией <span className="text-anakiwa">1С и Битрикс24</span>?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Более 200 компаний уже повысили эффективность своих процессов и
                            сократили издержки на <span className="font-semibold">35%</span>.
                            Мы готовы помочь вашему бизнесу достичь тех же результатов.
                        </p>
                    </div>
                )}

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) =>
                        isDesktop ? (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-b from-white to-blue-50 rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center"
                                initial={{opacity: 0, translateY: 20}}
                                whileInView={{opacity: 1, translateY: 0}}
                                viewport={{once: true}}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: index * 0.3,
                                }}
                            >
                                <div className="p-4 bg-anakiwa rounded-full mb-6 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ) : (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-white to-blue-50 rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center animate-fade-in"
                            >
                                <div className="p-4 bg-anakiwa rounded-full mb-6 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        )
                    )}
                </div>

                <div
                    className={`mt-16 bg-blue-500 text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg ${
                        isDesktop ? "" : "animate-fade-in"
                    }`}
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-2">
                            Хотите узнать, сколько вы сможете сэкономить?
                        </h3>
                        <p className="text-lg">
                            Оставьте заявку, и мы рассчитаем вашу экономию бесплатно.
                        </p>
                    </div>
                    <button
                        className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-all duration-300"
                        onClick={handleScrollToContactForm}
                    >
                        Оставить заявку
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BusinessEfficiencyBlock;
