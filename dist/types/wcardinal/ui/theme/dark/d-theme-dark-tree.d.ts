import { DBaseState } from "../../d-base-state";
import { DThemeTree } from "../../d-tree";
import { DThemeDarkPane } from "./d-theme-dark-pane";
export declare class DThemeDarkTree extends DThemeDarkPane implements DThemeTree {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
}
