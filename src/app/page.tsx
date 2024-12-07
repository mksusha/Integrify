"use client";

import React, {useEffect, useRef} from "react";
import HeroSection from "@/components/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import ParallaxBackground from "@/components/ParallaxBackground";
import IntegrationCarousel from "@/components/IntegrationCarousel";
import WhyChooseUsPage from "@/components/WhyChooseUsPage";
import BusinessEfficiencyBlock from "@/components/BusinessEfficiencyBlock";
import ContactForm from "@/components/ContactForm";
import CaseSection from "@/components/CaseSection";

export default function Home() {
    const contactFormRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        AOS.init({
            duration: 1000, easing: "ease-out", offset: 50, once: true,
        });

        AOS.refresh();
    }, []);

    return (
        <>
            <div className="relative z-0">
                <ParallaxBackground/>
            </div>
            {}
            <main className="mt-16 relative z-10 max-w-screen-2xl m-auto">
                <div data-aos="fade-up">
                    <HeroSection/>
                </div>
                <WhyChooseUsPage/>
                <IntegrationCarousel/>
                {}
                <BusinessEfficiencyBlock contactFormRef={contactFormRef}/>
                {}
                <div ref={contactFormRef}>
                    <ContactForm/>
                </div>
                <CaseSection/>
            </main>
        </>
    );
}
