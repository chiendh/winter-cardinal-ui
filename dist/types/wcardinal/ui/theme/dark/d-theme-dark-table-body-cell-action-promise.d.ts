import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellActionPromise } from "../../d-table-body-cell-action-promise";
import { DThemeDarkTableBodyCellSelectPromise } from "./d-theme-dark-table-body-cell-select-promise";
export declare class DThemeDarkTableBodyCellActionPromise extends DThemeDarkTableBodyCellSelectPromise implements DThemeTableBodyCellActionPromise {
    getImageTintColor(state: DBaseState): number | null;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    isSyncEnabled(): boolean;
}
