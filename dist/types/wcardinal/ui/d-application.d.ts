import { Container } from "pixi.js";
import { DApplicationLayer } from "./d-application-layer";
import { DApplicationLayerOptions } from "./d-application-layer-options";
import { DApplicationLike } from "./d-application-like";
import { DPaddingLike } from "./d-padding";
export interface DApplicationBackgroundOptions {
    color?: number;
}
export interface DApplicationOptions {
    /**
     * A root element selector or a root element.
     * `HTMLCanvasElement` and other DOM elements are created in this element.
     * The default root element is `document.body`.
     */
    root?: string | HTMLElement;
    /**
     * Padding settings.
     */
    padding?: number | DPaddingLike;
    /**
     * A canvas width.
     */
    width?: number;
    /**
     * A canvas height.
     */
    height?: number;
    /**
     * A background setting.
     */
    background?: DApplicationBackgroundOptions;
    /**
     * An antialias setting.
     */
    antialias?: boolean;
    /**
     * A resolution.
     * The default value is `devicePixelRatio`.
     */
    resolution?: number;
    /**
     * An overlay layer setting.
     * The overlay layer is used by modal UI elements including DDialog
     * to provide the better interoperability with DOM-based UI elements
     * and WebGL-based UI elements.
     * However, an extra layer requires extra memory.
     * Set to true to enable the overlay layer.
     * The default value is false.
     */
    overlay?: boolean;
}
export declare class DApplication implements DApplicationLike {
    protected _options?: DApplicationOptions;
    protected _root: HTMLElement;
    protected _base: DApplicationLayer;
    protected _overlay?: DApplicationLayer;
    protected _resolution: number;
    protected _isOverlayEnabled: boolean;
    constructor(options?: DApplicationOptions);
    get stage(): Container;
    getRootElement(): HTMLElement;
    getResolution(): number;
    protected toRootElement(options?: DApplicationOptions): HTMLElement;
    protected toLayerBaseOptions(options?: DApplicationOptions): DApplicationLayerOptions;
    protected newLayerBase(options?: DApplicationOptions): DApplicationLayer;
    getLayerBase(): DApplicationLayer;
    protected toLayerOverlayOptions(options?: DApplicationOptions): DApplicationLayerOptions;
    protected newLayerOverlay(options?: DApplicationOptions): DApplicationLayer;
    getLayerOverlay(): DApplicationLayer;
    update(): void;
    render(): void;
}
