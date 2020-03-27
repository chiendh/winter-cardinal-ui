import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellText } from "../../d-table-body-cell-text";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
export declare class DThemeDarkTableBodyCellText extends DThemeDarkImageBase implements DThemeTableBodyCellText {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
    getImageTintColor(state: DBaseState): number | null;
    getPaddingLeft(): number;
    getPaddingRight(): number;
}
