import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeLine } from "./e-shape-line";
export declare const createLine: (points: number[], segments: number[], strokeWidth: number, style: EShapePointsStyle) => EShapeLine;
export declare const toLineStrokeWidth: (index: number, resources: string[]) => number;
