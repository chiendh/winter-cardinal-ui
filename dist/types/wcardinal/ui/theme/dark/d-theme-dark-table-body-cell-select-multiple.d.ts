import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellSelectMultiple } from "../../d-table-body-cell-select-multiple";
import { DThemeDarkSelectMultiple } from "./d-theme-dark-select-multiple";
export declare class DThemeDarkTableBodyCellSelectMultiple extends DThemeDarkSelectMultiple implements DThemeTableBodyCellSelectMultiple {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
    getSecondaryImageSource(state: DBaseState): Texture | DisplayObject | null;
}
