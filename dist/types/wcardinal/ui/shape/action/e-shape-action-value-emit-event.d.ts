import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntimeEmitEvent } from "./e-shape-action-runtime-emit-event";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
export declare type EShapeActionValueEmitEventSerialized = [EShapeActionValueType.EMIT_EVENT, number, number];
export declare class EShapeActionValueEmitEvent extends EShapeActionValueBase {
    readonly name: string;
    constructor(condition: string, name: string);
    isEquals(value: EShapeActionValue): boolean;
    toRuntime(): EShapeActionRuntimeEmitEvent;
    serialize(manager: EShapeResourceManagerSerialization): number;
    static deserialize(serialized: EShapeActionValueEmitEventSerialized, manager: EShapeResourceManagerDeserialization): EShapeActionValueEmitEvent;
}
