import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBody } from "../../d-table-body";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkTableBody extends DThemeDarkBase implements DThemeTableBody {
    getWidth(): DCoordinateSize;
    getCornerMask(): DCornerMask;
    getBorderColor(state: DBaseState): number | null;
    getRowHeight(): number;
    getInteractive(): DBaseInteractive;
}
