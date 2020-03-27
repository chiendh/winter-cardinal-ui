import { interaction } from "pixi.js";
import { DHtmlElement, DHtmlElementOptions, DThemeHtmlElement } from "./d-html-element";
export interface DInputEditingOptions<VALUE = unknown> {
    formatter?: (value: VALUE) => string;
    unformatter?: (text: string) => VALUE;
    validator?: (value: VALUE) => string | null;
}
export interface DInputOptions<VALUE = unknown, THEME extends DThemeInput = DThemeInput> extends DHtmlElementOptions<VALUE, HTMLInputElement, THEME> {
    description?: string;
    editing?: DInputEditingOptions<VALUE>;
}
export interface DThemeInput extends DThemeHtmlElement<HTMLInputElement> {
    getEditingFormatter(): (value: any, caller: any) => string;
    getEditingUnformatter(): (text: string, caller: any) => any;
    getEditingValidator(): (value: any, caller: any) => unknown;
}
export declare abstract class DInput<VALUE = unknown, THEME extends DThemeInput = DThemeInput, OPTIONS extends DInputOptions<VALUE, THEME> = DInputOptions<VALUE, THEME>> extends DHtmlElement<VALUE, HTMLInputElement, THEME, OPTIONS> {
    protected _description: string;
    protected _onInputKeyDownBound: (e: KeyboardEvent) => void;
    protected _onInputChangeBound: (e: Event) => void;
    protected _onInputInputBound: (e: Event) => void;
    protected _editingFormatter: (value: VALUE, caller: any) => string;
    protected _editingUnformatter: (text: string, caller: any) => VALUE;
    protected _editingValidator: (value: VALUE, caller: any) => unknown;
    protected _editingValidationResult: unknown;
    protected init(options?: OPTIONS): void;
    get value(): VALUE;
    set value(value: VALUE);
    protected onTextChange(): void;
    validate(): unknown;
    protected applyTitle(): void;
    protected onStart(): void;
    protected onCancel(): void;
    protected onEnd(): void;
    protected onElementAttached(element: HTMLInputElement, before: HTMLDivElement | null, after: HTMLDivElement | null): void;
    protected onElementDetached(element: HTMLInputElement, before: HTMLDivElement | null, after: HTMLDivElement | null): void;
    protected onInputKeyDown(e: KeyboardEvent): void;
    protected onInputChange(): void;
    protected onInputInput(e: Event): void;
    protected onDownThis(e: interaction.InteractionEvent): void;
    protected getType(): string;
    protected abstract toValue(valueAsString: string): VALUE;
    protected abstract getInputType(): string;
}
