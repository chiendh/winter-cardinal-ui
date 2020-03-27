import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeTableHeaderCell } from "../../d-table-header-cell";
import { DThemeWhiteImage } from "./d-theme-white-image";
export declare class DThemeWhiteTableHeaderCell extends DThemeWhiteImage implements DThemeTableHeaderCell {
    COLOR: number;
    COLOR_HOVERED: number;
    COLOR_PRESSED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getBorderAlign(state: DBaseState): number;
    getBorderMask(state: DBaseState): DBorderMask;
    getTextAlignHorizontal(): DAlignHorizontal;
    getCornerMask(): DCornerMask;
    getHeight(): DCoordinateSize;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getTextValue(state: DBaseState): string | null;
    newTextValue(): DStateAwareOrValueMightBe<string | null>;
    getSecondaryImageSource(state: DBaseState): Texture | DisplayObject | null;
    getSecondaryImageAlignHorizontal(): DAlignHorizontal;
    getSecondaryImageAlignWith(): DAlignWith;
}
