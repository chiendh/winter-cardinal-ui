import { EShapeStroke } from "../e-shape-stroke";
import { EShapeLineOfAnyPoints, EShapeLineOfAnyPointsToHitThreshold } from "./e-shape-line-of-any-points";
export declare const toHitThreshold: (target: {
    readonly stroke: EShapeStroke;
    readonly points: EShapeLineOfAnyPoints;
}, toThreshold: EShapeLineOfAnyPointsToHitThreshold | null) => number;
