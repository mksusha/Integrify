import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "integrify",
    description: "Бесшовная интеграция 1С, Битрикс24 и других систем для автоматизации бизнес-процессов, упрощения обмена данными и повышения эффективности. Откройте новые возможности для управления финансами, планирования задач и контроля процессов."
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>

        {children}
        </body>
        </html>
    );
}