import { DDiagramSerializedSnapTargetValue } from "../d-diagram-serialized";
export declare enum ESnapperTargetValueType {
    HORIZONTAL = 0,
    VERTICAL = 1
}
export declare class ESnapperTargetValue {
    type: ESnapperTargetValueType;
    position: number;
    constructor(type: ESnapperTargetValueType, position: number);
    serialize(): DDiagramSerializedSnapTargetValue;
}
