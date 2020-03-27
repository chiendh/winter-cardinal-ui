import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DBaseState } from "./d-base-state";
import { DThemeImagePiece } from "./d-image-piece";
export interface DThemeImageBaseTertiary {
    getTertiaryImageAlignHorizontal(): DAlignHorizontal;
    getTertiaryImageAlignVertical(): DAlignVertical;
    getTertiaryImageAlignWith(): DAlignWith;
    getTertiaryImageMarginHorizontal(): number;
    getTertiaryImageMarginVertial(): number;
    getTertiaryImageTintColor(state: DBaseState): number | null;
    getTertiaryImageTintAlpha(state: DBaseState): number;
    getTertiaryImageSource(state: DBaseState): Texture | DisplayObject | null;
}
export declare class DImageBaseThemeWrapperTertiary implements DThemeImagePiece {
    protected _theme: DThemeImageBaseTertiary;
    constructor(theme: DThemeImageBaseTertiary);
    getImageAlignHorizontal(): DAlignHorizontal;
    getImageAlignVertical(): DAlignVertical;
    getImageAlignWith(): DAlignWith;
    getImageMarginHorizontal(): number;
    getImageMarginVertial(): number;
    getImageTintColor(state: DBaseState): number | null;
    getImageTintAlpha(state: DBaseState): number;
    getImageSource(state: DBaseState): Texture | DisplayObject | null;
}
