import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyCellInputTreeInput } from "../../d-table-body-cell-input-tree-input";
import { DThemeWhiteInputText } from "./d-theme-white-input-text";
export declare class DThemeWhiteTableBodyCellInputTreeInput extends DThemeWhiteInputText implements DThemeTableBodyCellInputTreeInput {
    getHeight(): DCoordinateSize;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getOutlineColor(state: DBaseState): number | null;
    getPaddingLeft(): number;
}
