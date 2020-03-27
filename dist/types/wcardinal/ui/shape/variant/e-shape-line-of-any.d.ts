import { IPoint } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeLineOfAnyPoints, EShapeLineOfAnyPointsHitTester, EShapeLineOfAnyPointsTestRange, EShapeLineOfAnyPointsToHitThreshold } from "./e-shape-line-of-any-points";
export interface EShapeLineOfAny extends EShape {
    points: EShapeLineOfAnyPoints;
    containsPointAbs(x: number, y: number, ax: number, ay: number, ox: number, oy: number, px: number, py: number): boolean;
    containsPointAbsBBox(x: number, y: number, ax: number, ay: number, ox: number, oy: number, px: number, py: number): boolean;
    calcHitPoint<RESULT>(point: IPoint, toThreshold: EShapeLineOfAnyPointsToHitThreshold | null, range: EShapeLineOfAnyPointsTestRange | null, tester: EShapeLineOfAnyPointsHitTester<RESULT> | null, result: RESULT): boolean;
}
