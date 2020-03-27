import { DThemeInputInteger } from "../../d-input-integer";
import { DInputNumber } from "../../d-input-number";
import { DThemeDarkInputNumber } from "./d-theme-dark-input-number";
export declare class DThemeDarkInputInteger extends DThemeDarkInputNumber implements DThemeInputInteger {
    getEditingUnformatter(): (text: string, caller: DInputNumber) => number;
}
