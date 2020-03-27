import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyCellInputTreeMarker } from "../../d-table-body-cell-input-tree-marker";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
export declare class DThemeWhiteTableBodyCellInputTreeMarker extends DThemeWhiteButtonBase implements DThemeTableBodyCellInputTreeMarker {
    getHeight(): DCoordinateSize;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getOutlineColor(state: DBaseState): number | null;
    getCursor(): string;
    getImageAlignWith(): DAlignWith;
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getImageTintColor(state: DBaseState): number | null;
}
