import { DInputNumber } from "../../d-input-number";
import { DThemeInputReal } from "../../d-input-real";
import { DThemeDarkInputNumber } from "./d-theme-dark-input-number";
export declare class DThemeDarkInputReal extends DThemeDarkInputNumber implements DThemeInputReal {
    getStep(): number | null;
    getEditingUnformatter(): (text: string, caller: DInputNumber) => number;
}
