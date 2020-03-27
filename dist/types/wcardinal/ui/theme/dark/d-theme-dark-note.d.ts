import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeNote } from "../../d-note";
import { DThemeDarkText } from "./d-theme-dark-text";
export declare class DThemeDarkNote extends DThemeDarkText implements DThemeNote {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getInteractive(): DBaseInteractive;
}
