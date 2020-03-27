import { Container, DisplayObject } from "pixi.js";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
export declare type DMenuItemCreator = (options: DMenuItemOptionsUnion<any>, sticky: boolean) => DisplayObject | null;
export declare type DMenuMenuCreator = (options?: DMenuOptions) => DMenu<any>;
export declare class DMenus {
    protected static CREATORS: DMenuItemCreator[];
    protected static CREATOR_DEFAULT: DMenuItemCreator | null;
    protected static MENU_CREATOR?: DMenuMenuCreator;
    static addItemCreator(creator: DMenuItemCreator): void;
    static setItemCreatorDefault(creator: DMenuItemCreator): void;
    static setMenuCreator(creator: DMenuMenuCreator): void;
    static newItemOf<VALUE>(creators: DMenuItemCreator[], creatorDefault: DMenuItemCreator | null, options: DMenuItemOptionsUnion<VALUE>, sticky: boolean): DisplayObject | null;
    static newItem<VALUE>(options: DMenuItemOptionsUnion<VALUE>, sticky: boolean): DisplayObject | null;
    static newItemsOf<VALUE>(creator: {
        newItem(options: DMenuItemOptionsUnion<VALUE>, sticky: boolean): DisplayObject | null;
    }, parent: Container, items: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject | null | undefined>, sticky: boolean): void;
    static newItems<VALUE>(parent: Container, items: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject | null | undefined>, sticky: boolean): void;
    static newMenu<VALUE>(options?: DMenuOptions<VALUE>): DMenu<VALUE>;
}
