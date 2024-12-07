"use client";

import {useState} from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            data-aos="fade-down"
            className="fixed top-0 left-0 w-full h-16 md:h-20 bg-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {}
                <div className="text-xl font-bold text-[var(--color-dodger-blue)]">
                    Integrify
                </div>

                {}
                <nav className={`md:flex space-x-8 ${menuOpen ? "block" : "hidden"} md:block`}>
                    <a href="#services"
                       className="text-[var(--color-cod-gray)] hover:text-[var(--color-dodger-blue)]">Услуги</a>
                    <a href="#cases"
                       className="text-[var(--color-cod-gray)] hover:text-[var(--color-dodger-blue)]">Кейсы</a>
                    <a href="#about" className="text-[var(--color-cod-gray)] hover:text-[var(--color-dodger-blue)]">О
                        нас</a>
                    <a href="#contacts"
                       className="text-[var(--color-cod-gray)] hover:text-[var(--color-dodger-blue)]">Контакты</a>
                </nav>

                {}
                <a
                    href="#form"
                    className="hidden md:block bg-[var(--color-dodger-blue)] text-[var(--color-white)] px-6 py-2 rounded-3xl hover:bg-[var(--color-dodger-blue)] hover:opacity-90 transition"
                >
                    Оставить заявку
                </a>

                {}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-[var(--color-dodger-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-dodger-blue)]"
                    >
                        <svg xmlns="http:                             className=" w-6 h-6">
                            <path strokeLinecap=" round" strokeLinejoin=" round" strokeWidth="
                        2"
                        d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>
</header>
)

}