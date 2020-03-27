import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableHeader } from "../../d-table-header";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";
export declare class DThemeWhiteTableHeader extends DThemeWhiteTableRow implements DThemeTableHeader {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
