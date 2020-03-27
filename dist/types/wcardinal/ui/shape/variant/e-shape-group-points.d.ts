import { Matrix, Point } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapePoints } from "../e-shape-points";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";
export declare class EShapeGroupPoints implements EShapePoints {
    protected _parent: EShapeGroupPropertyParent;
    constructor(parent: EShapeGroupPropertyParent);
    get length(): number;
    get id(): number;
    get values(): number[];
    set values(values: number[]);
    get segments(): number[];
    set segments(segments: number[]);
    get style(): EShapePointsStyle;
    set style(style: EShapePointsStyle);
    copy(source: EShapePoints): this;
    set(values?: number[], segments?: number[], style?: EShapePointsStyle): this;
    clone(parent: EShape): EShapeGroupPoints;
    toPoints(transform: Matrix): Point[];
    serialize(manager: EShapeResourceManagerSerialization): number;
}
