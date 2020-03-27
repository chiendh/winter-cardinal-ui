import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuItemExpandableHeader } from "../../d-menu-item-expandable-header";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";
export declare class DThemeDarkMenuItemExpandableHeader extends DThemeDarkListItem implements DThemeMenuItemExpandableHeader {
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
}
