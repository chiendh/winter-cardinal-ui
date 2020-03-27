import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogDatetime } from "../../d-dialog-datetime";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
export declare class DThemeWhiteDialogDatetime extends DThemeWhiteDialogCommand implements DThemeDialogDatetime {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
