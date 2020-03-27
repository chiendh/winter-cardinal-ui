import { DText, DTextOptions, DThemeText } from "./d-text";
export interface DInputLabelOptions<VALUE = unknown, THEME extends DThemeText = DThemeText> extends DTextOptions<VALUE, THEME> {
}
export interface DThemeInputLabel extends DThemeText {
}
export declare class DInputLabel<VALUE = unknown, THEME extends DThemeInputLabel = DThemeInputLabel, OPTIONS extends DInputLabelOptions<VALUE, THEME> = DInputLabelOptions<VALUE, THEME>> extends DText<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
