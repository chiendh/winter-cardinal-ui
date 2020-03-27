import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DTableBodyCellIndex, DThemeTableBodyCellIndex } from "../../d-table-body-cell-index";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
export declare class DThemeWhiteTableBodyCellIndex extends DThemeWhiteImageBase implements DThemeTableBodyCellIndex {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getTextFormatter(): (value: number, caller: DTableBodyCellIndex) => string;
    getTextValue(state: DBaseState): number;
    newTextValue(): number;
}
