import { ObservablePoint, Point } from "pixi.js";
import { EShapeGroupSize } from "./e-shape-group-size";
export declare class EShapeGroupSizeViewer extends ObservablePoint implements EShapeGroupSize {
    base: Point;
    constructor(cb: () => void, x: number, y: number);
    init(): void;
    fit(): void;
}
