import { DisplayObject, Point } from "pixi.js";
import { DBase } from "./d-base";
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
import { DMenuAlign } from "./d-menu-align";
import { Closeable, DMenuContext } from "./d-menu-context";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { UtilOverlay } from "./util/util-overlay";
export interface DMenuOptions<VALUE = unknown, THEME extends DThemeMenu = DThemeMenu> extends DLayoutVerticalOptions<THEME> {
    align?: (keyof typeof DMenuAlign) | DMenuAlign;
    fit?: boolean;
    sticky?: boolean;
    items?: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject | null | undefined>;
}
export interface DThemeMenu extends DThemeLayoutVertical {
    getOffsetX(): number;
    getOffsetY(): number;
}
export declare class DMenu<VALUE, THEME extends DThemeMenu = DThemeMenu, OPTIONS extends DMenuOptions<VALUE, THEME> = DMenuOptions<VALUE, THEME>> extends DLayoutVertical<THEME, OPTIONS> {
    protected _align: DMenuAlign;
    protected _fit: boolean;
    protected _sticky: boolean;
    protected _sub: boolean;
    protected _owner: DBase<any, any> | null;
    protected _context: DMenuContext | null;
    protected _overlay: UtilOverlay;
    protected _onPrerenderBound: () => void;
    protected init(options?: OPTIONS): void;
    findItem(value: VALUE): DMenuItem<VALUE> | null;
    protected getType(): string;
    getContext(): DMenuContext | null;
    getCloseable(): Closeable | null;
    open(owner: DBase<any, any>, closeable?: Closeable | null, context?: DMenuContext | null): this;
    protected onPrerender(): void;
    close(): this;
    onKeyDown(e: KeyboardEvent): boolean;
    protected containsGlobalPoint(point: Point): boolean;
}
