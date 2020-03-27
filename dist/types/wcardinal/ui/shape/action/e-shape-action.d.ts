import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionValue } from "./e-shape-action-value";
export declare class EShapeAction {
    values: EShapeActionValue[];
    constructor();
    add(value: EShapeActionValue, index?: number): void;
    addAll(values: EShapeActionValue[]): void;
    indexOf(target: EShapeActionValue): number;
    get(index: number): EShapeActionValue | null;
    set(index: number, value: EShapeActionValue): void;
    remove(index: number): void;
    clear(): void;
    size(): number;
    swap(indexA: number, indexB: number): void;
    serialize(manager: EShapeResourceManagerSerialization): number[];
}
