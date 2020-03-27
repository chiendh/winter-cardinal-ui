import { utils } from "pixi.js";
import { DDiagramSerializedSnapTarget } from "../d-diagram-serialized";
import { ESnapperResult } from "./e-snapper-result";
import { ESnapperTargetValue } from "./e-snapper-target-value";
export declare class ESnapperTarget extends utils.EventEmitter {
    values: ESnapperTargetValue[];
    protected _isVisible: boolean;
    protected _isEnabled: boolean;
    constructor();
    isEnabled(): boolean;
    toggle(): boolean;
    enable(): void;
    disable(): void;
    add(target: ESnapperTargetValue, index?: number): void;
    remove(index: number): void;
    size(): number;
    replace(index: number, value: ESnapperTargetValue): ESnapperTargetValue | null;
    swap(indexA: number, indexB: number): void;
    get visible(): boolean;
    set visible(visible: boolean);
    snap(px: number, py: number, x: ESnapperResult, y: ESnapperResult): void;
    reset(): void;
    serialize(): DDiagramSerializedSnapTarget;
    deserialize(serialized: DDiagramSerializedSnapTarget): void;
}
