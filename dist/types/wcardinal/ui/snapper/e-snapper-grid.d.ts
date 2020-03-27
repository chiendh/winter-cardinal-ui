import { utils } from "pixi.js";
import { DDiagramSerializedSnapGrid } from "../d-diagram-serialized";
import { ESnapperResult } from "./e-snapper-result";
export declare class ESnapperGrid extends utils.EventEmitter {
    protected _isEnabled: boolean;
    protected _size: number;
    constructor();
    toggle(): boolean;
    enable(): void;
    disable(): void;
    isEnabled(): boolean;
    get size(): number;
    set size(size: number);
    snap(value: number, result: ESnapperResult): void;
    reset(): void;
    serialize(): DDiagramSerializedSnapGrid;
    deserialize(serialized: DDiagramSerializedSnapGrid): void;
}
