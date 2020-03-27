import { DButtonSelect, DThemeButtonSelect } from "../../d-button-select";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkButtonSelect extends DThemeDarkButton implements DThemeButtonSelect {
    getTextFormatter(): (value: unknown | null, caller: DButtonSelect) => string;
    newTextValue(): unknown | null;
}
