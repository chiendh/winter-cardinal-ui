import { DBaseState } from "../../d-base-state";
import { DThemeWhitePane } from "./d-theme-white-pane";
export declare class DThemeWhiteList extends DThemeWhitePane {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
}
