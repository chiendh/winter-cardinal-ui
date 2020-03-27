import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuItemExpandableHeader } from "../../d-menu-item-expandable-header";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";
export declare class DThemeWhiteMenuItemExpandableHeader extends DThemeWhiteListItem implements DThemeMenuItemExpandableHeader {
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
}
