import { DBaseState } from "../../d-base-state";
import { DMenuItem } from "../../d-menu-item";
import { DThemeSelect } from "../../d-select";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteDropdownBase } from "./d-theme-white-dropdown-base";
export declare class DThemeWhiteSelect extends DThemeWhiteDropdownBase<DMenuItem<any> | null> implements DThemeSelect {
    newTextValue(): DStateAwareOrValueMightBe<DMenuItem<any> | null>;
    getTextValue(state: DBaseState): DMenuItem<any> | null;
    getTextFormatter(): (value: any, caller: any) => string;
}
