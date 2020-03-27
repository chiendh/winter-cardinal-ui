import { IPoint } from "pixi.js";
import { EShapeLineOfAny } from "./e-shape-line-of-any";
import { EShapeLineOfAnyPoints, EShapeLineOfAnyPointsHitTester, EShapeLineOfAnyPointsTestRange, EShapeLineOfAnyPointsToHitThreshold } from "./e-shape-line-of-any-points";
import { EShapeRectangle } from "./e-shape-rectangle";
export declare class EShapeLineOfRectangles extends EShapeRectangle implements EShapeLineOfAny {
    points: EShapeLineOfAnyPoints;
    protected _tester: EShapeLineOfAnyPointsHitTester<unknown>;
    protected _testerBBox: EShapeLineOfAnyPointsHitTester<unknown>;
    constructor(other?: EShapeLineOfRectangles);
    clone(): EShapeLineOfRectangles;
    containsAbs(x: number, y: number, ax: number, ay: number): boolean;
    containsPointAbs(x: number, y: number, ax: number, ay: number, ox: number, oy: number, px: number, py: number): boolean;
    containsPointAbsBBox(x: number, y: number, ax: number, ay: number, ox: number, oy: number, px: number, py: number): boolean;
    calcHitPoint<RESULT>(point: IPoint, toThreshold: EShapeLineOfAnyPointsToHitThreshold | null, range: EShapeLineOfAnyPointsTestRange | null, tester: EShapeLineOfAnyPointsHitTester<RESULT> | null, result: RESULT): boolean;
}
