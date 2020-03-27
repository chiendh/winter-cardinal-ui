import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeTableRow } from "../../d-table-row";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";
export declare class DThemeWhiteTableRow extends DThemeWhiteLayoutHorizontal implements DThemeTableRow {
    getBorderColor(state: DBaseState): number | null;
    getCornerMask(): number;
    getMargin(): number;
    getInteractive(): DBaseInteractive;
}
