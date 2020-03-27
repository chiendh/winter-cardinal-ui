import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeTableBodyCellLink } from "../../d-table-body-cell-link";
import { DThemeWhiteTableBodyCellButton } from "./d-theme-white-table-body-cell-button";
export declare class DThemeWhiteTableBodyCellLink extends DThemeWhiteTableBodyCellButton implements DThemeTableBodyCellLink {
    getImageTintColor(state: DBaseState): number | null;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}
