import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DThemeDarkTableRow } from "./d-theme-dark-table-row";
export declare class DThemeDarkTableBodyRow extends DThemeDarkTableRow implements DThemeTableBodyRow {
    BACKGROUND_COLOR_EVEN: number;
    BACKGROUND_COLOR_ODD: number;
    COLOR_HOVERED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getWidth(): DCoordinateSize;
}
