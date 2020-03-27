import { DThemeBase } from "./d-base";
import { DPadding } from "./d-padding";
export declare class DApplicationPadding implements DPadding {
    left: number;
    top: number;
    right: number;
    bottom: number;
    constructor(top: number, right: number, bottom: number, left: number);
    getTheme(): DThemeBase;
    setTheme(theme: DThemeBase): void;
    getTop(): number;
    getRight(): number;
    getBottom(): number;
    getLeft(): number;
    set(padding: number): void;
    set(topAndBottom: number, leftAndRight: number): void;
    set(top: number, leftAndRight: number, bottom: number): void;
}
