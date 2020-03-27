import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkContent extends DThemeDarkBase {
    getWidth(): DCoordinateSize;
    getBorderColor(state: DBaseState): number | null;
    getInteractive(): DBaseInteractive;
}
