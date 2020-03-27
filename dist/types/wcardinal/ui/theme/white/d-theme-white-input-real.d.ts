import { DInputNumber } from "../../d-input-number";
import { DThemeInputReal } from "../../d-input-real";
import { DThemeWhiteInputNumber } from "./d-theme-white-input-number";
export declare class DThemeWhiteInputReal extends DThemeWhiteInputNumber implements DThemeInputReal {
    getStep(): number | null;
    getEditingUnformatter(): (text: string, caller: DInputNumber) => number;
}
