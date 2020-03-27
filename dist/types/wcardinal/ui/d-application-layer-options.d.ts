import { DPadding, DPaddingLike } from "./d-padding";
/**
 * PixiJS options
 */
interface PixiApplicationOptions {
    width: number;
    height: number;
    autoStart: boolean;
    backgroundColor: number;
    transparent: boolean;
    resolution: number;
    antialias: boolean;
}
interface DApplicationLayerBackgroundOptions {
    color?: number | null;
}
interface DApplicationLayerOptionsOptions {
    root: HTMLElement;
    padding?: number | DPaddingLike;
    width?: number;
    height?: number;
    background?: DApplicationLayerBackgroundOptions;
    resolution: number;
    antialias?: boolean;
    /**
     * Sets to true if a layer is a overlay layer.
     */
    overlay: boolean;
}
/**
 * DApplicationLayer options
 */
export declare class DApplicationLayerOptions {
    private _root;
    private _pixi;
    private _padding;
    private _overlay;
    constructor(options: DApplicationLayerOptionsOptions);
    /**
     * Returns a root element.
     * `HTMLCanvasElement` and other DOM elements are created in this element.
     * The default root element is `document.body`.
     */
    getRootElement(): HTMLElement;
    /**
     * Sets a root element and updates the canvas width and height
     * if `updateWidthAndHeight` is not false.
     *
     * @param root new root element
     * @param updateWidthAndHeight false to preserve the canvas width / height
     */
    setRootElement(root: HTMLElement, updateWidthAndHeight?: boolean): this;
    /**
     * Returns a canvas width.
     */
    getWidth(): number;
    /**
     * Sets a canvas width.
     *
     * @param width new canvas width
     */
    setWidth(width: number): this;
    /**
     * Returns a canvas height.
     */
    getHeight(): number;
    /**
     * Sets a canvas height.
     *
     * @param height new canvas height
     */
    setHeight(height: number): this;
    /**
     * Returns padding sizes.
     * The default padding size is 6.
     */
    getPadding(): DPadding;
    /**
     * Sets padding sizes.
     *
     * @param left new left padding
     * @param top new top padding
     * @param right new right padding
     * @param bottom new bottom padding
     * @asse getPadding
     */
    setPadding(left: number, top: number, right: number, bottom: number): this;
    /**
     * Returns a background color.
     */
    getBackgroundColor(): number;
    /**
     * Sets a background color.
     *
     * @param color new background color
     */
    setBackgroundColor(color: number): this;
    /**
     * Returns an antialias setting.
     * The default antialias setting is false.
     */
    getAntialias(): boolean;
    /**
     * Sets an antialias setting.
     *
     * @param antialias new antialias setting
     */
    setAntialias(antialias: boolean): this;
    /**
     * Returns true if a layer is supposed to be an overlay layer.
     */
    isOverlay(): boolean;
    getPixiApplicationOptions(): PixiApplicationOptions;
}
export {};
