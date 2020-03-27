import { Container, utils } from "pixi.js";
import { DBase } from "./d-base";
import { DListItemSelection } from "./d-list-item";
import { DMenu } from "./d-menu";
export declare enum DMenuSidedSelectionMode {
    NONE = 0,
    SINGLE = 1,
    SINGLE_ONCE = 2,
    DEFAULT = 2
}
export interface DMenuSidedSelectionOnOptions {
    [name: string]: Function;
}
export interface DMenuSidedSelectionOptions {
    mode?: (keyof typeof DMenuSidedSelectionMode) | DMenuSidedSelectionMode;
    on?: DMenuSidedSelectionOnOptions;
    filter?: (item: DBase | null) => boolean;
}
export declare class DMenuSidedSelection extends utils.EventEmitter implements DListItemSelection {
    protected _content: Container;
    protected _item: DBase | null;
    protected _isDirty: boolean;
    protected _mode: DMenuSidedSelectionMode;
    protected _filter: (item: DBase | null) => boolean;
    constructor(content: Container, options?: DMenuSidedSelectionOptions);
    toDirty(): void;
    update(): void;
    protected hasMenu(child: any): child is {
        menu: DMenu<any>;
    };
    protected update_(root: Container): void;
    add(item: DBase): void;
    set(item: DBase): void;
    get(): DBase | null;
    size(): number;
    isEmpty(): boolean;
    remove(item: DBase): void;
    clear(): void;
    protected getFilterDefault(): (item: DBase | null) => boolean;
    protected set_(item: DBase | null, emit: boolean): void;
    protected setState(item: DBase | null, mode: DMenuSidedSelectionMode, isOn: boolean): void;
}
