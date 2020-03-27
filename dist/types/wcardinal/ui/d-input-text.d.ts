import { DBaseState } from "./d-base-state";
import { DInput, DInputOptions, DThemeInput } from "./d-input";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
export interface DInputTextOptions<THEME extends DThemeInputText = DThemeInputText> extends DInputOptions<string, THEME> {
}
export interface DThemeInputText extends DThemeInput {
    getEditingFormatter(): (value: string, caller: any) => string;
    getEditingUnformatter(): (text: string, caller: any) => string;
    getEditingValidator(): (value: string, caller: any) => unknown;
    getTextFormatter(): (value: string, caller: any) => string;
    getTextValue(state: DBaseState): string;
    newTextValue(): DStateAwareOrValueMightBe<string>;
}
export declare class DInputText<THEME extends DThemeInputText = DThemeInputText, OPTIONS extends DInputTextOptions<THEME> = DInputTextOptions<THEME>> extends DInput<string, THEME, OPTIONS> {
    protected toValue(valueAsString: string): string;
    protected getInputType(): string;
    protected getType(): string;
}
