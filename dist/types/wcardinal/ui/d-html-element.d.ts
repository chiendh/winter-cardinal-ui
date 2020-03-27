import { interaction, Point, Rectangle, Renderer, Text } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DDynamicText } from "./d-dynamic-text";
import { DHtmlElementWhen } from "./d-html-element-when";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DPadding } from "./d-padding";
export declare type DHtmlElementElementCreator<T> = (parent: HTMLElement) => T;
export declare type DHtmlElementStyle<THEME extends DThemeHtmlElement> = (target: HTMLElement, state: DBaseState, theme: THEME, padding: DPadding, elementRect: Rectangle, clipperRect: Rectangle) => void;
export declare type DHtmlElementStyleBefore<THEME extends DThemeHtmlElement> = (target: HTMLElement, theme: THEME) => void;
export declare type DHtmlElementStyleAfter<THEME extends DThemeHtmlElement> = (target: HTMLElement, theme: THEME) => void;
export interface DHtmlElementElementOptions<ELEMENT, THEME extends DThemeHtmlElement> {
    creator?: DHtmlElementElementCreator<ELEMENT>;
    style?: DHtmlElementStyle<THEME>;
}
export interface DHtmlElementClipperOptions<THEME extends DThemeHtmlElement> {
    creator?: DHtmlElementElementCreator<HTMLDivElement>;
    style?: DHtmlElementStyle<THEME>;
}
export interface DHtmlElementBeforeOptions<THEME extends DThemeHtmlElement> {
    creator?: DHtmlElementElementCreator<HTMLDivElement>;
    style?: DHtmlElementStyleBefore<THEME>;
}
export interface DHtmlElementAfterOptions<THEME extends DThemeHtmlElement> {
    creator?: DHtmlElementElementCreator<HTMLDivElement>;
    style?: DHtmlElementStyleAfter<THEME>;
}
export interface DHtmlElementOptions<VALUE = unknown, ELEMENT extends HTMLElement = HTMLElement, THEME extends DThemeHtmlElement<ELEMENT> = DThemeHtmlElement<ELEMENT>> extends DImageBaseOptions<VALUE, THEME> {
    element?: DHtmlElementElementOptions<ELEMENT, THEME>;
    clipper?: DHtmlElementClipperOptions<THEME>;
    before?: DHtmlElementBeforeOptions<THEME>;
    after?: DHtmlElementAfterOptions<THEME>;
    when?: DHtmlElementWhen | (keyof typeof DHtmlElementWhen);
    select?: boolean;
}
export interface DThemeHtmlElement<ELEMENT extends HTMLElement = HTMLElement> extends DThemeImageBase {
    getElementCreator(): DHtmlElementElementCreator<ELEMENT> | null;
    setElementStyle(target: ELEMENT, state: DBaseState, padding: DPadding, elementRect: Rectangle, clipperRect: Rectangle): void;
    getClipperCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
    setClipperStyle(target: HTMLDivElement, state: DBaseState, padding: DPadding, elementRect: Rectangle, clipperRect: Rectangle): void;
    getBeforeCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
    setBeforeStyle(target: HTMLDivElement): void;
    getAfterCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
    setAfterStyle(target: HTMLDivElement): void;
    getWhen(): DHtmlElementWhen;
    getSelect(): boolean;
}
export declare class DHtmlElement<VALUE = unknown, ELEMENT extends HTMLElement = HTMLElement, THEME extends DThemeHtmlElement<ELEMENT> = DThemeHtmlElement<ELEMENT>, OPTIONS extends DHtmlElementOptions<VALUE, ELEMENT, THEME> = DHtmlElementOptions<VALUE, ELEMENT, THEME>> extends DImageBase<VALUE, THEME, OPTIONS> {
    protected _workPoint: Point | null;
    protected _clipper: HTMLDivElement | null;
    protected _clipperCreator: DHtmlElementElementCreator<HTMLDivElement> | null;
    protected _clipperStyle: DHtmlElementStyle<THEME> | undefined;
    protected _clipperRect: Rectangle | null;
    protected _element: ELEMENT | null;
    protected _elementCreator: DHtmlElementElementCreator<ELEMENT> | null;
    protected _elementStyle: DHtmlElementStyle<THEME> | undefined;
    protected _elementRect: Rectangle | null;
    protected _isElementShown: boolean;
    protected _onElementFocusedBound: (e: FocusEvent) => void;
    protected _before: HTMLDivElement | null;
    protected _beforeCreator: DHtmlElementElementCreator<HTMLDivElement> | null;
    protected _beforeStyle: DHtmlElementStyleBefore<THEME> | undefined;
    protected _onBeforeFocusedBound: (e: FocusEvent) => void;
    protected _after: HTMLDivElement | null;
    protected _afterCreator: DHtmlElementElementCreator<HTMLDivElement> | null;
    protected _afterStyle: DHtmlElementStyleAfter<THEME> | undefined;
    protected _onAfterFocusedBound: (e: FocusEvent) => void;
    protected _isStarted: boolean;
    protected _select: boolean;
    protected _doSelectBound: () => void;
    protected _when: DHtmlElementWhen;
    protected _isStartRequested: boolean;
    protected init(options?: OPTIONS): void;
    get element(): ELEMENT | null;
    protected onDownThis(e: interaction.InteractionEvent): void;
    protected onFocused(): void;
    protected onBlured(): void;
    protected isStartable(): boolean;
    start(): void;
    render(renderer: Renderer): void;
    protected doStart(renderer?: Renderer): void;
    protected doSelect(): void;
    protected createText(formatted: string): Text | DDynamicText;
    /**
     * Please note that this method does not update transforms.
     *
     * @param elementRect
     * @param resolution
     */
    protected getClipperRect(elementRect: Rectangle, resolution: number): Rectangle;
    /**
     * Please note that this method does not update transforms.
     *
     * @param resolution
     */
    protected getElementRect(resolution: number): Rectangle;
    cancel(): void;
    protected onStart(): void;
    protected onCancel(): void;
    protected onElementAttached(element: ELEMENT, before: HTMLDivElement | null, after: HTMLDivElement | null): void;
    protected onElementDetached(element: ELEMENT, before: HTMLDivElement | null, after: HTMLDivElement | null): void;
    protected getElement(clipper: HTMLDivElement): ELEMENT | null;
    protected getClipper(): HTMLDivElement | null;
    protected getBefore(clipper: HTMLDivElement): HTMLDivElement | null;
    protected getAfter(clipper: HTMLDivElement): HTMLDivElement | null;
    protected setElementStyle(target: ELEMENT, state: DBaseState, theme: THEME, padding: DPadding, elementRect: Rectangle, clipperRect: Rectangle): void;
    protected setClipperStyle(target: HTMLDivElement, state: DBaseState, theme: THEME, padding: DPadding, elementRect: Rectangle, clipperRect: Rectangle): void;
    protected setBeforeStyle(target: HTMLDivElement, theme: THEME): void;
    protected setAfterStyle(target: HTMLDivElement, theme: THEME): void;
    protected onBeforeFocused(e: FocusEvent): void;
    protected onAfterFocused(e: FocusEvent): void;
    protected onElementFocused(e: FocusEvent): void;
    protected onEndByBlured(): void;
    protected onEnd(): void;
    end(): void;
    select(): this;
    protected updateElement(renderer: Renderer): void;
    protected getType(): string;
}
