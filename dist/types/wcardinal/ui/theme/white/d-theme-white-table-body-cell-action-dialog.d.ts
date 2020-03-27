import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellActionDialog } from "../../d-table-body-cell-action-dialog";
import { DThemeWhiteTableBodyCellSelectDialog } from "./d-theme-white-table-body-cell-select-dialog";
export declare class DThemeWhiteTableBodyCellActionDialog extends DThemeWhiteTableBodyCellSelectDialog implements DThemeTableBodyCellActionDialog {
    getImageTintColor(state: DBaseState): number | null;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    isSyncEnabled(): boolean;
}
