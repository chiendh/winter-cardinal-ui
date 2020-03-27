export declare class EShapeImageElements {
    static imageElements: {
        [src: string]: Promise<HTMLImageElement> | HTMLImageElement | undefined;
    };
    static toImageElement(dataUrl: string): Promise<HTMLImageElement>;
}
