import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DTableBodyCellDatetime, DThemeTableBodyCellDatetime } from "../../d-table-body-cell-datetime";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkTableBodyCellDatetime extends DThemeDarkButton implements DThemeTableBodyCellDatetime {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
    getTextFormatter(): (value: Date, caller: DTableBodyCellDatetime) => string;
    getTextValue(state: DBaseState): Date;
    newTextValue(): Date;
}
