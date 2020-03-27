import { DMenu } from "./d-menu";
import { Closeable } from "./d-menu-context";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemMenu, DMenuItemMenuOptions, DThemeMenuItemMenu } from "./d-menu-item-menu";
export declare class DMenuSidedItemMenu<VALUE = unknown, THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu, OPTIONS extends DMenuItemMenuOptions<VALUE, THEME> = DMenuItemMenuOptions<VALUE, THEME>> extends DMenuItemMenu<VALUE, THEME, OPTIONS> {
    protected initHover(options: OPTIONS): void;
    protected onMenuSelect(value: VALUE, item: DMenuItem<VALUE>, closeable: Closeable): void;
    protected onOpen(menu: DMenu<VALUE>): void;
    protected getType(): string;
}
