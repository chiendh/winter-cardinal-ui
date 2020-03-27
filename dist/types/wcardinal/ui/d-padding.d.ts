import { DThemeBase } from "./d-base";
export interface DPaddingLike {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}
export interface DPadding extends DPaddingLike {
    set(padding: number): void;
    set(topAndBottom: number, leftAndRight: number): void;
    set(top: number, leftAndRight: number, bottom: number): void;
    set(top: number, right: number, bottom: number, left: number): void;
    getTheme(): DThemeBase;
    setTheme(theme: DThemeBase): void;
    getLeft(): number;
    getTop(): number;
    getRight(): number;
    getBottom(): number;
}
