import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeButtonCheckRight } from "../../d-button-check-right";
import { DThemeWhiteButtonCheck } from "./d-theme-white-button-check";
export declare class DThemeWhiteButtonCheckRight extends DThemeWhiteButtonCheck implements DThemeButtonCheckRight {
    getImageAlignWith(): DAlignWith;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageMarginHorizontal(): number;
    getTextAlignHorizontal(): DAlignHorizontal;
}
