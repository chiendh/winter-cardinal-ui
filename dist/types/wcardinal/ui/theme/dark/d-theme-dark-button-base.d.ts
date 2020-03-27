import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DThemeButtonBase } from "../../d-button-base";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
export declare class DThemeDarkButtonBase extends DThemeDarkImageBase implements DThemeButtonBase {
    COLOR: number;
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
