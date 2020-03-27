import { DThemeBase } from "./d-base";
import { DPadding } from "./d-padding";
export interface DBasePaddingAdjuster {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export declare class DBasePaddingAdjustable implements DPadding {
    protected _target: DPadding;
    protected _adjuster: DBasePaddingAdjuster;
    constructor(target: DPadding);
    get adjuster(): DBasePaddingAdjuster;
    getTheme(): DThemeBase;
    setTheme(theme: DThemeBase): void;
    getLeft(): number;
    get left(): number | undefined;
    set left(left: number | undefined);
    getTop(): number;
    get top(): number | undefined;
    set top(top: number | undefined);
    getRight(): number;
    get right(): number | undefined;
    set right(right: number | undefined);
    getBottom(): number;
    get bottom(): number | undefined;
    set bottom(bottom: number | undefined);
    set(padding: number): void;
    set(topAndBottom: number, leftAndRight: number): void;
    set(top: number, leftAndRight: number, bottom: number): void;
    set(top: number, right: number, bottom: number, left: number): void;
}
