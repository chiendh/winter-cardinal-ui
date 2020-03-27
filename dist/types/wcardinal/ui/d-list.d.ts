import { DisplayObject } from "pixi.js";
import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DListSelection, DListSelectionOptions } from "./d-list-selection";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
export interface DListOptions<THEME extends DThemeList = DThemeList, CONTENT_OPTIONS extends DBaseOptions = DContentOptions> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
    selection?: DListSelectionOptions | DListSelection;
}
export interface DThemeList extends DThemePane {
}
export declare class DList<THEME extends DThemeList = DThemeList, CONTENT_OPTIONS extends DBaseOptions = DContentOptions, OPTIONS extends DListOptions<THEME, CONTENT_OPTIONS> = DListOptions<THEME, CONTENT_OPTIONS>> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
    protected _selection: DListSelection;
    protected init(options?: OPTIONS): void;
    protected newSelection(options?: DListSelectionOptions): DListSelection;
    protected onChildrenDirty(): void;
    get selection(): DListSelection;
    protected findItem(target: DisplayObject | null): DisplayObject | null;
    onRefit(): void;
    protected updateChildPosition(): void;
    protected updateChildVisibility(): void;
    protected onContentChanged(): void;
    protected getType(): string;
}
