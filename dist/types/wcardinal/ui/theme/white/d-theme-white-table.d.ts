import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeTable } from "../../d-table";
import { DThemeWhitePane } from "./d-theme-white-pane";
export declare class DThemeWhiteTable extends DThemeWhitePane implements DThemeTable {
    getBackgroundColor(): number;
    getBorderColor(state: DBaseState): number | null;
    getMargin(): number;
    getInteractive(): DBaseInteractive;
}
