import { DisplayObject } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpaceOptions, DThemeLayoutSpace } from "./d-layout-space";
import { DMenuBarBlocker } from "./d-menu-bar-blocker";
import { DMenuBarItem, DMenuBarItemOptions, DThemeMenuBarItem } from "./d-menu-bar-item";
import { Closeable, DMenuContext } from "./d-menu-context";
import { UtilOverlay } from "./util/util-overlay";
export interface DMenuBarItemSpaceOptions<THEME extends DThemeMenuBarItemSpace = DThemeMenuBarItemSpace> extends DLayoutSpaceOptions<THEME> {
    space: true;
}
export interface DThemeMenuBarItemSpace extends DThemeLayoutSpace {
}
export interface DMenuBarOptions<VALUE = unknown, THEME extends DThemeMenuBar = DThemeMenuBar> extends DLayoutHorizontalOptions<THEME> {
    items?: Array<DMenuBarItemOptions<VALUE, DThemeMenuBarItem> | DMenuBarItemSpaceOptions | DisplayObject>;
}
export interface DThemeMenuBar extends DThemeLayoutHorizontal {
}
export declare class DMenuBar<VALUE = unknown, THEME extends DThemeMenuBar = DThemeMenuBar, OPTIONS extends DMenuBarOptions<VALUE, THEME> = DMenuBarOptions<VALUE, THEME>> extends DLayoutHorizontal<THEME, OPTIONS> {
    protected _context: DMenuContext | null;
    protected _blocker: DMenuBarBlocker;
    protected _overlay: UtilOverlay;
    protected init(options?: OPTIONS): void;
    protected onItemStateChange(newState: DBaseState, oldState: DBaseState, item: DMenuBarItem<VALUE>): void;
    getContext(): DMenuContext | null;
    getCloseable(): Closeable | null;
    open(item: DMenuBarItem<VALUE>): void;
    close(): void;
    protected getType(): string;
}
