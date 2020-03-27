import { DBaseState } from "../../d-base-state";
import { DThemeInputText } from "../../d-input-text";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkInput } from "./d-theme-dark-input";
export declare class DThemeDarkInputText extends DThemeDarkInput implements DThemeInputText {
    newTextValue(): DStateAwareOrValueMightBe<string>;
    getTextValue(state: DBaseState): string;
}
