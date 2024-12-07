"use client";

import {Database, Layers, MousePointerClick, WandSparkles} from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <section data-aos="fade-up" className="pt-15 md:pt-20 py-16 px-4">

            <div className="container mx-auto text-center">
                {}
                <p className="text-lg text-grey-light mb-3">
                    Интеграция 1С и Битрикс24 под ключ
                </p>

                {}
                <h1 className="text-5xl md:text-7xl font-bold text-black leading-snug md:leading-tight font-nunito">
                    Обмен данными между

                    <br/>
                    <span
                        className="bg-azure-light text-white text-4xl md:text-6xl rounded-[20px] md:rounded-[30px] shadow-md flex items-center justify-center font-bold mx-auto mt-4 swing-animation"
                        style={{
                            width: "90%",
                            maxWidth: "600px",
                            height: "80px",
                            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
                        }}
                    >
  CMS, CRM и 1С
</span>
                </h1>

                {}
                <p className="text-3xl text-black font-semibold mt-6">
                    Стандартизированные и сложные проекты
                </p>

                <div className="mt-6 flex justify-center">
                    <button
                        className="group relative border-2 border-gray-400 text-gray-700 font-medium text-base text-center px-6 py-3 rounded-full shadow-md bg-gray-50 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer max-w-md"
                        style={{
                            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        {}
                        <div
                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex items-center justify-center px-3 py-1 rounded-full bg-gray-400 text-white text-sm font-medium shadow-sm border border-gray-400 duration-300 group-hover:bg-gray-700 group-hover:text-gray-200"
                        >
                            <MousePointerClick className="w-4 h-4 mr-1"/> {}
                            Узнать больше
                        </div>
                        <h5 className='m-1'>Автоматизируйте бизнес-процессы уже сейчас</h5>

                    </button>
                </div>

                {}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {}
                    <div className="bg-kobi text-white p-6 rounded-[30px] shadow-md">
                        <div className="flex items-center mb-4">
                            <Database className="w-8 h-8 mr-3"/> {}
                            <h3 className="text-lg font-bold">Единая система данных</h3>
                        </div>
                        <p className="text-sm">
                            Обеспечиваем обмен данными между 1С, Битрикс24 и сайтом на любой платформе
                            (WordPress, 1С-Битрикс, ModX и др.). Ускоряем процессы и устраняем дублирование данных.
                        </p>
                    </div>

                    {}
                    <div className="bg-anakiwa text-white p-6 rounded-[30px] shadow-md">
                        <div className="flex items-center mb-4">
                            <Layers className="w-8 h-8 mr-3"/> {}
                            <h3 className="text-lg font-bold">Интеграция для точных задач</h3>
                        </div>
                        <p className="text-sm">
                            Настраиваем двойную интеграцию: CMS + 1С, CMS + Битрикс24 или Битрикс24 + 1С.
                            Оптимизируем процессы для каждой задачи, учитывая специфику вашего бизнеса.
                        </p>
                    </div>

                    {}
                    <div className="bg-yellow-sea text-white p-6 rounded-[30px] shadow-md">
                        <div className="flex items-center mb-4">
                            <WandSparkles className="w-8 h-8 mr-3"/> {}
                            <h3 className="text-lg font-bold">Сложные задачи? Мы справимся!</h3>
                        </div>
                        <p className="text-sm">
                            Выполняем сложные интеграции: кастомные алгоритмы, уникальная синхронизация, поддержка
                            сервисов.
                            Разрабатываем решения под уникальные запросы.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;