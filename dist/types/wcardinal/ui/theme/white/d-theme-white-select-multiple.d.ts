import { DBaseState } from "../../d-base-state";
import { DMenuItem } from "../../d-menu-item";
import { DThemeSelectMultiple } from "../../d-select-multiple";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";
export declare class DThemeWhiteSelectMultiple extends DThemeWhiteDropdownBase<Array<DMenuItem<any>>> implements DThemeSelectMultiple {
    newTextValue(): DStateAwareOrValueMightBe<Array<DMenuItem<any>>>;
    getTextValue(state: DBaseState): Array<DMenuItem<any>>;
    getTextFormatter(): (value: any, caller: any) => string;
}
