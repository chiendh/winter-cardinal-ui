import { Matrix, Point } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapePoints } from "../e-shape-points";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeLineBasePointsHitTester, EShapeLineBasePointsTestRange } from "./e-shape-line-base-points";
export declare class EShapeLinePoints implements EShapePoints {
    protected static WORK_RANGE: [number, number];
    protected _parent: EShape;
    protected _valuesBase?: number[];
    protected _valuesBaseLength: number;
    protected _values: number[];
    protected _segments: number[];
    readonly position: Point;
    protected _sizeBase: Point;
    readonly size: Point;
    protected _id: number;
    protected _style: EShapePointsStyle;
    constructor(parent: EShape, points: number[], segments: number[], style: EShapePointsStyle);
    get length(): number;
    private fitToParentSize;
    get id(): number;
    get values(): number[];
    set values(values: number[]);
    get segments(): number[];
    /**
     * Must be sorted in ascending order.
     */
    set segments(segments: number[]);
    get style(): EShapePointsStyle;
    set style(style: EShapePointsStyle);
    copy(source: EShapePoints): this;
    set(newValues?: number[], newSegments?: number[], newStyle?: EShapePointsStyle): this;
    clone(parent: EShape): EShapeLinePoints;
    toPoints(transform: Matrix): Point[];
    serialize(manager: EShapeResourceManagerSerialization): number;
    calcHitPointAbs<RESULT>(x: number, y: number, ax: number, ay: number, threshold: number, range: EShapeLineBasePointsTestRange | null, tester: EShapeLineBasePointsHitTester<RESULT>, result: RESULT): boolean;
}
