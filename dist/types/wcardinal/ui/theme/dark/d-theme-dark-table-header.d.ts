import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableHeader } from "../../d-table-header";
import { DThemeDarkTableRow } from "./d-theme-dark-table-row";
export declare class DThemeDarkTableHeader extends DThemeDarkTableRow implements DThemeTableHeader {
    COLOR: number;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
