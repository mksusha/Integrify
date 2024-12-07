import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
    BarChart2,
    ChevronLeft,
    ChevronRight,
    Globe,
    Layers,
    Package,
    Server,
    ShoppingCart,
    Users,
    Zap
} from "lucide-react";

const slides = [
    {
        title1: "Решение для интеграции",
        title2: "CMS + 1C",
        description: `
        Мы обеспечиваем синхронизацию данных между CMS и 1C. Это упрощает процессы и исключает ошибки ручного ввода, 
        повышая точность и эффективность. Решения подходят для различных платформ, включая WordPress, 1С-Битрикс и другие.
        `,
        bgColor: "bg-anakiwa",
        miniCardClass: "mini-card-anakiwa",
        features: [
            {
                title: "Синхронизация продаж",
                description: "Автоматизируем учет продаж и исключаем ручной ввод данных.",
                icon: <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-anakiwa"/>,
            },
            {
                title: "Учет остатков",
                description: "Синхронизируем данные о товарах для актуального учета.",
                icon: <Layers className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-anakiwa"/>,
            },
            {
                title: "Автоматизация",
                description: "Снижаем вероятность ошибок с помощью автоматических процессов.",
                icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-anakiwa"/>,
            },
        ],
    },
    {
        title1: "Решение для интеграции",
        title2: "CMS + Битрикс24",
        description: `
        Интеграция CMS и Битрикс24 позволяет автоматизировать управление клиентами, заказами и аналитикой. 
        Это решение помогает оптимизировать бизнес-процессы и повысить удовлетворенность клиентов.
        `,
        bgColor: "bg-yellow-sea",
        miniCardClass: "mini-card-yellow-sea",
        features: [
            {
                title: "Управление заказами",
                description: "Упрощаем обработку клиентских заказов.",
                icon: <Package className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-sea"/>,
            },
            {
                title: "Сегментация клиентов",
                description: "Помогаем лучше понять клиентов через аналитику.",
                icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-sea"/>,
            },
            {
                title: "CRM аналитика",
                description: "Собираем и анализируем данные о продажах.",
                icon: <BarChart2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-sea"/>,
            },
        ],
    },
    {
        title1: "Решение для интеграции",
        title2: "Битрикс24 + 1C",
        description: `
        Интеграция Битрикс24 и 1C позволяет объединить учет финансов, управление задачами и контроль процессов.
        Мы обеспечиваем прозрачность и автоматизацию на всех уровнях вашего бизнеса.
        `,
        bgColor: "bg-kobi",
        miniCardClass: "mini-card-kobi",
        features: [
            {
                title: "Учет финансов",
                description: "Автоматизируем учет доходов и расходов компании.",
                icon: <Server className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-kobi"/>,
            },
            {
                title: "Планирование задач",
                description: "Оптимизируем управление проектами и задачами.",
                icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-kobi"/>,
            },
            {
                title: "Контроль процессов",
                description: "Обеспечиваем прозрачность и контроль на всех этапах.",
                icon: <BarChart2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-kobi"/>,
            },
        ],
    },
    {
        title1: "Решение для интеграции",
        title2: "CMS + CRM + 1C",
        description: `
        Мы настраиваем тройной обмен данными между CMS, CRM и 1C, обеспечивая полную синхронизацию и контроль
        всех процессов компании. Это решение помогает повысить эффективность бизнеса.
        `,
        bgColor: "bg-blue-500",
        miniCardClass: "mini-card-blue-500",
        features: [
            {
                title: "Глобальная интеграция",
                description: "Связываем все процессы в единую систему.",
                icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500"/>,
            },
            {
                title: "Упрощение логистики",
                description: "Оптимизируем складской учет и логистику.",
                icon: <Package className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500"/>,
            },
            {
                title: "Эффективность бизнеса",
                description: "Повышаем продуктивность всех бизнес-процессов.",
                icon: <BarChart2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500"/>,
            },
        ],
    },
];
const FullscreenIntegrationCarousel: React.FC = () => {
    return (
        <section data-aos="fade-up" className="py-16 md:py-20 relative w-11/12 md:w-4/5 mx-auto">
            {}
            <button
                className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                id="prevSlide"
            >
                <ChevronLeft size={24}/>
            </button>
            <button
                className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                id="nextSlide"
            >
                <ChevronRight size={24}/>
            </button>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: "#prevSlide",
                    nextEl: "#nextSlide",
                }}
                spaceBetween={30} slidesPerView={1}
                loop={true}
                speed={800} className="max-w-full mx-auto"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`relative flex flex-col items-center justify-center text-white shadow-lg ${slide.bgColor} p-5 md:p-12`}
                            style={{
                                borderRadius: "30px",
                            }}
                        >
                            {}
                            <h3 className="text-lg sm:text-2xl md:text-5xl font-bold mb-4 text-center">
                                {slide.title1}
                            </h3>
                            <h4 className="text-sm sm:text-lg md:text-4xl font-semibold text-center opacity-70 mb-4">
                                {slide.title2}
                            </h4>

                            {}
                            <p className="text-xs sm:text-sm  md:text-lg text-center mb-4 sm:mb-14 w-11/12 sm:w-4/5">
                                {slide.description}
                            </p>

                            {}
                            <div
                                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 ${slide.miniCardClass}`}
                            >
                                {slide.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-white shadow-md ${
                                            idx === 1 ? "md:relative md:-top-6" : ""}`}
                                        style={{
                                            minHeight: "160px", height: "auto",
                                            width: "100%", maxWidth: "280px",
                                        }}
                                    >
                                        <div className="mb-2 md:mb-4">{feature.icon}</div>
                                        <h4 className="text-sm sm:text-base md:text-xl font-semibold mb-1 sm:mb-2 text-center text-gray-800">
                                            {feature.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm md:text-lg text-center text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    );
};

export default FullscreenIntegrationCarousel;
