import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTreeItemTextAndImage } from "../../d-tree-item-text-and-image";
import { DThemeWhiteImage } from "./d-theme-white-image";
export declare class DThemeWhiteTreeItemTextAndImage extends DThemeWhiteImage implements DThemeTreeItemTextAndImage {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCornerMask(): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
