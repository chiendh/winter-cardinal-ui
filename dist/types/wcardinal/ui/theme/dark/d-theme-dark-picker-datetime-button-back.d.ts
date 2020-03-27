import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonBack } from "../../d-picker-datetime-button-back";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
export declare class DThemeDarkPickerDatetimeButtonBack extends DThemeDarkButtonAmbient implements DThemePickerDatetimeButtonBack {
    getWidth(): DCoordinateSize;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getColor(): number;
}
