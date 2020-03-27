import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogTime } from "../../d-dialog-time";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";
export declare class DThemeDarkDialogTime extends DThemeDarkDialogCommand implements DThemeDialogTime {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
