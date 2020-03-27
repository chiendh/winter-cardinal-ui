import { DisplayObject, interaction, Texture } from "pixi.js";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DTreeItemRawData } from "./d-tree";
import { DTreeItemTextAndImage } from "./d-tree-item-text-and-image";
import { DTreeItemToggleIcon } from "./d-tree-item-toggle-icon";
export interface DTreeItemOptions<THEME extends DThemeTreeItem = DThemeTreeItem> extends DLayoutHorizontalOptions<THEME> {
    text: string;
    isParent: boolean;
    expanded: boolean;
    rawData: DTreeItemRawData;
    y: number;
    level: number;
    showable?: boolean;
    image?: DisplayObject | Texture | null;
}
export interface DThemeTreeItem extends DThemeLayoutHorizontal {
    getPaddingByLevel(level: number): number;
}
export declare class DTreeItem<THEME extends DThemeTreeItem = DThemeTreeItem, OPTIONS extends DTreeItemOptions<THEME> = DTreeItemOptions<THEME>> extends DLayoutHorizontal<THEME, OPTIONS> {
    protected _isParent: boolean;
    protected _isExpanded: boolean;
    protected _rawData: DTreeItemRawData;
    protected _textAndImage: DTreeItemTextAndImage;
    protected _icon: DTreeItemToggleIcon;
    protected init(options?: OPTIONS): void;
    protected onSelect(e: interaction.InteractionEvent): void;
    onToggle(): void;
    isExpanded(): boolean;
    isParent(): boolean;
    getRawData(): DTreeItemRawData;
    update(options: OPTIONS, isActive: boolean): this;
    updateActiveState(isActive: boolean): void;
    protected updateStates(isActive: boolean): void;
    protected getType(): string;
}
