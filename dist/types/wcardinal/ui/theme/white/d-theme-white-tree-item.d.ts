import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTreeItem } from "../../d-tree-item";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";
export declare class DThemeWhiteTreeItem extends DThemeWhiteLayoutHorizontal implements DThemeTreeItem {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getCornerMask(): number;
    getInteractive(): DBaseInteractive;
    getPaddingByLevel(level: number): number;
}
