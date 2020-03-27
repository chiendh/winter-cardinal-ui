import { DisplayObject, interaction, Texture } from "pixi.js";
import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DTreeItemOptions } from "./d-tree-item";
import { DTreeSelection } from "./d-tree-selection";
export declare enum DTreeAddedItemPosition {
    BEFORE = 0,
    AFTER = 1
}
export interface DTreeOptions<THEME extends DThemeTree = DThemeTree, CONTENT_OPTIONS extends DBaseOptions = DContentOptions> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
    value: DTreeItemRawData[];
}
export interface DThemeTree extends DThemePane {
}
export interface DTreeItemRawData {
    text: string;
    image?: DisplayObject | Texture | null;
    children: DTreeItemRawData[];
}
export interface DTreeAddedItemOptions {
    item: DTreeItemRawData;
    sibling: DTreeItemRawData;
    positon: DTreeAddedItemPosition;
}
export declare class DTree<THEME extends DThemeTree = DThemeTree, CONTENT_OPTIONS extends DBaseOptions = DContentOptions, OPTIONS extends DTreeOptions<THEME, CONTENT_OPTIONS> = DTreeOptions<THEME, CONTENT_OPTIONS>> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
    protected _itemOptions: WeakMap<DTreeItemRawData, DTreeItemOptions>;
    protected _itemOptionsShowable: DTreeItemOptions[];
    protected _selection: DTreeSelection;
    protected _value: DTreeItemRawData[];
    protected _itemIndexMappedStart: number;
    protected _itemIndexMappedEnd: number;
    private _itemY;
    private _itemHeight;
    private _removeItem;
    private _addItemOptions;
    protected init(options?: OPTIONS): void;
    protected update(): void;
    protected reload(expandAll?: boolean): void;
    /**
     * Getter method to access raw data.
     *
     * @returns raw data.
     */
    get value(): DTreeItemRawData[];
    /**
     * Toggle an tree parent item,
     * Expand an collapsed tree item or collapse an expanded item.
     *
     * @param item Reference data of item want to toggle in “value” array.
     */
    toggle(item: DTreeItemRawData): void;
    /**
     * Expand a collapsed tree item.
     *
     * @param item Reference data of item want to expand in “value” array.
     */
    expand(item: DTreeItemRawData): void;
    /**
     * Collapse an expanded tree item.
     *
     * @param item Reference data of item want to collapse in “value” array.
     */
    collapse(item: DTreeItemRawData): void;
    /**
     * Expand all tree item.
     */
    expandAll(): void;
    /**
     * Collapse all tree item.
     */
    collapseAll(): void;
    /**
     * Check if an item is collapsed.
     *
     * @param item Reference data of item want to check in “value” array.
     *
     * @returns collapse status of the item.
     */
    isCollapsed(item: DTreeItemRawData): boolean | undefined;
    /**
     * Check if an item is expanded.
     *
     * @param item Reference data of item want to check in “value” array.
     *
     * @returns expand status of the item.
     */
    isExpanded(item: DTreeItemRawData): boolean | undefined;
    /**
     * Clear all tree item.
     */
    clear(): void;
    /**
     * Remove a tree item
     *
     * @param item Reference data of item want to remove in “value” array.
     */
    remove(item: DTreeItemRawData): void;
    /**
     * Add a tree item
     *
     * @param item data of new item want to add to tree.
     * @param parent Reference data of parent item will contain the adding item.
     * If the parent is undefined, the item will be added at the top level.
     * If the parent is not undefined, the item will be inserted as a child of the given parent item.
     */
    add(item: DTreeItemRawData, parent?: DTreeItemRawData): void;
    /**
     * Add the given item will be inserted before the given sibling item.
     *
     * @param item data of new item want to add to tree.
     * @param sibling Reference data of parent item will be using like anchor to add new item.
     */
    addBefore(item: DTreeItemRawData, sibling: DTreeItemRawData): void;
    /**
     * Add the given item will be inserted after the given sibling item.
     *
     * @param item data of new item want to add to tree.
     * @param sibling Reference data of parent item will be using like anchor to add new item.
     */
    addAfter(item: DTreeItemRawData, sibling: DTreeItemRawData): void;
    /**
     * Iterate over all the items.
     *
     * @param iteratee  boolean function. If the iteratee explicitly returns false, an iteration stops.
     * @param item data of browsed item.
     */
    each(iteratee: (item: DTreeItemRawData) => boolean): void;
    /**
     * The recursive function performs item browsing in the tree.
     */
    private inOrder;
    /**
     * Get selection object.
     * @returns selection.
     */
    get selection(): DTreeSelection;
    private updateData;
    protected onSelect(item: DTreeItemRawData, e: interaction.InteractionEvent): void;
    updateActiveState(): void;
    protected getType(): string;
}
