import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogColor } from "../../d-dialog-color";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
export declare class DThemeWhiteDialogColor extends DThemeWhiteDialogCommand implements DThemeDialogColor {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
