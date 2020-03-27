import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeBoard } from "../../d-board";
import { DThemeWhiteBase } from "./d-theme-white-base";
export declare class DThemeWhiteBoard extends DThemeWhiteBase implements DThemeBoard {
    getBackgroundColor(): number | null;
    getBorderColor(state: DBaseState): number | null;
    getCornerMask(): number;
    getPaddingLeft(): number;
    getPaddingTop(): number;
    getPaddingRight(): number;
    getPaddingBottom(): number;
    getInteractive(): DBaseInteractive;
}
