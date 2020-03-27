import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeButtonRadioRight } from "../../d-button-radio-right";
import { DThemeDarkButtonRadio } from "./d-theme-dark-button-radio";
export declare class DThemeDarkButtonRadioRight extends DThemeDarkButtonRadio implements DThemeButtonRadioRight {
    getImageAlignWith(): DAlignWith;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageMarginHorizontal(): number;
    getTextAlignHorizontal(): DAlignHorizontal;
}
