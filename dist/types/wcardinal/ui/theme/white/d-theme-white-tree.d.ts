import { DBaseState } from "../../d-base-state";
import { DThemeTree } from "../../d-tree";
import { DThemeWhitePane } from "./d-theme-white-pane";
export declare class DThemeWhiteTree extends DThemeWhitePane implements DThemeTree {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
}
