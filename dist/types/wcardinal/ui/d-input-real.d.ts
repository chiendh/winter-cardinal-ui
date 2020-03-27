import { DInputNumber, DInputNumberOptions, DThemeInputNumber } from "./d-input-number";
export interface DInputRealOptions<THEME extends DThemeInputReal = DThemeInputReal> extends DInputNumberOptions<THEME> {
}
export interface DThemeInputReal extends DThemeInputNumber {
}
export declare class DInputReal<THEME extends DThemeInputReal = DThemeInputReal, OPTIONS extends DInputRealOptions<THEME> = DInputRealOptions<THEME>> extends DInputNumber<THEME, OPTIONS> {
    protected getType(): string;
}
