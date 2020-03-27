import { DBaseState } from "../../d-base-state";
import { DThemeInputText } from "../../d-input-text";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteInput } from "./d-theme-white-input";
export declare class DThemeWhiteInputText extends DThemeWhiteInput implements DThemeInputText {
    newTextValue(): DStateAwareOrValueMightBe<string>;
    getTextValue(state: DBaseState): string;
}
