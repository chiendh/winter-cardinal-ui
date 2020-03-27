import { DButtonTime, DThemeButtonTime } from "../../d-button-time";
import { DThemeWhiteButton } from "./d-theme-white-button";
export declare class DThemeWhiteButtonTime extends DThemeWhiteButton implements DThemeButtonTime {
    getTextFormatter(): (value: Date, caller: DButtonTime) => string;
    newTextValue(): Date;
}
