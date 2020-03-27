import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellActionPromise } from "../../d-table-body-cell-action-promise";
import { DThemeWhiteTableBodyCellSelectPromise } from "./d-theme-white-table-body-cell-select-promise";
export declare class DThemeWhiteTableBodyCellActionPromise extends DThemeWhiteTableBodyCellSelectPromise implements DThemeTableBodyCellActionPromise {
    getImageTintColor(state: DBaseState): number | null;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    isSyncEnabled(): boolean;
}
