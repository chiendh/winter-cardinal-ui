import { DButtonDatetime, DThemeButtonDatetime } from "../../d-button-datetime";
import { DThemeWhiteButton } from "./d-theme-white-button";
export declare class DThemeWhiteButtonDatetime extends DThemeWhiteButton implements DThemeButtonDatetime {
    getTextFormatter(): (value: Date, caller: DButtonDatetime) => string;
    newTextValue(): Date;
}
