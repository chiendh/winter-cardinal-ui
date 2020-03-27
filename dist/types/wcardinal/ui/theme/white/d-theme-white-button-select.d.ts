import { DButtonSelect, DThemeButtonSelect } from "../../d-button-select";
import { DThemeWhiteButton } from "./d-theme-white-button";
export declare class DThemeWhiteButtonSelect extends DThemeWhiteButton implements DThemeButtonSelect {
    getTextFormatter(): (value: unknown | null, caller: DButtonSelect) => string;
    newTextValue(): unknown | null;
}
