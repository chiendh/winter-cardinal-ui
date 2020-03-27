export interface UtilWheelEventDeltas {
    mode: number;
    delta: number;
    deltaX: number;
    deltaY: number;
    lowest: number;
}
/*!
* jQuery Mousewheel 3.1.13
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* See also https://github.com/mapbox/mapbox-gl-js/blob/001c7b9/js/ui/handler/scroll_zoom.js
* and https://github.com/openlayers/openlayers/blob/v5.2.0/src/ol/interaction/MouseWheelZoom.js#L51
*/
export declare class UtilWheelEvent {
    private static INSTANCE;
    private _names;
    private _lowest;
    private _timestamp;
    private _lineHeight;
    private _pageHeight;
    constructor();
    on(target: HTMLElement, handler: (e: WheelEvent | Event) => void, useCapture?: boolean): void;
    off(target: HTMLElement, handler: (e: WheelEvent | Event) => void, useCapture?: boolean): void;
    getLineHeight(): number;
    getPageHeight(): number;
    normalize(e: any): UtilWheelEventDeltas | null;
    static getInstance(): UtilWheelEvent;
}
