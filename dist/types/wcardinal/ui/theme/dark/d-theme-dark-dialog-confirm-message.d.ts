import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogConfirmMessage } from "../../d-dialog-confirm-message";
import { DThemeDarkImage } from "./d-theme-dark-image";
export declare class DThemeDarkDialogConfirmMessage extends DThemeDarkImage implements DThemeDialogConfirmMessage {
    getWidth(): DCoordinateSize;
    getHeight(): number;
    getTextAlignHorizontal(): DAlignHorizontal;
}
