import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogDate } from "../../d-dialog-date";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
export declare class DThemeWhiteDialogDate extends DThemeWhiteDialogCommand implements DThemeDialogDate {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
