import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogConfirmMessage } from "../../d-dialog-confirm-message";
import { DThemeWhiteImage } from "./d-theme-white-image";
export declare class DThemeWhiteDialogConfirmMessage extends DThemeWhiteImage implements DThemeDialogConfirmMessage {
    getWidth(): DCoordinateSize;
    getHeight(): number;
    getTextAlignHorizontal(): DAlignHorizontal;
}
