import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";
export declare const toLineOfAnyPointCount: (pointCount: number) => number;
export declare const buildLineOfAnyColor: (voffset: number, vcountPerPoint: number, point: EShapeLineOfAnyPointsFill | EShapeLineOfAnyPointsStroke, pointCount: number, colors: Float32Array, isEnabled: boolean, colorDef: number, alphaDef: number) => void;
