import { DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartCoordinateTransform, DThemeChartCoordinateTransform } from "./d-chart-coordinate-transform";
import { DChartCoordinateTransformMark } from "./d-chart-coordinate-transform-mark";
export declare class DChartCoordinateTransformImpl implements DChartCoordinateTransform {
    protected _theme: DThemeChartCoordinateTransform;
    protected _id: number;
    protected _translate: number;
    protected _scale: number;
    protected _itranslate: number;
    protected _iscale: number;
    constructor(theme: DThemeChartCoordinateTransform);
    get id(): number;
    get translate(): number;
    set translate(translate: number);
    get scale(): number;
    set scale(scale: number);
    bind(container: DChartCoordinateContainerSub, direction: DChartCoordinateDirection): void;
    unbind(): void;
    set(translate?: number, scale?: number): void;
    blend(ratio: number, mark: DChartCoordinateTransformMark): void;
    map(value: number): number;
    mapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void;
    unmap(value: number): number;
    unmapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void;
}
