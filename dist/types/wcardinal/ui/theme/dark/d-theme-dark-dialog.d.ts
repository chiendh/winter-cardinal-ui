import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialog } from "../../d-dialog";
import { DDialogCloseOn } from "../../d-dialog-close-on";
import { DShadow } from "../../d-shadow";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkDialog extends DThemeDarkBase implements DThemeDialog {
    closeOn(): DDialogCloseOn;
    getBackgroundColor(): number;
    getBorderColor(state: DBaseState): number | null;
    getPaddingLeft(): number;
    getPaddingTop(): number;
    getPaddingRight(): number;
    getPaddingBottom(): number;
    getX(): DCoordinatePosition;
    getY(): DCoordinatePosition;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getShadow(): DShadow | null;
    getInteractive(): DBaseInteractive;
}
