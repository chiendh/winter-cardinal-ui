import { Rectangle } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DHtmlElementElementCreator, DThemeHtmlElement } from "../../d-html-element";
import { DHtmlElementWhen } from "../../d-html-element-when";
import { DPadding } from "../../d-padding";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
export declare class DThemeDarkHtmlElement<ELEMENT extends HTMLElement = HTMLElement> extends DThemeDarkImageBase implements DThemeHtmlElement<ELEMENT> {
    getElementCreator(): DHtmlElementElementCreator<ELEMENT> | null;
    setElementStyle(target: ELEMENT, state: DBaseState, padding: DPadding, elementRect: Rectangle, clipperRect: Rectangle): void;
    protected getElementStyleBackground(state: DBaseState): string;
    protected getElementStyleBorder(state: DBaseState): string;
    protected getElementStylePadding(state: DBaseState, padding: DPadding, elementRect: Rectangle): string;
    protected getElementStyleOutline(state: DBaseState): string;
    protected getElementStylePosition(state: DBaseState, elementRect: Rectangle, clipperRect: Rectangle): string;
    protected getElementStyleText(state: DBaseState): string;
    protected getElementStyleMargin(state: DBaseState): string;
    getClipperCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
    setClipperStyle(target: HTMLDivElement, state: DBaseState, padding: DPadding, elementRect: Rectangle, clipperRect: Rectangle): void;
    protected getClipperStylePosition(state: DBaseState, elementRect: Rectangle, clipperRect: Rectangle): string;
    getBeforeCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
    setBeforeStyle(target: HTMLDivElement): void;
    getAfterCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
    setAfterStyle(target: HTMLDivElement): void;
    getWhen(): DHtmlElementWhen;
    getSelect(): boolean;
}
