import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DDragMode } from "../../d-drag-mode";
import { DThemePane } from "../../d-pane";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhitePane extends DThemeWhiteBase implements DThemePane {
    isOverflowMaskEnabled(): boolean;
    getBackgroundColor(state: DBaseState): number | null;
    getInteractive(): DBaseInteractive;
    getWheelSpeed(): number;
    getDragMode(): DDragMode;
}
