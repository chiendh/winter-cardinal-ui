import { DLayout, DLayoutOptions, DThemeLayout } from "./d-layout";
export interface DLayoutVerticalOptions<THEME extends DThemeLayoutVertical> extends DLayoutOptions<THEME> {
}
export interface DThemeLayoutVertical extends DThemeLayout {
}
export declare class DLayoutVertical<THEME extends DThemeLayoutVertical = DThemeLayoutVertical, OPTIONS extends DLayoutVerticalOptions<THEME> = DLayoutVerticalOptions<THEME>> extends DLayout<THEME, OPTIONS> {
    protected getType(): string;
}
