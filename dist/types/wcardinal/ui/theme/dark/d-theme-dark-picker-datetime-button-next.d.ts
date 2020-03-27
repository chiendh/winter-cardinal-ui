import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonNext } from "../../d-picker-datetime-button-next";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
export declare class DThemeDarkPickerDatetimeButtonNext extends DThemeDarkButtonAmbient implements DThemePickerDatetimeButtonNext {
    getWidth(): DCoordinateSize;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getColor(): number;
}
