import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogCommand } from "../../d-dialog-command";
import { DThemeWhiteDialog } from "./d-theme-white-dialog";
export declare class DThemeWhiteDialogCommand extends DThemeWhiteDialog implements DThemeDialogCommand {
    getOk(): string | null;
    getCancel(): string | null;
    getLayoutX(): DCoordinatePosition;
    getLayoutY(): DCoordinatePosition;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
