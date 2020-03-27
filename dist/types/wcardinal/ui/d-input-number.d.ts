import { DBaseState } from "./d-base-state";
import { DInput, DInputOptions, DThemeInput } from "./d-input";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
export interface DInputNumberOptions<THEME extends DThemeInputNumber = DThemeInputNumber> extends DInputOptions<number, THEME> {
    step?: number | null;
    min?: number | null;
    max?: number | null;
}
export interface DThemeInputNumber extends DThemeInput {
    getEditingFormatter(): (value: number, caller: any) => string;
    getEditingUnformatter(): (text: string, caller: any) => number;
    getEditingValidator(): (value: number, caller: any) => unknown;
    getTextValue(state: DBaseState): number;
    newTextValue(): DStateAwareOrValueMightBe<number>;
    getStep(): number | null;
    getMin(): number | null;
    getMax(): number | null;
}
export declare abstract class DInputNumber<THEME extends DThemeInputNumber = DThemeInputNumber, OPTIONS extends DInputNumberOptions<THEME> = DInputNumberOptions<THEME>> extends DInput<number, THEME, OPTIONS> {
    protected _step: number | null;
    protected _min: number | null;
    protected _max: number | null;
    protected init(options?: OPTIONS): void;
    get step(): number | null;
    set step(step: number | null);
    get min(): number | null;
    set min(min: number | null);
    get max(): number | null;
    set max(max: number | null);
    protected toValue(valueAsString: string): number;
    protected updateInputStep(): void;
    protected updateInputMin(): void;
    protected updateInputMax(): void;
    protected initInputStep(input: HTMLInputElement): void;
    protected initInputMin(input: HTMLInputElement): void;
    protected initInputMax(input: HTMLInputElement): void;
    protected onElementAttached(element: HTMLInputElement, before: HTMLDivElement | null, after: HTMLDivElement | null): void;
    protected getInputType(): string;
}
