import { IPoint } from "pixi.js";
import { EShape } from "./e-shape";
export declare class EShapeSizes {
    static toRounded(value: number): number;
    static toNormalized(size: number): number;
    static resize(shape: EShape, from: IPoint, to: IPoint, centerMode: boolean, isPerfect: boolean): void;
}
