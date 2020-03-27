import { DInputNumber, DInputNumberOptions, DThemeInputNumber } from "./d-input-number";
export interface DInputIntegerOptions<THEME extends DThemeInputInteger = DThemeInputInteger> extends DInputNumberOptions<THEME> {
}
export interface DThemeInputInteger extends DThemeInputNumber {
}
export declare class DInputInteger<THEME extends DThemeInputInteger = DThemeInputInteger, OPTIONS extends DInputIntegerOptions<THEME> = DInputIntegerOptions<THEME>> extends DInputNumber<THEME, OPTIONS> {
    protected getType(): string;
}
