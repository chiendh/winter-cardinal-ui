import { DBaseState } from "./d-base-state";
import { DButtonBase, DButtonBaseOnOptions, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
import { DMenu, DMenuOptions, DThemeMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
export interface DDropdownBaseOnOptions<VALUE, TEXT_VALUE> extends DButtonBaseOnOptions<VALUE> {
}
/**
 * Dropdown base options.
 */
export interface DDropdownBaseOptions<VALUE = unknown, TEXT_VALUE = string, THEME extends DThemeDropdownBase<TEXT_VALUE> = DThemeDropdownBase<TEXT_VALUE>> extends DButtonBaseOptions<TEXT_VALUE, THEME> {
    /**
     * Menu options.
     */
    menu?: DMenuOptions<VALUE> | DMenu<VALUE>;
    on?: DDropdownBaseOnOptions<VALUE, TEXT_VALUE>;
}
/**
 * A Dropdown base theme.
 */
export interface DThemeDropdownBase<TEXT_VALUE> extends DThemeButtonBase {
    getTextFormatter(): (value: TEXT_VALUE, caller: DDropdownBase) => string;
    getTextValue(state: DBaseState): TEXT_VALUE;
    newTextValue(): DStateAwareOrValueMightBe<TEXT_VALUE>;
}
export declare class DDropdownBase<VALUE = unknown, TEXT_VALUE = string, THEME extends DThemeDropdownBase<TEXT_VALUE> = DThemeDropdownBase<TEXT_VALUE>, OPTIONS extends DDropdownBaseOptions<VALUE, TEXT_VALUE, THEME> = DDropdownBaseOptions<VALUE, TEXT_VALUE, THEME>> extends DButtonBase<TEXT_VALUE, THEME, OPTIONS> {
    protected _menu?: DMenu<VALUE>;
    constructor(options?: OPTIONS);
    protected toItemText(item: DMenuItem<VALUE> | null): string | null;
    protected toMenu(theme: THEME, options?: OPTIONS): DMenu<VALUE>;
    protected toMenuOptions(theme: THEME, options?: DMenuOptions<VALUE>): DMenuOptions<VALUE, DThemeMenu>;
    get menu(): DMenu<VALUE>;
    protected getType(): string;
    start(): void;
    close(): void;
}
