import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DThemeLayoutSpace } from "../../d-layout-space";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkLayoutSpace extends DThemeDarkBase implements DThemeLayoutSpace {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getClearType(): DLayoutClearType;
    getInteractive(): DBaseInteractive;
}
