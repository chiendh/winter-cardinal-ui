import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DTableBodyCellTime, DThemeTableBodyCellTime } from "../../d-table-body-cell-time";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkTableBodyCellTime extends DThemeDarkButton implements DThemeTableBodyCellTime {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
    getTextFormatter(): (value: Date, caller: DTableBodyCellTime) => string;
    getTextValue(state: DBaseState): Date;
    newTextValue(): Date;
}
