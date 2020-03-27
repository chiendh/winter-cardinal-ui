import { DBaseState } from "./d-base-state";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
export interface DTableCategoryCellOptions<THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell> extends DImageOptions<string | null, THEME> {
}
export interface DThemeTableCategoryCell extends DThemeImage {
    getTextFormatter(): (value: string | null, caller: DTableCategoryCell) => string;
    getTextValue(state: DBaseState): string | null;
    newTextValue(): DStateAwareOrValueMightBe<string | null>;
}
export declare class DTableCategoryCell<THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell, OPTIONS extends DTableCategoryCellOptions<THEME> = DTableCategoryCellOptions<THEME>> extends DImage<string | null, THEME, OPTIONS> {
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected getType(): string;
}
