import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeButtonCheckRight } from "../../d-button-check-right";
import { DThemeDarkButtonCheck } from "./d-theme-dark-button-check";
export declare class DThemeDarkButtonCheckRight extends DThemeDarkButtonCheck implements DThemeButtonCheckRight {
    getImageAlignWith(): DAlignWith;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageMarginHorizontal(): number;
    getTextAlignHorizontal(): DAlignHorizontal;
}
