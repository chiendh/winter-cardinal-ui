import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
export declare class DThemeDarkLinks {
    static init(): void;
    static getImageSource(state: DBaseState): Texture | DisplayObject | null;
    static getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId>;
    protected static getOpenLinkInNewWindow(): string;
    protected static getCopyLinkAddress(): string;
}
