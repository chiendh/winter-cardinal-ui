import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeButtonRadioRight } from "../../d-button-radio-right";
import { DThemeWhiteButtonRadio } from "./d-theme-white-button-radio";
export declare class DThemeWhiteButtonRadioRight extends DThemeWhiteButtonRadio implements DThemeButtonRadioRight {
    getImageAlignWith(): DAlignWith;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageMarginHorizontal(): number;
    getTextAlignHorizontal(): DAlignHorizontal;
}
