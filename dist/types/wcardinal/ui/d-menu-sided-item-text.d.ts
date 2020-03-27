import { DMenuItemText, DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";
export declare class DMenuSidedItemText<VALUE = unknown, THEME extends DThemeMenuItemText = DThemeMenuItemText, OPTIONS extends DMenuItemTextOptions<VALUE, THEME> = DMenuItemTextOptions<VALUE, THEME>> extends DMenuItemText<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
