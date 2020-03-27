import { interaction } from "pixi.js";
import { DLink, DLinkChecker, DLinkOptions, DLinkUrlMaker, DThemeLink } from "./d-link";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuItemText, DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";
export declare type DMenuItemLinkUrlMaker = (item: DMenuItemLink) => string | null | Promise<string | null>;
export declare type DMenuItemLinkChecker = (item: DMenuItemLink) => boolean | Promise<boolean>;
export interface DMenuItemLinkOptions<VALUE = unknown, THEME extends DThemeMenuItemLink = DThemeMenuItemLink> extends DMenuItemTextOptions<VALUE, THEME> {
    url?: string | DMenuItemLinkUrlMaker;
    target?: DLinkTarget;
    checker?: DMenuItemLinkChecker;
    menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}
export interface DThemeMenuItemLink extends DThemeMenuItemText, DThemeLink {
}
export declare class DMenuItemLink<VALUE = unknown, THEME extends DThemeMenuItemLink = DThemeMenuItemLink, OPTIONS extends DMenuItemLinkOptions<VALUE, THEME> = DMenuItemLinkOptions<VALUE, THEME>> extends DMenuItemText<VALUE, THEME, OPTIONS> {
    protected _link: DLink;
    constructor(options?: OPTIONS);
    protected toLinkOptions(options?: OPTIONS): DLinkOptions | undefined;
    protected toUrl(url?: string | DMenuItemLinkUrlMaker): string | DLinkUrlMaker | undefined;
    protected toChecker(checker?: DMenuItemLinkChecker): DLinkChecker | undefined;
    protected init(options?: OPTIONS): void;
    get url(): string | null | Promise<string | null>;
    get menu(): DMenu<DLinkMenuItemId>;
    protected initOnClick(options?: OPTIONS): void;
    protected getType(): string;
    protected onSelect(e: KeyboardEvent | interaction.InteractionEvent): void;
    open(inNewWindow: boolean): void;
    protected onShortcut(e: KeyboardEvent): void;
    static isCompatible<VALUE>(options: DMenuItemOptionsUnion<VALUE>): options is DMenuItemLinkOptions<VALUE>;
}
