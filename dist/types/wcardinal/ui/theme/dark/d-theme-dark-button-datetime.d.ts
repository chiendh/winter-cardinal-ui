import { DButtonDatetime, DThemeButtonDatetime } from "../../d-button-datetime";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkButtonDatetime extends DThemeDarkButton implements DThemeButtonDatetime {
    getTextFormatter(): (value: Date, caller: DButtonDatetime) => string;
    newTextValue(): Date;
}
