import { Graphics, Text } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DBase, DBaseOnOptions, DBaseOptions, DRefitable, DThemeBase } from "./d-base";
import { DBaseOverflowMaskSimple } from "./d-base-overflow-mask-simple";
import { DBaseState } from "./d-base-state";
import { DDynamicText } from "./d-dynamic-text";
import { DDynamicTextStyleOptions } from "./d-dynamic-text-style";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
export interface DTextBaseTextAlignOptions {
    vertical?: (keyof typeof DAlignVertical) | DAlignVertical;
    horizontal?: (keyof typeof DAlignHorizontal) | DAlignHorizontal;
}
export interface DTextBaseTextOptions<VALUE = unknown> {
    value?: DStateAwareOrValueMightBe<VALUE>;
    color?: DStateAwareOrValueMightBe<number>;
    alpha?: DStateAwareOrValueMightBe<number>;
    style?: DDynamicTextStyleOptions;
    align?: DTextBaseTextAlignOptions;
    formatter?: (value: VALUE, caller: any) => string;
    dynamic?: boolean;
}
export interface DTextBaseOnOptions<VALUE> extends DBaseOnOptions {
}
export interface DTextBaseOptions<VALUE = unknown, THEME extends DThemeTextBase = DThemeTextBase> extends DBaseOptions<THEME> {
    text?: DTextBaseTextOptions<VALUE>;
    mask?: boolean;
    on?: DTextBaseOnOptions<VALUE>;
}
export interface DThemeTextBase extends DThemeBase {
    getTextFormatter(): (value: any, caller: any) => string;
    newTextValue(): any;
    getTextValue(state: DBaseState): any;
    getTextAlignVertical(): DAlignVertical;
    getTextAlignHorizontal(): DAlignHorizontal;
    getTextStyleClipping(): boolean;
    isOverflowMaskEnabled(): boolean;
    isTextDynamic(): boolean;
}
export declare class DTextBase<VALUE = unknown, THEME extends DThemeTextBase = DThemeTextBase, OPTIONS extends DTextBaseOptions<VALUE, THEME> = DTextBaseOptions<VALUE, THEME>> extends DBase<THEME, OPTIONS> {
    protected _text: DDynamicText | Text | null;
    protected _textValue: DStateAwareOrValueMightBe<VALUE>;
    protected _textValueComputed: VALUE;
    protected _textColor: DStateAwareOrValueMightBe<number>;
    protected _textAlpha: DStateAwareOrValueMightBe<number>;
    protected _textStyle: DDynamicTextStyleOptions;
    protected _textAlign: {
        vertical: DAlignVertical;
        horizontal: DAlignHorizontal;
    };
    protected _textFormatter: (value: VALUE, caller: any) => string;
    protected _isOverflowMaskEnabled: boolean;
    protected _overflowMask: DBaseOverflowMaskSimple | null;
    protected _textDynamic: boolean;
    protected init(options?: OPTIONS): void;
    set text(text: DStateAwareOrValueMightBe<VALUE>);
    get text(): DStateAwareOrValueMightBe<VALUE>;
    protected onTextChange(): void;
    protected computeTextValue(): VALUE;
    protected createOrUpdateText(): void;
    protected createText(formatted: string): Text | DDynamicText;
    protected getOrCreateOverflowMask(): Graphics;
    protected updateTextPosition(text: DDynamicText | Text): void;
    protected toRounded(this: unknown, value: number): number;
    protected getTextColor(theme: THEME, state: DBaseState): number;
    protected getTextAlpha(theme: THEME, state: DBaseState): number;
    protected updateTextColor(text: DDynamicText | Text): void;
    protected updateTextValue(): void;
    protected updateText(): void;
    protected onReflow(): void;
    protected isRefitable(target: any): target is DRefitable;
    protected applyTitle(): void;
    protected getType(): string;
    destroy(): void;
}
