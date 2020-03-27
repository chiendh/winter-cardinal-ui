import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuSided } from "../../d-menu-sided";
import { DThemeDarkPane } from "./d-theme-dark-pane";
export declare class DThemeDarkMenuSided extends DThemeDarkPane implements DThemeMenuSided {
    COLOR: number;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getInteractive(): DBaseInteractive;
}
