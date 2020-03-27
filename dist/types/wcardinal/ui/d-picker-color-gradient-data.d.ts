import { utils } from "pixi.js";
import { DPickerColorGradientPoint, DPickerColorGradientPointLike } from "./d-picker-color-gradient-point";
export interface DPickerColorGradientDataLike {
    points: DPickerColorGradientPointLike[];
    direction: number;
}
export declare class DPickerColorGradientData extends utils.EventEmitter {
    protected _points: DPickerColorGradientPoint[];
    protected _direction: number;
    protected _selected: DPickerColorGradientPoint | null;
    protected _onChangeBound: (target: DPickerColorGradientPoint) => void;
    protected _workColor: number[];
    constructor();
    protected onChange(target: DPickerColorGradientPoint): void;
    get points(): DPickerColorGradientPoint[];
    get direction(): number;
    set direction(direction: number);
    get selected(): DPickerColorGradientPoint | null;
    size(): number;
    get(index: number): DPickerColorGradientPoint | null;
    addAt(position: number): DPickerColorGradientPoint;
    add(color: number, alpha: number, position: number, selected: boolean): DPickerColorGradientPoint;
    remove(point: DPickerColorGradientPoint): boolean;
    reset(): void;
    toObject(): DPickerColorGradientDataLike;
    fromObject(data: DPickerColorGradientDataLike): void;
}
