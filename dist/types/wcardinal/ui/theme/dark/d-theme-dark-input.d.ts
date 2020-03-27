import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DHtmlElementElementCreator } from "../../d-html-element";
import { DThemeInput } from "../../d-input";
import { DThemeDarkHtmlElement } from "./d-theme-dark-html-element";
export declare class DThemeDarkInput extends DThemeDarkHtmlElement<HTMLInputElement> implements DThemeInput {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getOutlineColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getPlaceholder(): string;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCursor(): string;
    getEditingFormatter(): (value: any, caller: any) => string;
    getEditingUnformatter(): (text: string, caller: any) => any;
    getEditingValidator(): (value: any, caller: any) => unknown;
    getElementCreator(): DHtmlElementElementCreator<HTMLInputElement>;
    getClipperCreator(): DHtmlElementElementCreator<HTMLDivElement>;
    getBeforeCreator(): DHtmlElementElementCreator<HTMLDivElement>;
    getAfterCreator(): DHtmlElementElementCreator<HTMLDivElement>;
    getSelect(): boolean;
    protected getElementStyleMargin(state: DBaseState): string;
}
