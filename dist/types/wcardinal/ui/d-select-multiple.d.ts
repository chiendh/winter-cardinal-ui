import { DDropdownBase, DDropdownBaseOnOptions, DDropdownBaseOptions, DThemeDropdownBase } from "./d-dropdown-base";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
/**
 * Mappings of event names and handlers.
 */
export interface DSelectMultipleOnOptions<VALUE> extends DDropdownBaseOnOptions<VALUE, DMenuItem<VALUE> | null> {
    /**
     * Called when a menu item is selected.
     *
     * @param value a value of a selected menu item
     * @param item a selected menu item
     * @param self an event emitter
     */
    menuselect?: (value: VALUE, item: DMenuItem<VALUE>, self: any) => void;
    /**
     * Called when the selection is changed.
     *
     * @param newValues new selected values
     * @param oldValues old selected values
     * @param items selected items
     * @param self an event emitter
     */
    change?: (newValues: VALUE[], oldValues: VALUE[], items: Array<DMenuItem<VALUE>>, self: any) => void;
}
/**
 * DSelect options.
 */
export interface DSelectMultipleOptions<VALUE = unknown, THEME extends DThemeSelectMultiple = DThemeSelectMultiple> extends DDropdownBaseOptions<VALUE, Array<DMenuItem<VALUE>>, THEME> {
    /**
     * A default values.
     */
    values?: VALUE[];
    on?: DSelectMultipleOnOptions<VALUE>;
}
export interface DThemeSelectMultiple extends DThemeDropdownBase<Array<DMenuItem<any>>> {
}
export declare class DSelectMultiple<VALUE = unknown, THEME extends DThemeSelectMultiple = DThemeSelectMultiple, OPTIONS extends DSelectMultipleOptions<VALUE, THEME> = DSelectMultipleOptions<VALUE, THEME>> extends DDropdownBase<VALUE, Array<DMenuItem<VALUE>>, THEME, OPTIONS> {
    protected _values: VALUE[];
    protected _onSelectedBound: (value: VALUE, child: DMenuItem<VALUE>) => void;
    protected _onClosedBound: () => void;
    constructor(options?: OPTIONS);
    protected init(options?: OPTIONS): void;
    protected onSelected(newValues: VALUE[], oldValues: VALUE[], items: Array<DMenuItem<VALUE>>, emit: boolean): void;
    protected onClosed(): void;
    start(): void;
    /**
     * Returns a selected value or null.
     */
    get values(): VALUE[];
    /**
     * Sets to the specified value.
     */
    set values(values: VALUE[]);
    protected isSameValues(a: VALUE[], b: VALUE[]): boolean;
    protected updateMenuItems(menu: DMenu<VALUE>, oldValues: VALUE[], addedValue?: VALUE, removedValue?: VALUE, newValues?: VALUE[], newItems?: Array<DMenuItem<VALUE>>): void;
    protected getType(): string;
}
