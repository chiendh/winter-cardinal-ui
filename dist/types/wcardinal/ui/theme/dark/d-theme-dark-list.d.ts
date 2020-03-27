import { DBaseState } from "../../d-base-state";
import { DThemeDarkPane } from "./d-theme-dark-pane";
export declare class DThemeDarkList extends DThemeDarkPane {
    COLOR: number;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
}
