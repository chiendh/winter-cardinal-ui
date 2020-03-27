import { DisplayObject, Point, Rectangle, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DBaseState } from "./d-base-state";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
declare type DImagePieceOnChange = () => void;
declare type DImagePieceApplyMask = (target: DisplayObject) => void;
export interface DImagePieceTintOptions {
    color?: DStateAwareOrValueMightBe<number | null>;
    alpha?: DStateAwareOrValueMightBe<number>;
}
export interface DImagePieceAlignOptions {
    with?: (keyof typeof DAlignWith) | DAlignWith;
    vertical?: (keyof typeof DAlignVertical) | DAlignVertical;
    horizontal?: (keyof typeof DAlignHorizontal) | DAlignHorizontal;
}
export interface DImagePieceMarginOptions {
    vertical?: number;
    horizontal?: number;
}
export interface DImagePieceOptions {
    source?: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
    tint?: DImagePieceTintOptions;
    align?: DImagePieceAlignOptions;
    margin?: DImagePieceMarginOptions;
}
export interface DImagePieceAlign {
    with: DAlignWith;
    vertical: DAlignVertical;
    horizontal: DAlignHorizontal;
}
export interface DImagePieceMargin {
    vertical: number;
    horizontal: number;
}
export interface DImagePieceTextAlign {
    vertical: DAlignVertical;
    horizontal: DAlignHorizontal;
}
export interface DImagePieceParent {
    readonly state: DBaseState;
    addChild(displayObject: DisplayObject): void;
    removeChild(displayObject: DisplayObject): void;
}
export interface DThemeImagePiece {
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageAlignVertical(): DAlignVertical;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
    getImageMarginVertial(): number;
    getImageTintColor(state: DBaseState): number | null;
    getImageTintAlpha(state: DBaseState): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
export declare class DImagePiece {
    protected _image: DisplayObject | null;
    protected _computed: Texture | DisplayObject | null;
    protected _source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
    protected _align: DImagePieceAlign;
    protected _margin: DImagePieceMargin;
    protected _tint: DImagePieceTintOptions | undefined;
    protected _bound: Rectangle;
    protected _point: Point;
    protected _onChange: DImagePieceOnChange;
    protected _applyMask: DImagePieceApplyMask;
    protected _parent: DImagePieceParent;
    protected _textAlign: DImagePieceTextAlign;
    protected _theme: DThemeImagePiece;
    constructor(parent: DImagePieceParent, theme: DThemeImagePiece, options: DImagePieceOptions | undefined, textAlign: DImagePieceTextAlign, onChange: DImagePieceOnChange, applyMask: DImagePieceApplyMask);
    get image(): DisplayObject | null;
    get align(): DImagePieceAlign;
    get margin(): DImagePieceMargin;
    get bound(): Rectangle;
    get source(): DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
    set source(source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>);
    protected computeSource(): Texture | DisplayObject | null;
    onStateChange(newState: DBaseState, oldState: DBaseState): void;
    updateBound(): void;
    protected isTintAware(target: DisplayObject | null): target is DisplayObject & {
        tint: number;
    };
    protected toTintColor(theme: DThemeImagePiece, state: DBaseState): number | null;
    protected toTintAlpha(theme: DThemeImagePiece, state: DBaseState): number;
    /**
     * Updates the tint.
     *
     * @returns True if the tint is changed.
     */
    updateTint(): boolean;
    /**
     * Updates the computed source.
     *
     * @returns True if the computed source is changed
     */
    updateSource(): boolean;
    isRefitable(target: any): boolean;
    destroy(): void;
}
export {};
