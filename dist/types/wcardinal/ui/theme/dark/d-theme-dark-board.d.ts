import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeBoard } from "../../d-board";
import { DThemeDarkBase } from "./d-theme-dark-base";
export declare class DThemeDarkBoard extends DThemeDarkBase implements DThemeBoard {
    COLOR: number;
    getBackgroundColor(): number | null;
    getBorderColor(state: DBaseState): number | null;
    getCornerMask(): number;
    getPaddingLeft(): number;
    getPaddingTop(): number;
    getPaddingRight(): number;
    getPaddingBottom(): number;
    getInteractive(): DBaseInteractive;
}
