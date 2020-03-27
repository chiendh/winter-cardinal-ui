import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogCommand } from "../../d-dialog-command";
import { DThemeDarkDialog } from "./d-theme-dark-dialog";
export declare class DThemeDarkDialogCommand extends DThemeDarkDialog implements DThemeDialogCommand {
    getOk(): string | null;
    getCancel(): string | null;
    getLayoutX(): DCoordinatePosition;
    getLayoutY(): DCoordinatePosition;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
