declare type Callback = (target: DPickerColorGradientPoint) => void;
export interface DPickerColorGradientPointLike {
    color: number;
    alpha: number;
    position: number;
}
export declare class DPickerColorGradientPoint implements DPickerColorGradientPointLike {
    protected _color: number;
    protected _alpha: number;
    protected _position: number;
    protected _callback: Callback;
    protected _selected: boolean;
    constructor(color: number, alpha: number, position: number, selected: boolean, callback: Callback);
    set(color: number, alpha: number, position: number, selected: boolean): void;
    get color(): number;
    set color(color: number);
    get alpha(): number;
    set alpha(alpha: number);
    get position(): number;
    set position(position: number);
    get selected(): boolean;
    set selected(selected: boolean);
    toObject(): DPickerColorGradientPointLike;
}
export {};
