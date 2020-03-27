import { interaction } from "pixi.js";
import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
import { DLink, DLinkOptions, DThemeLink } from "./d-link";
export interface DButtonLinkOptions<VALUE = unknown, THEME extends DThemeButtonLink = DThemeButtonLink> extends DButtonBaseOptions<VALUE, THEME>, DLinkOptions {
}
export interface DThemeButtonLink extends DThemeButtonBase, DThemeLink {
}
export declare class DButtonLink<VALUE = unknown, THEME extends DThemeButtonLink = DThemeButtonLink, OPTIONS extends DButtonLinkOptions<VALUE, THEME> = DButtonLinkOptions<VALUE, THEME>> extends DButtonBase<VALUE, THEME, OPTIONS> {
    protected _link: DLink;
    protected initOnClick(options?: OPTIONS): void;
    protected onActivate(e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void;
    open(inNewWindow: boolean): void;
    protected getType(): string;
}
