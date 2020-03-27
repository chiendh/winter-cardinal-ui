import { DBaseState } from "../../d-base-state";
import { DThemeDropdown } from "../../d-dropdown";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkDropdownBase } from "./d-theme-dark-dropdown-base";
export declare class DThemeDarkDropdown extends DThemeDarkDropdownBase<string> implements DThemeDropdown {
    newTextValue(): DStateAwareOrValueMightBe<string>;
    getTextValue(state: DBaseState): string;
}
