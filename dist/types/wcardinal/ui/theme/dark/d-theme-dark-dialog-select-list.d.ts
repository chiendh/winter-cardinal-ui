import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecList } from "../../d-dialog-select-list";
import { DThemeDarkList } from "./d-theme-dark-list";
export declare class DThemeDarkDialogSelectList extends DThemeDarkList implements DThemeDialogSelecList {
    getBackgroundColor(): number | null;
    getBorderColor(): number | null;
    getHeight(): DCoordinateSize;
    getCornerMask(): DCornerMask;
}
