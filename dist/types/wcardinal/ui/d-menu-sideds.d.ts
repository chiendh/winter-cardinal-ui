import { Container, DisplayObject } from "pixi.js";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuItemCreator } from "./d-menus";
export declare class DMenuSideds {
    protected static CREATORS: DMenuItemCreator[];
    protected static CREATOR_DEFAULT: DMenuItemCreator | null;
    static addItemCreator(creator: DMenuItemCreator): void;
    static setItemCreatorDefault(creator: DMenuItemCreator): void;
    static newItem<VALUE>(options: DMenuItemOptionsUnion<VALUE>, sticky: boolean): DisplayObject | null;
    static newItems<VALUE>(parent: Container, items: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>, sticky: boolean): void;
}
