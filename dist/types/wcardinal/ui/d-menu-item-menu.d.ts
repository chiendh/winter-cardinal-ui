import { interaction } from "pixi.js";
import { DMenu, DMenuOptions } from "./d-menu";
import { Closeable } from "./d-menu-context";
import { DMenuItem, DMenuItemOptions, DThemeMenuItem } from "./d-menu-item";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
export interface DMenuItemMenuOptions<VALUE = unknown, THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu> extends DMenuItemOptions<VALUE, THEME> {
    menu: DMenuOptions<VALUE> | DMenu<VALUE>;
}
export interface DThemeMenuItemMenu extends DThemeMenuItem {
}
export declare class DMenuItemMenu<VALUE = unknown, THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu, OPTIONS extends DMenuItemMenuOptions<VALUE, THEME> = DMenuItemMenuOptions<VALUE, THEME>> extends DMenuItem<VALUE, THEME, OPTIONS> {
    protected _menu: DMenu<VALUE>;
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected initHover(options: OPTIONS): void;
    protected toMenu(options: OPTIONS): DMenu<VALUE>;
    protected newMenu(options: DMenuOptions<VALUE>): DMenu<VALUE>;
    get menu(): DMenu<VALUE>;
    protected getType(): string;
    open(): void;
    protected onOpen(menu: DMenu<VALUE>): void;
    close(): void;
    toggle(): void;
    protected onSelect(e: KeyboardEvent | interaction.InteractionEvent): void;
    protected onMenuSelect(value: VALUE, item: DMenuItem<VALUE>, closeable: Closeable): void;
    static isCompatible<VALUE>(options: DMenuItemOptionsUnion<VALUE>): options is DMenuItemMenuOptions<VALUE>;
    static toSubMenuOptions<VALUE>(options: DMenuItemMenuOptions<VALUE>, sticky: boolean): DMenuItemMenuOptions<VALUE>;
}
