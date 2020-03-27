import { Container } from "pixi.js";
import { DMenuItemExpandable, DMenuItemExpandableOptions, DThemeMenuItemExpandable } from "./d-menu-item-expandable";
export declare class DMenuSidedItemExpandable<VALUE = unknown, THEME extends DThemeMenuItemExpandable = DThemeMenuItemExpandable, OPTIONS extends DMenuItemExpandableOptions<VALUE, THEME> = DMenuItemExpandableOptions<VALUE, THEME>> extends DMenuItemExpandable<VALUE, THEME, OPTIONS> {
    protected newItems(body: Container, sticky: boolean, theme: THEME, options: OPTIONS | undefined): void;
    protected getType(): string;
}
