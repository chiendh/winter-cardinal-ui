import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteContent extends DThemeWhiteBase {
    getWidth(): DCoordinateSize;
    getBorderColor(state: DBaseState): number | null;
    getInteractive(): DBaseInteractive;
}
