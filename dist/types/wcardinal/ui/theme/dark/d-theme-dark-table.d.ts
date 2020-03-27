import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeTable } from "../../d-table";
import { DThemeDarkPane } from "./d-theme-dark-pane";
export declare class DThemeDarkTable extends DThemeDarkPane implements DThemeTable {
    getBackgroundColor(): null;
    getBorderColor(state: DBaseState): number | null;
    getMargin(): number;
    getInteractive(): DBaseInteractive;
}
