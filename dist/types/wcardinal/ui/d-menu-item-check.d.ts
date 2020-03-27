import { interaction } from "pixi.js";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuItemText, DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";
export interface DMenuItemCheckOptions<VALUE = unknown, THEME extends DThemeMenuItemCheck = DThemeMenuItemCheck> extends DMenuItemTextOptions<VALUE, THEME> {
    check: boolean;
}
export interface DThemeMenuItemCheck extends DThemeMenuItemText {
}
export declare class DMenuItemCheck<VALUE = unknown, THEME extends DThemeMenuItemCheck = DThemeMenuItemCheck, OPTIONS extends DMenuItemCheckOptions<VALUE, THEME> = DMenuItemCheckOptions<VALUE, THEME>> extends DMenuItemText<VALUE, THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected getType(): string;
    protected onSelect(e: KeyboardEvent | interaction.InteractionEvent): void;
    static isCompatible<VALUE>(options: DMenuItemOptionsUnion<VALUE>): options is DMenuItemCheckOptions<VALUE>;
}
