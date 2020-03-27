import { DLayout, DLayoutOptions, DThemeLayout } from "./d-layout";
export interface DLayoutHorizontalOptions<THEME extends DThemeLayoutHorizontal> extends DLayoutOptions<THEME> {
}
export interface DThemeLayoutHorizontal extends DThemeLayout {
}
export declare class DLayoutHorizontal<THEME extends DThemeLayoutHorizontal = DThemeLayoutHorizontal, OPTIONS extends DLayoutHorizontalOptions<THEME> = DLayoutHorizontalOptions<THEME>> extends DLayout<THEME, OPTIONS> {
    protected getType(): string;
}
