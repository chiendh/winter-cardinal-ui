import { DBaseState } from "../../d-base-state";
import { DMenuItem } from "../../d-menu-item";
import { DThemeSelectMultiple } from "../../d-select-multiple";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkDropdownBase } from "./d-theme-dark-dropdown-base";
export declare class DThemeDarkSelectMultiple extends DThemeDarkDropdownBase<Array<DMenuItem<any>>> implements DThemeSelectMultiple {
    newTextValue(): DStateAwareOrValueMightBe<Array<DMenuItem<any>>>;
    getTextValue(state: DBaseState): Array<DMenuItem<any>>;
    getTextFormatter(): (value: any, caller: any) => string;
}
