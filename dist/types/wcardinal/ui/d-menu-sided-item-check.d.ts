import { DMenuItemCheck, DMenuItemCheckOptions, DThemeMenuItemCheck } from "./d-menu-item-check";
export declare class DMenuSidedItemCheck<VALUE = unknown, THEME extends DThemeMenuItemCheck = DThemeMenuItemCheck, OPTIONS extends DMenuItemCheckOptions<VALUE, THEME> = DMenuItemCheckOptions<VALUE, THEME>> extends DMenuItemCheck<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
