import { EShapePoints } from "../e-shape-points";
export declare type EShapeLineBasePointsToHitThreshold = (strokeWidth: number, strokeScale: number) => number;
export declare type EShapeLineBasePointsTestRange = (x: number, y: number, threshold: number, values: number[], result: [number, number]) => [number, number];
export declare type EShapeLineBasePointsHitTester<RESULT> = (x: number, y: number, p0x: number, p0y: number, p1x: number, p1y: number, index: number, threshold: number, result: RESULT) => boolean;
export interface EShapeLineBasePoints extends EShapePoints {
    calcHitPointAbs<RESULT>(x: number, y: number, ax: number, ay: number, threshold: number, range: EShapeLineBasePointsTestRange | null, tester: EShapeLineBasePointsHitTester<RESULT>, result: RESULT): boolean;
}
