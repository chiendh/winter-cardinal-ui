import { DButtonDate, DThemeButtonDate } from "../../d-button-date";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkButtonDate extends DThemeDarkButton implements DThemeButtonDate {
    getTextFormatter(): (value: Date, caller: DButtonDate) => string;
    newTextValue(): Date;
}
