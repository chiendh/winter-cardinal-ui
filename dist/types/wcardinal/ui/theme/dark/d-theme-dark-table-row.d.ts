import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeTableRow } from "../../d-table-row";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";
export declare class DThemeDarkTableRow extends DThemeDarkLayoutHorizontal implements DThemeTableRow {
    getBorderColor(state: DBaseState): number | null;
    getCornerMask(): number;
    getMargin(): number;
    getInteractive(): DBaseInteractive;
}
