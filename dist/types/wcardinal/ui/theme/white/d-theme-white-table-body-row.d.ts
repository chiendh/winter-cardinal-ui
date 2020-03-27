import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";
export declare class DThemeWhiteTableBodyRow extends DThemeWhiteTableRow implements DThemeTableBodyRow {
    BACKGROUND_COLOR_EVEN: number;
    BACKGROUND_COLOR_ODD: number;
    getBackgroundColor(state: DBaseState): number | null;
    getWidth(): DCoordinateSize;
}
