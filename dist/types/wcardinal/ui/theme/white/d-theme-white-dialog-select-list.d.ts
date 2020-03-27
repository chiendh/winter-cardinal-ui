import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecList } from "../../d-dialog-select-list";
import { DThemeWhiteList } from "./d-theme-white-list";
export declare class DThemeWhiteDialogSelectList extends DThemeWhiteList implements DThemeDialogSelecList {
    getBackgroundColor(): number | null;
    getBorderColor(): number | null;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
}
