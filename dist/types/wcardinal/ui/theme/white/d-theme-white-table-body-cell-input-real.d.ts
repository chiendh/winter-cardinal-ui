import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellInputReal } from "../../d-table-body-cell-input-real";
import { DThemeWhiteInputReal } from "./d-theme-white-input-real";
export declare class DThemeWhiteTableBodyCellInputReal extends DThemeWhiteInputReal implements DThemeTableBodyCellInputReal {
    getTextAlignHorizontal(): DAlignHorizontal;
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
    getOutlineColor(state: DBaseState): number | null;
    getOutlineAlign(state: DBaseState): number;
}
