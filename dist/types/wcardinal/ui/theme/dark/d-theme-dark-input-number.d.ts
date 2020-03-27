import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DThemeInputNumber } from "../../d-input-number";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkInput } from "./d-theme-dark-input";
export declare class DThemeDarkInputNumber extends DThemeDarkInput implements DThemeInputNumber {
    getTextAlignHorizontal(): DAlignHorizontal;
    getStep(): number | null;
    getMin(): number | null;
    getMax(): number | null;
    newTextValue(): DStateAwareOrValueMightBe<number>;
    getTextValue(state: DBaseState): number;
}
