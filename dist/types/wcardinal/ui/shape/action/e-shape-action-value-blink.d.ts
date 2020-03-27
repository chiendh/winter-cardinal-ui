import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBlinkType } from "./e-shape-action-value-blink-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueBlinkSerialized = [EShapeActionValueType.BLINK, number, EShapeActionValueBlinkType.COLOR_FILL | EShapeActionValueBlinkType.COLOR_STROKE, number, number, number];
export declare class EShapeActionValueBlink extends EShapeActionValueSubtyped<EShapeActionValueBlinkType> {
    readonly interval: number;
    readonly color: number;
    readonly alpha: number;
    constructor(subtype: EShapeActionValueBlinkType, condition: string, interval: number, color: number, alpha: number);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeBlink;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueBlinkSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueBlink;
}
