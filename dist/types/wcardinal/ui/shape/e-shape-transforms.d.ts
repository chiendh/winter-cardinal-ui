import { Matrix } from "pixi.js";
import { EShape } from "./e-shape";
export declare class EShapeTransforms {
    static prepare(shape: EShape): void;
    static finalize(shape: EShape): void;
    static apply(shape: EShape, transform: Matrix, keepSize: boolean): void;
    static applyLocal(shape: EShape, localTransform: Matrix, bx?: number, by?: number): void;
}
