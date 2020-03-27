import { interaction, Text } from "pixi.js";
import { DDynamicText } from "./d-dynamic-text";
import { DMenuItem, DMenuItemOptions, DThemeMenuItem } from "./d-menu-item";
export interface DMenuItemTextOptions<VALUE = unknown, THEME extends DThemeMenuItemText = DThemeMenuItemText> extends DMenuItemOptions<VALUE, THEME> {
}
export interface DThemeMenuItemText extends DThemeMenuItem {
    getShortcutTextMargin(): number;
}
export declare class DMenuItemText<VALUE = unknown, THEME extends DThemeMenuItemText = DThemeMenuItemText, OPTIONS extends DMenuItemTextOptions<VALUE, THEME> = DMenuItemTextOptions<VALUE, THEME>> extends DMenuItem<VALUE, THEME, OPTIONS> {
    protected _shortcutText: Text | DDynamicText | null;
    protected _shortcutMargin: number;
    protected init(options?: OPTIONS): void;
    protected initOnClick(options?: OPTIONS): void;
    protected initOnOver(options?: OPTIONS): void;
    protected initShortcuts(options?: OPTIONS): void;
    protected updateShortcutText(): void;
    protected updateTextColor(text: DDynamicText | Text): void;
    protected updateText(): void;
    protected getType(): string;
    protected onSelect(e: KeyboardEvent | interaction.InteractionEvent): void;
    protected onShortcut(e: KeyboardEvent): void;
}
