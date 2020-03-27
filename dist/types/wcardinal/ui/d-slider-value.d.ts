import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";
export interface DSliderValueOptions<VALUE = number, THEME extends DThemeSliderValue = DThemeSliderValue> extends DTextBaseOptions<VALUE, THEME> {
    value?: number;
    precision?: number;
    rounder?: (value: number) => number;
}
export interface DThemeSliderValue extends DThemeTextBase {
    getPrecision(): number;
}
export declare class DSliderValue<VALUE = number, THEME extends DThemeSliderValue = DThemeSliderValue, OPTIONS extends DSliderValueOptions<VALUE, THEME> = DSliderValueOptions<VALUE, THEME>> extends DTextBase<VALUE, THEME, OPTIONS> {
    protected _value: number;
    protected _rounder: (value: number) => number;
    protected init(options?: OPTIONS): void;
    toRounder(options?: OPTIONS): (value: number) => number;
    set value(value: number);
    get value(): number;
    get rounder(): (value: number) => number;
    protected getType(): string;
}
