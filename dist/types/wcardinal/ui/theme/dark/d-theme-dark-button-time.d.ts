import { DButtonTime, DThemeButtonTime } from "../../d-button-time";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkButtonTime extends DThemeDarkButton implements DThemeButtonTime {
    getTextFormatter(): (value: Date, caller: DButtonTime) => string;
    newTextValue(): Date;
}
