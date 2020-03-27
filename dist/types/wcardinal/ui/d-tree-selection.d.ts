import { DTreeItemRawData } from "./d-tree";
export declare class DTreeSelection {
    protected _selection: DTreeItemRawData[];
    constructor();
    /**
     * Select an item.
     * Add item data to this._selection if it not exist in this._selection.
     *
     * @param item Reference data of item want to remove in “value” array.
     */
    add(item: DTreeItemRawData): void;
    /**
     * Un-select an item.
     * remove item data to this._selection if it exist in this._selection.
     *
     * @param item Reference data of item want to remove in “value” array.
     */
    remove(item: DTreeItemRawData): void;
    /**
     * Select/un-select an item.
     * If item data not exist in this._selection, add it to this._selection.
     * If item data exist in this._selection, remove it to this._selection.
     *
     * @param item Reference data of item want to remove in “value” array.
     */
    toggle(item: DTreeItemRawData): void;
    /**
     * Un-select all item.
     *
     */
    clear(): void;
    /**
     * Get selected item by index.
     *
     * @param index index of item in this._selection
     *
     * @returns  Reference data of selected item in “value” array.
     */
    get(index: number): DTreeItemRawData | null;
    /**
     * Check item is selected or not.
     *
     * @param item Reference data of item want to remove in “value” array.
     *
     * @returns selected state of checked item.
     */
    contains(item: DTreeItemRawData): boolean;
    /**
     * Get number of selected .
     *
     * @returns number of selected.
     */
    size(): number;
    /**
     * Iterate over selected items.
     *
     * @param iteratee  boolean function. If the iteratee explicitly returns false, an iteration stops.
     * @param item data of browsed item.
     */
    each(iteratee: (item: DTreeItemRawData) => boolean): void;
}
