import { utils } from "pixi.js";
import { DColorAndAlpha } from "./d-color";
export declare class DPickerColorRecent extends utils.EventEmitter {
    protected _recents: DColorAndAlpha[];
    protected _capacity: number;
    constructor(recents: DColorAndAlpha[], capacity: number);
    get(index: number): DColorAndAlpha | null;
    set(index: number, colorAndAlpha: DColorAndAlpha): DColorAndAlpha | null;
    contains(colorAndAlpha: DColorAndAlpha): boolean;
    add(colorAndAlpha: DColorAndAlpha): this;
    pop(): DColorAndAlpha | null;
    size(): number;
}
