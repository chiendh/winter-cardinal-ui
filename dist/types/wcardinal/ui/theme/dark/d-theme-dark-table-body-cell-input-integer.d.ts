import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellInputInteger } from "../../d-table-body-cell-input-integer";
import { DThemeDarkInputInteger } from "./d-theme-dark-input-integer";
export declare class DThemeDarkTableBodyCellInputInteger extends DThemeDarkInputInteger implements DThemeTableBodyCellInputInteger {
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
