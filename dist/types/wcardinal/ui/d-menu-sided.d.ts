import { DisplayObject } from "pixi.js";
import { DBase, DBaseOptions } from "./d-base";
import { Closeable, DMenuContext } from "./d-menu-context";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuSidedContentOptions } from "./d-menu-sided-content";
import { DMenuSidedSelection, DMenuSidedSelectionOptions } from "./d-menu-sided-selection";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
export interface DMenuSidedOptions<VALUE = unknown, THEME extends DThemeMenuSided = DThemeMenuSided, CONTENT_OPTIONS extends DBaseOptions = DMenuSidedContentOptions> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
    items?: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>;
    sticky?: boolean;
    selection?: DMenuSidedSelectionOptions | DMenuSidedSelection;
}
export interface DThemeMenuSided extends DThemePane {
}
export declare class DMenuSided<VALUE = unknown, THEME extends DThemeMenuSided = DThemeMenuSided, CONTENT_OPTIONS extends DMenuSidedContentOptions = DMenuSidedContentOptions, OPTIONS extends DMenuSidedOptions<VALUE, THEME, CONTENT_OPTIONS> = DMenuSidedOptions<VALUE, THEME, CONTENT_OPTIONS>> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
    protected _context: DMenuContext | null;
    protected _selection: DMenuSidedSelection;
    protected init(options?: OPTIONS): void;
    protected newSelection(options?: DMenuSidedSelectionOptions): DMenuSidedSelection;
    protected onChildrenDirty(): void;
    protected newItems(items: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>, sticky: boolean): void;
    protected newContent(options?: CONTENT_OPTIONS): DBase;
    get selection(): DMenuSidedSelection;
    getContext(): DMenuContext | null;
    getCloseable(): Closeable | null;
    open(): void;
    close(): void;
    protected getType(): string;
}
