import { Container, DisplayObject } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
import { DMenuItemExpandableBodyOptions } from "./d-menu-item-expandable-body";
import { DMenuItemExpandableHeaderOptions } from "./d-menu-item-expandable-header";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
export interface DMenuItemExpandableOptions<VALUE = unknown, THEME extends DThemeMenuItemExpandable = DThemeMenuItemExpandable> extends DLayoutVerticalOptions<THEME> {
    header: DisplayObject | DMenuItemExpandableHeaderOptions<VALUE>;
    body?: Container | DMenuItemExpandableBodyOptions;
    items?: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>;
    sticky?: boolean;
}
export interface DThemeMenuItemExpandable extends DThemeLayoutVertical {
}
export declare class DMenuItemExpandable<VALUE = unknown, THEME extends DThemeMenuItemExpandable = DThemeMenuItemExpandable, OPTIONS extends DMenuItemExpandableOptions<VALUE, THEME> = DMenuItemExpandableOptions<VALUE, THEME>> extends DLayoutVertical<THEME, OPTIONS> {
    protected _header: DisplayObject;
    protected _body: DisplayObject;
    protected init(options?: OPTIONS): void;
    protected newItems(body: Container, sticky: boolean, theme: THEME, options: OPTIONS | undefined): void;
    protected toHeader(theme: THEME, options?: OPTIONS): DisplayObject;
    protected newHeader(theme: THEME, options?: DMenuItemExpandableHeaderOptions<VALUE>): DisplayObject;
    protected toBody(theme: THEME, options?: OPTIONS): Container;
    protected newBody(theme: THEME, options?: DMenuItemExpandableBodyOptions): Container;
    open(): void;
    close(): void;
    toggle(): void;
    protected onActivated(): void;
    protected onDeactivated(): void;
    protected onStateChange(newState: DBaseState, oldState: DBaseState): void;
    protected getType(): string;
    static isCompatible<VALUE>(options: DMenuItemOptionsUnion<VALUE>): options is DMenuItemExpandableOptions<VALUE>;
}
