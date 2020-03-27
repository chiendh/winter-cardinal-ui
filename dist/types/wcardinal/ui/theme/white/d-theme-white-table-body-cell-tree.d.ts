import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellTree } from "../../d-table-body-cell-tree";
import { DThemeWhiteTableBodyCellButton } from "./d-theme-white-table-body-cell-button";
export declare class DThemeWhiteTableBodyCellTree extends DThemeWhiteTableBodyCellButton implements DThemeTableBodyCellTree {
    getLevelPadding(level: number): number;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
