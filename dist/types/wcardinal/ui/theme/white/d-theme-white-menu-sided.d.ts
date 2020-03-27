import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuSided } from "../../d-menu-sided";
import { DThemeWhitePane } from "./d-theme-white-pane";
export declare class DThemeWhiteMenuSided extends DThemeWhitePane implements DThemeMenuSided {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getInteractive(): DBaseInteractive;
}
