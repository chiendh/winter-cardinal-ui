import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTreeItem } from "../../d-tree-item";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";
export declare class DThemeDarkTreeItem extends DThemeDarkLayoutHorizontal implements DThemeTreeItem {
    COLOR_HOVERED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCornerMask(): number;
    getInteractive(): DBaseInteractive;
    getPaddingByLevel(level: number): number;
}
