import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";
export interface DSliderLabelOptions<VALUE = unknown, THEME extends DThemeSliderLabel = DThemeSliderLabel> extends DTextBaseOptions<VALUE, THEME> {
    value?: number;
}
export interface DThemeSliderLabel extends DThemeTextBase {
}
export declare class DSliderLabel<VALUE = unknown, THEME extends DThemeSliderLabel = DThemeSliderLabel, OPTIONS extends DSliderLabelOptions<VALUE, THEME> = DSliderLabelOptions<VALUE, THEME>> extends DTextBase<VALUE, THEME, OPTIONS> {
    protected _value: number;
    protected init(options?: OPTIONS): void;
    set value(value: number);
    get value(): number;
    protected getType(): string;
}
