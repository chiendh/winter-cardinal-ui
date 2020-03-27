import { DButtonDate, DThemeButtonDate } from "../../d-button-date";
import { DThemeWhiteButton } from "./d-theme-white-button";
export declare class DThemeWhiteButtonDate extends DThemeWhiteButton implements DThemeButtonDate {
    getTextFormatter(): (value: Date, caller: DButtonDate) => string;
    newTextValue(): Date;
}
