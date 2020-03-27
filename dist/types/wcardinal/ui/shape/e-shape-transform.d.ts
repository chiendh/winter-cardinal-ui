import { Matrix, ObservablePoint, Transform } from "pixi.js";
import { EShapeTransformParent } from "./e-shape-transform-parent";
export interface EShapeTransform extends Transform {
    internalTransform: Matrix;
    position: ObservablePoint;
    pivot: ObservablePoint;
    rotation: number;
    skew: ObservablePoint;
    scale: ObservablePoint;
    getLocalIdCurrent(): number;
    getLocalId(): number;
    getParentId(): number;
    getWorldId(): number;
}
export declare class EShapeTransformImpl extends Transform implements EShapeTransform {
    protected _parent: EShapeTransformParent;
    internalTransform: Matrix;
    constructor(parent: EShapeTransformParent);
    protected onChange(): void;
    protected updateSkew(): void;
    getLocalIdCurrent(): number;
    getLocalId(): number;
    getParentId(): number;
    getWorldId(): number;
    updateTransform(parentTransform: Transform): void;
}
