import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTreeItemToggleIcon } from "../../d-tree-item-toggle-icon";
import { DThemeDarkImage } from "./d-theme-dark-image";
export declare class DThemeDarkTreeItemToggleIcon extends DThemeDarkImage implements DThemeTreeItemToggleIcon {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCornerMask(): number;
    getImageTintColor(state: DBaseState): number | null;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
