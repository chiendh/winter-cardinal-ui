import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DBaseState } from "./d-base-state";
import { DThemeImagePiece } from "./d-image-piece";
export interface DThemeImageBaseSecondary {
    getSecondaryImageAlignHorizontal(): DAlignHorizontal;
    getSecondaryImageAlignVertical(): DAlignVertical;
    getSecondaryImageAlignWith(): DAlignWith;
    getSecondaryImageMarginHorizontal(): number;
    getSecondaryImageMarginVertial(): number;
    getSecondaryImageTintColor(state: DBaseState): number | null;
    getSecondaryImageTintAlpha(state: DBaseState): number;
    getSecondaryImageSource(state: DBaseState): Texture | DisplayObject | null;
}
export declare class DImageBaseThemeWrapperSecondary implements DThemeImagePiece {
    protected _theme: DThemeImageBaseSecondary;
    constructor(theme: DThemeImageBaseSecondary);
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageAlignVertical(): DAlignVertical;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
    getImageMarginVertial(): number;
    getImageTintColor(state: DBaseState): number | null;
    getImageTintAlpha(state: DBaseState): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
