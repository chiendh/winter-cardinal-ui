import { EShape } from "../e-shape";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare abstract class EShapeActionValueBase implements EShapeActionValue {
    readonly type: EShapeActionValueType;
    readonly condition: string;
    constructor(type: EShapeActionValueType, condition: string);
    isEquals(value: EShapeActionValue): boolean;
    toLabel(): string;
    abstract toRuntime(shape: EShape): EShapeActionRuntime;
    abstract serialize(manager: EShapeResourceManagerSerialization): number;
}
