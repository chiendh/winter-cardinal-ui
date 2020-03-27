import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
export interface DListItemOptions<VALUE = unknown, THEME extends DThemeListItem = DThemeListItem> extends DImageOptions<string, THEME> {
    value?: VALUE;
}
export interface DThemeListItem extends DThemeImage {
    getTextValue(state: DBaseState): string;
    newTextValue(): DStateAwareOrValueMightBe<string>;
}
export interface DListItemSelection {
    add(item: DBase): void;
}
export declare class DListItem<VALUE = unknown, THEME extends DThemeListItem = DThemeListItem, OPTIONS extends DListItemOptions<VALUE, THEME> = DListItemOptions<VALUE, THEME>> extends DImage<string, THEME, OPTIONS> {
    protected _value: VALUE | null;
    protected init(options?: OPTIONS): void;
    get value(): VALUE | null;
    set value(value: VALUE | null);
    protected hasSelection(target: any): target is {
        selection: DListItemSelection;
    };
    protected getSelection(): DListItemSelection | null;
    protected onSelect(e: KeyboardEvent | interaction.InteractionEvent): void;
    onKeyDown(e: KeyboardEvent): boolean;
    protected onStateChange(newState: number, oldState: number): void;
    protected getType(): string;
}
