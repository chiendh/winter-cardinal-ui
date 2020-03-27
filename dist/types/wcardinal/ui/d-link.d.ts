import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenu, DMenuOptions } from "./d-menu";
import { Closeable } from "./d-menu-context";
import { DMenuItem } from "./d-menu-item";
export declare type DLinkUrlMaker = () => string | null | Promise<string | null>;
export declare type DLinkChecker = () => boolean | Promise<boolean>;
export interface DLinkOptions {
    url?: string | DLinkUrlMaker;
    target?: DLinkTarget;
    checker?: DLinkChecker;
    menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}
export interface DThemeLink {
    getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}
export declare class DLink {
    protected _url?: string | DLinkUrlMaker;
    protected _target?: DLinkTarget;
    protected _checker?: DLinkChecker;
    protected _menu?: DMenu<DLinkMenuItemId>;
    protected _menuOptions?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
    protected _theme: DThemeLink;
    constructor(theme: DThemeLink, options?: DLinkOptions);
    get url(): string | null | Promise<string | null>;
    get target(): DLinkTarget | undefined;
    get menu(): DMenu<DLinkMenuItemId>;
    protected toMenu(options: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>): DMenu<DLinkMenuItemId>;
    protected newMenu(options: DMenuOptions<DLinkMenuItemId>): DMenu<DLinkMenuItemId>;
    protected onMenuSelect(value: DLinkMenuItemId, item: DMenuItem<DLinkMenuItemId>, closeable: Closeable): void;
    copy(url: string): void;
    apply(target: DBase, onSelect: (e: interaction.InteractionEvent) => void): void;
    open(inNewWindow: boolean): void;
    check(url: string, inNewWindow: boolean): void;
    exec(url: string, inNewWindow: boolean): void;
    inNewWindow(e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): boolean;
}
