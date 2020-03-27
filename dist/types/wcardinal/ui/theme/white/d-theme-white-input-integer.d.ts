import { DThemeInputInteger } from "../../d-input-integer";
import { DInputNumber } from "../../d-input-number";
import { DThemeWhiteInputNumber } from "./d-theme-white-input-number";
export declare class DThemeWhiteInputInteger extends DThemeWhiteInputNumber implements DThemeInputInteger {
    getEditingUnformatter(): (text: string, caller: DInputNumber) => number;
}
