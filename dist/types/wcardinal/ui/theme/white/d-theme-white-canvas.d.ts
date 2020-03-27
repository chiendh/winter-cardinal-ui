import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeCanvas } from "../../d-canvas";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteCanvas extends DThemeWhiteBase implements DThemeCanvas {
    getBackgroundColor(): number | null;
    getBorderColor(state: DBaseState): number | null;
    getCornerMask(): number;
    getInteractive(): DBaseInteractive;
}
