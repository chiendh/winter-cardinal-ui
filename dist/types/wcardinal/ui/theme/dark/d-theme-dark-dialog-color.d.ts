import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogColor } from "../../d-dialog-color";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";
export declare class DThemeDarkDialogColor extends DThemeDarkDialogCommand implements DThemeDialogColor {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
