import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogColorGradient } from "../../d-dialog-color-gradient";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
export declare class DThemeWhiteDialogColorGradient extends DThemeWhiteDialogCommand implements DThemeDialogColorGradient {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
