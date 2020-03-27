import { DDropdownBase, DDropdownBaseOnOptions, DDropdownBaseOptions, DThemeDropdownBase } from "./d-dropdown-base";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
export interface DSelectOnOptions<VALUE> extends DDropdownBaseOnOptions<VALUE, DMenuItem<VALUE> | null> {
    /**
     * Called when a selection is changed.
     */
    change?: (newValue: VALUE | null, oldValue: VALUE | null, item: DMenuItem<VALUE> | null, self: any) => void;
}
/**
 * DSelect options.
 */
export interface DSelectOptions<VALUE = unknown, THEME extends DThemeSelect = DThemeSelect> extends DDropdownBaseOptions<VALUE, DMenuItem<VALUE> | null, THEME> {
    /**
     * A default value.
     */
    value?: VALUE;
    on?: DSelectOnOptions<VALUE>;
}
export interface DThemeSelect extends DThemeDropdownBase<DMenuItem<any> | null> {
}
export declare class DSelect<VALUE = unknown, THEME extends DThemeSelect = DThemeSelect, OPTIONS extends DSelectOptions<VALUE, THEME> = DSelectOptions<VALUE, THEME>> extends DDropdownBase<VALUE, DMenuItem<VALUE> | null, THEME, OPTIONS> {
    protected _value: VALUE | null;
    protected _onSelectedBound: (value: VALUE, child: DMenuItem<VALUE>) => void;
    protected _onClosedBound: () => void;
    constructor(options?: OPTIONS);
    protected init(options?: OPTIONS): void;
    protected onSelected(newValue: VALUE | null, item: DMenuItem<VALUE> | null, emit: boolean): void;
    protected onClosed(): void;
    start(): void;
    protected findMenuItem(menu: DMenu<VALUE>, value: VALUE | null): DMenuItem<VALUE> | null;
    /**
     * Returns a selected value or null.
     */
    get value(): VALUE | null;
    /**
     * Sets to the specified value.
     */
    set value(value: VALUE | null);
    protected getType(): string;
}
