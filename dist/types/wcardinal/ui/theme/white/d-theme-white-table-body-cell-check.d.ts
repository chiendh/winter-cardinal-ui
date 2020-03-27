import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellCheck } from "../../d-table-body-cell-check";
import { DThemeWhiteButtonCheck } from "./d-theme-white-button-check";
export declare class DThemeWhiteTableBodyCellCheck extends DThemeWhiteButtonCheck implements DThemeTableBodyCellCheck {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getImageTintColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
}
