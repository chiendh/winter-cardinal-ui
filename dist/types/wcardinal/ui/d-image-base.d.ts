import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DRefitable } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DImagePiece, DImagePieceOptions, DThemeImagePiece } from "./d-image-piece";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTextBase, DTextBaseOnOptions, DTextBaseOptions, DThemeTextBase } from "./d-text-base";
export interface DImageBaseOnOptions<VALUE> extends DTextBaseOnOptions<VALUE> {
}
export interface DImageBaseOptions<VALUE, THEME extends DThemeImageBase = DThemeImageBase> extends DTextBaseOptions<VALUE, THEME> {
    image?: DImagePieceOptions;
    on?: DImageBaseOnOptions<VALUE>;
}
export interface DThemeImageBase extends DThemeTextBase, DThemeImagePiece {
    getSecondaryImageAlignHorizontal(): DAlignHorizontal;
    getSecondaryImageAlignVertical(): DAlignVertical;
    getSecondaryImageAlignWith(): DAlignWith;
    getSecondaryImageMarginHorizontal(): number;
    getSecondaryImageMarginVertial(): number;
    getSecondaryImageTintColor(state: DBaseState): number | null;
    getSecondaryImageTintAlpha(state: DBaseState): number;
    getSecondaryImageSource?(state: DBaseState): Texture | DisplayObject | null;
    getTertiaryImageAlignHorizontal(): DAlignHorizontal;
    getTertiaryImageAlignVertical(): DAlignVertical;
    getTertiaryImageAlignWith(): DAlignWith;
    getTertiaryImageMarginHorizontal(): number;
    getTertiaryImageMarginVertial(): number;
    getTertiaryImageTintColor(state: DBaseState): number | null;
    getTertiaryImageTintAlpha(state: DBaseState): number;
    getTertiaryImageSource?(state: DBaseState): Texture | DisplayObject | null;
}
export declare class DImageBase<VALUE = unknown, THEME extends DThemeImageBase = DThemeImageBase, OPTIONS extends DImageBaseOptions<VALUE, THEME> = DImageBaseOptions<VALUE, THEME>> extends DTextBase<VALUE, THEME, OPTIONS> {
    protected _images: DImagePiece[];
    protected _onChangeBound: () => void;
    protected _applyMaskBound: (target: DisplayObject) => void;
    protected init(options?: OPTIONS): void;
    protected newImages(theme: THEME, options?: OPTIONS): DImagePiece[];
    protected toImageOptions(theme: THEME, options?: DImagePieceOptions): DImagePieceOptions | undefined;
    protected newImage(theme: DThemeImagePiece, options?: DImagePieceOptions): DImagePiece;
    get image(): DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
    set image(imageSource: DStateAwareOrValueMightBe<Texture | DisplayObject | null>);
    protected onStateChange(newState: DBaseState, oldState: DBaseState): void;
    protected updateText(): void;
    protected updateTextAndImage(): void;
    protected isRefitable(target: any): target is DRefitable;
    protected getType(): string;
    destroy(): void;
}
