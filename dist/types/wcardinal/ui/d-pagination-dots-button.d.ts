import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";
export interface DPaginationDotsButtonOptions<VALUE = unknown, THEME extends DThemePaginationDotsButton = DThemePaginationDotsButton> extends DButtonAmbientOptions<VALUE, THEME> {
}
export interface DThemePaginationDotsButton extends DThemeButtonAmbient {
}
export declare class DPaginationDotsButton<VALUE = unknown, THEME extends DThemePaginationDotsButton = DThemePaginationDotsButton, OPTIONS extends DPaginationDotsButtonOptions<VALUE, THEME> = DPaginationDotsButtonOptions<VALUE, THEME>> extends DButtonAmbient<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
