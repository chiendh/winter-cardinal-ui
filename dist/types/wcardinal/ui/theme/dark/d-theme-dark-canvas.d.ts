import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeCanvas } from "../../d-canvas";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkCanvas extends DThemeDarkBase implements DThemeCanvas {
    COLOR: number;
    getBackgroundColor(): number | null;
    getBorderColor(state: DBaseState): number | null;
    getCornerMask(): number;
    getInteractive(): DBaseInteractive;
}
