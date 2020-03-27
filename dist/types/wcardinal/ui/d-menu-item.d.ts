import { DListItem, DListItemOptions, DThemeListItem } from "./d-list-item";
import { Closeable, DMenuContext } from "./d-menu-context";
export interface DMenuItemOptions<VALUE = unknown, THEME extends DThemeMenuItem = DThemeMenuItem> extends DListItemOptions<VALUE, THEME> {
}
export interface DThemeMenuItem extends DThemeListItem {
}
export declare class DMenuItem<VALUE = unknown, THEME extends DThemeMenuItem = DThemeMenuItem, OPTIONS extends DMenuItemOptions<VALUE, THEME> = DMenuItemOptions<VALUE, THEME>> extends DListItem<VALUE, THEME, OPTIONS> {
    getContext(): DMenuContext | null;
    getCloseable(): Closeable | null;
    protected getType(): string;
}
