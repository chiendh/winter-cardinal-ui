import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBody } from "../../d-table-body";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteTableBody extends DThemeWhiteBase implements DThemeTableBody {
    getWidth(): DCoordinateSize;
    getCornerMask(): DCornerMask;
    getBorderColor(state: DBaseState): number | null;
    getRowHeight(): number;
    getInteractive(): DBaseInteractive;
}
