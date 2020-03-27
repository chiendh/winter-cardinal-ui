import { Container, DisplayObject } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DExpandableHeaderOptions } from "./d-expandable-header";
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
export interface DExpandableOptions<THEME extends DThemeExpandable = DThemeExpandable> extends DLayoutVerticalOptions<THEME> {
    header?: DisplayObject | DExpandableHeaderOptions;
    body: Container;
}
export interface DThemeExpandable extends DThemeLayoutVertical {
}
export declare class DExpandable<THEME extends DThemeExpandable = DThemeExpandable, OPTIONS extends DExpandableOptions<THEME> = DExpandableOptions<THEME>> extends DLayoutVertical<THEME, OPTIONS> {
    protected _header: DisplayObject;
    protected _body: Container;
    protected init(options: OPTIONS): void;
    protected toHeader(theme: THEME, options?: OPTIONS): DisplayObject;
    protected newHeader(theme: THEME, options?: DExpandableHeaderOptions): DisplayObject;
    protected toBody(theme: THEME, options: OPTIONS): Container;
    open(): void;
    close(): void;
    toggle(): void;
    protected onActivated(): void;
    protected onDeactivated(): void;
    protected onStateChange(newState: DBaseState, oldState: DBaseState): void;
    protected getType(): string;
}
