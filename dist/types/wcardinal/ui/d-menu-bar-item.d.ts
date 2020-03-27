import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
export interface DMenuBarItemOptions<VALUE = unknown, THEME extends DThemeMenuBarItem = DThemeMenuBarItem> extends DButtonOptions<VALUE, THEME> {
    menu?: DMenuOptions<VALUE> | DMenu<VALUE>;
}
export interface DThemeMenuBarItem extends DThemeButton {
}
export declare class DMenuBarItem<VALUE = unknown, THEME extends DThemeMenuBarItem = DThemeMenuBarItem, OPTIONS extends DMenuBarItemOptions<VALUE, THEME> = DMenuBarItemOptions<VALUE, THEME>> extends DButton<VALUE, THEME, OPTIONS> {
    protected _menu: DMenu<VALUE>;
    protected init(options?: OPTIONS): void;
    protected toMenu(theme: THEME, options?: OPTIONS): DMenu<VALUE>;
    protected newMenu(theme: THEME, options?: DMenuOptions<VALUE>): DMenu<VALUE>;
    protected toMenuOptions(theme: THEME, options?: DMenuOptions<VALUE>): DMenuOptions<VALUE> | undefined;
    close(): void;
    get menu(): DMenu<VALUE, import("./d-menu").DThemeMenu, DMenuOptions<VALUE, import("./d-menu").DThemeMenu>>;
    protected onSelect(value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE>): void;
    protected getType(): string;
}
