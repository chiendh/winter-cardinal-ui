import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellColor } from "../../d-table-body-cell-color";
import { DThemeWhiteButtonColor } from "./d-theme-white-button-color";
export declare class DThemeWhiteTableBodyCellColor extends DThemeWhiteButtonColor implements DThemeTableBodyCellColor {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
}
