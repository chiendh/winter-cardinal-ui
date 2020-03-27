import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";
export interface DTextOptions<VALUE = unknown, THEME extends DThemeText = DThemeText> extends DTextBaseOptions<VALUE, THEME> {
}
export interface DThemeText extends DThemeTextBase {
}
export declare class DText<VALUE = unknown, THEME extends DThemeText = DThemeText, OPTIONS extends DTextOptions<VALUE, THEME> = DTextOptions<VALUE, THEME>> extends DTextBase<VALUE, THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected getType(): string;
}
