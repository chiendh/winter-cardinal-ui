import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeNote } from "../../d-note";
import { DThemeWhiteText } from "./d-theme-white-text";
export declare class DThemeWhiteNote extends DThemeWhiteText implements DThemeNote {
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getInteractive(): DBaseInteractive;
}
