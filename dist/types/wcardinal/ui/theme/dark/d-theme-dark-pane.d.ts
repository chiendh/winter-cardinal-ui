import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DDragMode } from "../../d-drag-mode";
import { DThemePane } from "../../d-pane";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkPane extends DThemeDarkBase implements DThemePane {
    COLOR: number;
    isOverflowMaskEnabled(): boolean;
    getBackgroundColor(state: DBaseState): number | null;
    getInteractive(): DBaseInteractive;
    getWheelSpeed(): number;
    getDragMode(): DDragMode;
}
