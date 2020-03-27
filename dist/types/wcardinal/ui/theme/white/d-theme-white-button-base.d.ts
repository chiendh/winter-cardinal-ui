import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DThemeButtonBase } from "../../d-button-base";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
export declare class DThemeWhiteButtonBase extends DThemeWhiteImageBase implements DThemeButtonBase {
    COLOR: number;
    COLOR_HOVERED: number;
    COLOR_PRESSED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    isToggle(): boolean;
}
