import { interaction } from "pixi.js";
import { DButtonGroup } from "./d-button-group";
import { DImageBase, DImageBaseOnOptions, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
/**
 * Mappings of event names and handlers.
 */
export interface DButtonBaseOnOptions<VALUE> extends DImageBaseOnOptions<VALUE> {
    /**
     * Called when the button is activated.
     *
     * @param self an activated button
     */
    active?: (self: any) => void;
    /**
     * Called when the button is inactivated.
     *
     * @param self an inactivated button
     */
    inactive?: (self: any) => void;
}
/**
 * Base button options.
 */
export interface DButtonBaseOptions<VALUE = unknown, THEME extends DThemeButtonBase = DThemeButtonBase> extends DImageBaseOptions<VALUE, THEME> {
    /**
     * True to turn a toggle mode on.
     */
    toggle?: boolean;
    /**
     * A button group.
     */
    group?: DButtonGroup;
    /**
     * Mappings of event names and handlers.
     */
    on?: DButtonBaseOnOptions<VALUE>;
}
/**
 * A base button theme.
 */
export interface DThemeButtonBase extends DThemeImageBase {
    /**
     * Returns true to turn a toggle mode on.
     */
    isToggle(): boolean;
}
export declare class DButtonBase<VALUE = unknown, THEME extends DThemeButtonBase = DThemeButtonBase, OPTIONS extends DButtonBaseOptions<VALUE, THEME> = DButtonBaseOptions<VALUE, THEME>> extends DImageBase<VALUE, THEME, OPTIONS> {
    protected _isToggle: boolean;
    protected init(options?: OPTIONS): void;
    protected onShortcut(e: KeyboardEvent): void;
    isToggle(): boolean;
    protected initOnClick(options?: OPTIONS): void;
    protected initOnPress(options?: OPTIONS): void;
    protected onStateChange(newState: number, oldState: number): void;
    protected getType(): string;
    onClick(e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void;
    protected onActivate(e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void;
    toggle(): void;
    protected onToggleStart(): void;
    protected onToggleEnd(): void;
    protected onActivateKeyDown(e: KeyboardEvent): void;
    protected onActivateKeyUp(e: KeyboardEvent): void;
    onKeyDown(e: KeyboardEvent): boolean;
    onKeyUp(e: KeyboardEvent): boolean;
    destroy(): void;
}
