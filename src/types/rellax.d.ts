declare module "rellax" {
    export default class Rellax {
        constructor(selector: string | HTMLElement, options?: {
            speed?: number;
            center?: boolean;
            wrapper?: string | HTMLElement;
            vertical?: boolean;
            horizontal?: boolean;
            round?: boolean;
            callback?: () => void;
        });

        destroy(): void;
    }
}