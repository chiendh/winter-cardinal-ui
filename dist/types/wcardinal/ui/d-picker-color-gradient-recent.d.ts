import { utils } from "pixi.js";
import { DPickerColorGradientDataLike } from "./d-picker-color-gradient-data";
export declare class DPickerColorGradientRecent extends utils.EventEmitter {
    protected _recents: DPickerColorGradientDataLike[];
    protected _capacity: number;
    constructor(recents: DPickerColorGradientDataLike[], capacity: number);
    getCapacity(): number;
    get(index: number): DPickerColorGradientDataLike | null;
    set(index: number, points: DPickerColorGradientDataLike): DPickerColorGradientDataLike | null;
    contains(points: DPickerColorGradientDataLike): boolean;
    add(points: DPickerColorGradientDataLike): this;
    pop(): DPickerColorGradientDataLike | null;
    size(): number;
}
