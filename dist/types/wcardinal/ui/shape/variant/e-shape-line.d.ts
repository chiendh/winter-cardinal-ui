import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeLineBase } from "./e-shape-line-base";
import { EShapeLinePoints } from "./e-shape-line-points";
export declare class EShapeLine extends EShapeLineBase {
    points: EShapeLinePoints;
    constructor(line: EShapeLine);
    constructor(points: number[], segments: number[], width: number, style: EShapePointsStyle);
    clone(): EShapeLine;
}
