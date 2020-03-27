import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeBarPoints } from "./e-shape-bar-points";
import { EShapeBarPosition } from "./e-shape-bar-position";
import { EShapeLineBase } from "./e-shape-line-base";
export declare class EShapeBar extends EShapeLineBase {
    points: EShapeBarPoints;
    constructor(position: EShapeBarPosition, size: number, width: number, style: EShapePointsStyle);
    clone(): EShapeBar;
    containsAbsBBox(x: number, y: number, ax: number, ay: number): boolean;
}
