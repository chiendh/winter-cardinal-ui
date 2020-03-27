import { interaction } from "pixi.js";
import { DLink, DLinkChecker, DLinkOptions, DLinkUrlMaker, DThemeLink } from "./d-link";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenu, DMenuOptions } from "./d-menu";
import { DTableBodyCellButton, DTableBodyCellButtonOptions, DThemeTableBodyCellButton } from "./d-table-body-cell-button";
export declare type DTableBodyCellLinkUrlMaker<ROW> = (row: ROW, rowIndex: number, columnIndex: number, link: DTableBodyCellLink<ROW>) => string | null | Promise<string | null>;
export declare type DTableBodyCellLinkChecker<ROW> = (row: ROW, rowIndex: number, columnIndex: number, link: DTableBodyCellLink<ROW>) => boolean | Promise<boolean>;
export interface DTableBodyCellLinkLinkOptions<ROW> {
    url?: string | DTableBodyCellLinkUrlMaker<ROW>;
    target?: DLinkTarget;
    checker?: DTableBodyCellLinkChecker<ROW>;
    menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}
export interface DTableBodyCellLinkOptions<ROW, THEME extends DThemeTableBodyCellLink = DThemeTableBodyCellLink> extends DTableBodyCellButtonOptions<ROW, THEME> {
    link?: DTableBodyCellLinkLinkOptions<ROW>;
}
export interface DThemeTableBodyCellLink extends DThemeTableBodyCellButton, DThemeLink {
}
export declare class DTableBodyCellLink<ROW, THEME extends DThemeTableBodyCellLink = DThemeTableBodyCellLink, OPTIONS extends DTableBodyCellLinkOptions<ROW, THEME> = DTableBodyCellLinkOptions<ROW, THEME>> extends DTableBodyCellButton<ROW, THEME, OPTIONS> {
    protected _link: DLink;
    constructor(options: OPTIONS);
    protected toLinkOptions(options: OPTIONS): DLinkOptions | undefined;
    protected toUrl(url?: string | DTableBodyCellLinkUrlMaker<ROW>): string | DLinkUrlMaker | undefined;
    protected toChecker(checker?: DTableBodyCellLinkChecker<ROW>): DLinkChecker | undefined;
    protected init(options: OPTIONS): void;
    protected initOnClick(options: OPTIONS): void;
    get url(): string | null | Promise<string | null>;
    get menu(): DMenu<DLinkMenuItemId>;
    protected getType(): string;
    protected onActive(e: KeyboardEvent | interaction.InteractionEvent): void;
    open(inNewWindow: boolean): void;
}
