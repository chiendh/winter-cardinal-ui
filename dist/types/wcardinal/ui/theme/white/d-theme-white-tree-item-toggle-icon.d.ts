import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTreeItemToggleIcon } from "../../d-tree-item-toggle-icon";
import { DThemeWhiteImage } from "./d-theme-white-image";
export declare class DThemeWhiteTreeItemToggleIcon extends DThemeWhiteImage implements DThemeTreeItemToggleIcon {
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
