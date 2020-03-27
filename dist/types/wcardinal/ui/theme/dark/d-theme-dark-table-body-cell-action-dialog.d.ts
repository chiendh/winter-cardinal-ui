import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellActionDialog } from "../../d-table-body-cell-action-dialog";
import { DThemeDarkTableBodyCellSelectDialog } from "./d-theme-dark-table-body-cell-select-dialog";
export declare class DThemeDarkTableBodyCellActionDialog extends DThemeDarkTableBodyCellSelectDialog implements DThemeTableBodyCellActionDialog {
    getImageTintColor(state: DBaseState): number | null;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    isSyncEnabled(): boolean;
}
