import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DThemeLayoutSpace } from "../../d-layout-space";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteLayoutSpace extends DThemeWhiteBase implements DThemeLayoutSpace {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getClearType(): DLayoutClearType;
    getInteractive(): DBaseInteractive;
}
