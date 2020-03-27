import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DThemeInputNumber } from "../../d-input-number";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteInput } from "./d-theme-white-input";
export declare class DThemeWhiteInputNumber extends DThemeWhiteInput implements DThemeInputNumber {
    getTextAlignHorizontal(): DAlignHorizontal;
    getStep(): number | null;
    getMin(): number | null;
    getMax(): number | null;
    newTextValue(): DStateAwareOrValueMightBe<number>;
    getTextValue(state: DBaseState): number;
}
