import {useEffect} from "react";
import Rellax from "rellax";

export default function ParallaxBackground() {
    useEffect(() => {
        let rellax: Rellax | null = null;

        if (window.innerWidth > 768) {
            rellax = new Rellax(".rellax", {
                speed: -2,
                center: false,
                round: true,
                vertical: true,
                horizontal: false,
            });
        }

        return () => {
            if (rellax) {
                rellax.destroy();
                rellax = null;
            }
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{overflow: "hidden"}}
        >
            {}
            <div
                className="rellax bg-blue-500 w-48 h-48 md:w-64 md:h-64 rounded-full absolute top-10 left-10 opacity-50"
                style={{filter: "blur(60px)"}}
            ></div>
            {}
            <div
                className="rellax bg-pink-500 w-32 h-32 md:w-48 md:h-48 rounded-full absolute top-40 right-20 opacity-50"
                style={{filter: "blur(60px)"}}
            ></div>
        </div>
    );
}