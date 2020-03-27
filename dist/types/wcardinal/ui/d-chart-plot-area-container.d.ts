import { Rectangle } from "pixi.js";
import { DBasePoint } from "./d-base-point";
import { DViewTarget } from "./d-view-to-target";
import { EShapeContainer } from "./shape/e-shape-container";
export declare class DChartPlotAreaContainer extends EShapeContainer implements DViewTarget {
    protected _position: DBasePoint;
    protected _scale: DBasePoint;
    protected _workRect: Rectangle;
    constructor(onChange: () => void);
    get position(): DBasePoint;
    get scale(): DBasePoint;
    getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
    calculateBounds(): void;
}
