import { IPoint } from "pixi.js";
import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapePoints } from "../e-shape-points";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeLineBasePoints, EShapeLineBasePointsHitTester, EShapeLineBasePointsTestRange, EShapeLineBasePointsToHitThreshold } from "./e-shape-line-base-points";
import { EShapePrimitive } from "./e-shape-primitive";
export declare abstract class EShapeLineBase extends EShapePrimitive {
    protected static WORK_RANGE: [number, number];
    abstract points: EShapeLineBasePoints;
    abstract clone(): EShapeLineBase;
    serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem;
    protected getPixelScale(): number;
    protected getStrokeWidthScale(points: EShapePoints): number;
    protected toHitThreshold(toThreshold: EShapeLineBasePointsToHitThreshold | null): number;
    containsAbs(x: number, y: number, ax: number, ay: number): boolean;
    calcHitPoint<RESULT>(point: IPoint, toHitThreshold: EShapeLineBasePointsToHitThreshold | null, range: EShapeLineBasePointsTestRange | null, tester: EShapeLineBasePointsHitTester<RESULT>, result: RESULT): boolean;
    protected calcHitPointAbsHitTester(this: unknown, x: number, y: number, p0x: number, p0y: number, p1x: number, p1y: number, index: number, threshold: number, result: unknown): boolean;
}
