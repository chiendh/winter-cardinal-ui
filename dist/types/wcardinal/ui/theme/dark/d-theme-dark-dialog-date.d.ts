import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogDate } from "../../d-dialog-date";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";
export declare class DThemeDarkDialogDate extends DThemeDarkDialogCommand implements DThemeDialogDate {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
