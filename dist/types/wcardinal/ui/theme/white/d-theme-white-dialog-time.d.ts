import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogTime } from "../../d-dialog-time";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
export declare class DThemeWhiteDialogTime extends DThemeWhiteDialogCommand implements DThemeDialogTime {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
