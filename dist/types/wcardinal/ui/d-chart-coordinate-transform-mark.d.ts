export interface DChartCoordinateTransformMark {
    oldTranslate: number;
    oldScale: number;
    newTranslate: number;
    newScale: number;
    set(translate?: number, scale?: number): void;
}
export declare class DChartCoordinateTransformMarkImpl implements DChartCoordinateTransformMark {
    oldTranslate: number;
    oldScale: number;
    newTranslate: number;
    newScale: number;
    constructor();
    set(translate?: number | undefined, scale?: number | undefined): void;
}
