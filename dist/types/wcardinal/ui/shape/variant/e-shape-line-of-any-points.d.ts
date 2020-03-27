import { EShapePoints } from "../e-shape-points";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsPoint } from "./e-shape-line-of-any-points-point";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";
export declare type EShapeLineOfAnyPointsToHitThreshold = (size: number, scale: number) => number;
export declare type EShapeLineOfAnyPointsTestRange = (x: number, y: number, ax: number, ay: number, ox: number, oy: number, threshold: number, values: number[], result: [number, number]) => [number, number];
export declare type EShapeLineOfAnyPointsHitTester<RESULT> = (x: number, y: number, ax: number, ay: number, ox: number, oy: number, px: number, py: number, index: number, threshold: number, result: RESULT) => boolean;
export interface EShapeLineOfAnyPoints extends EShapePoints {
    readonly size: EShapeLineOfAnyPointsPoint;
    readonly offset: EShapeLineOfAnyPointsPoint;
    readonly fill: EShapeLineOfAnyPointsFill;
    readonly stroke: EShapeLineOfAnyPointsStroke;
    calcHitPointAbs<RESULT>(x: number, y: number, threshold: number, range: EShapeLineOfAnyPointsTestRange | null, tester: EShapeLineOfAnyPointsHitTester<RESULT>, result: RESULT): boolean;
}
