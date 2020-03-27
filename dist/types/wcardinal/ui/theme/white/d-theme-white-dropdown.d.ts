import { DBaseState } from "../../d-base-state";
import { DThemeDropdown } from "../../d-dropdown";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";
export declare class DThemeWhiteDropdown extends DThemeWhiteDropdownBase<string> implements DThemeDropdown {
    newTextValue(): DStateAwareOrValueMightBe<string>;
    getTextValue(state: DBaseState): string;
}
