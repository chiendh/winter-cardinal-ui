import { DisplayObject, IPoint, Matrix, Point, Rectangle, utils } from "pixi.js";
import { DDiagramSerializedSnap } from "../d-diagram-serialized";
import { ESnapperGrid } from "./e-snapper-grid";
import { ESnapperResult } from "./e-snapper-result";
import { ESnapperResultScale } from "./e-snapper-result-scale";
import { ESnapperTarget } from "./e-snapper-target";
export interface ESnapperModifier extends DisplayObject {
    width: number;
    height: number;
}
export declare enum ESnapperModifierAnchor {
    NONE = 0,
    TOP_LEFT = 1,
    TOP_CENTER = 2,
    TOP_RIGHT = 3,
    MIDDLE_LEFT = 4,
    MIDDLE_RIGHT = 5,
    BOTTOM_LEFT = 6,
    BOTTOM_CENTER = 7,
    BOTTOM_RIGHT = 8,
    ROTATION = 9
}
export interface ESnapperParentCanvas {
    scale: {
        x: number;
        y: number;
    };
    width: number;
    height: number;
}
export interface ESnapperParent {
    canvas: ESnapperParentCanvas | null;
}
export declare class ESnapper extends utils.EventEmitter {
    protected _points: Point[];
    protected _normals: Point[];
    protected _lengths: number[];
    protected _workScale: Point;
    protected _workScaleResult: ESnapperResultScale;
    protected _workTranslate: Point;
    protected _workSnap: Point;
    protected _workSnapRectangle: Rectangle;
    protected _workSnapResultX: ESnapperResult;
    protected _workSnapResultY: ESnapperResult;
    protected _parent: ESnapperParent;
    protected _isEnabled: boolean;
    grid: ESnapperGrid;
    target: ESnapperTarget;
    constructor(parent: ESnapperParent);
    isEnabled(): boolean;
    toggle(): boolean;
    enable(): void;
    disable(): void;
    protected prepare(modifier: ESnapperModifier): void;
    prepareForTranslate(modifier: ESnapperModifier): void;
    protected snap(point: IPoint, result: IPoint): IPoint;
    toSnapped(point: IPoint, result: IPoint): IPoint;
    toTranslationSnapped(delta: IPoint, result: IPoint): IPoint;
    prepareForRotate(modifier: ESnapperModifier): void;
    protected getGridSizeRotation(): number;
    protected toRadian(value: number): number;
    protected toDegree(value: number): number;
    toRotationSnapped(baseRotation: number, deltaRotation: number): number;
    protected calcNormalizedVector(p0: IPoint, p1: IPoint, result: Point): number;
    prepareForScale(modifier: ESnapperModifier, anchor: ESnapperModifierAnchor): void;
    protected setScaleSnappedResult(distance: number, length: number, move: number, axis: boolean, // true => x axis, false y axis
    result: ESnapperResultScale): void;
    protected calcScaleSnapped1D(transform: Matrix, point: Point, normal: IPoint, length: number, axis: boolean, result: ESnapperResultScale): void;
    protected calcScaleSnappedX(transform: Matrix, point: Point, normal: IPoint, length: number, result: ESnapperResultScale): void;
    protected calcScaleSnappedY(transform: Matrix, point: Point, normal: IPoint, length: number, result: ESnapperResultScale): void;
    calcScaleSnapped2D(transform: Matrix, point: Point, normals: IPoint[], lengths: number[], result: ESnapperResultScale): void;
    protected calcScaleSnappedXY(transform: Matrix, pointO: Point, pointX: Point, pointY: Point, normals: IPoint[], lengths: number[], result: ESnapperResultScale): void;
    toScaleSnapped(transform: Matrix, anchor: ESnapperModifierAnchor, keepRatio: boolean, scale: IPoint): boolean;
    reset(): void;
    serialize(): DDiagramSerializedSnap;
    deserialize(serialized: DDiagramSerializedSnap): void;
}
