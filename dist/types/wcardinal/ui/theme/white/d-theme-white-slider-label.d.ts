import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderLabel } from "../../d-slider-label";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";
export declare class DThemeWhiteSliderLabel extends DThemeWhiteTextBase implements DThemeSliderLabel {
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getTextAlignVertical(): DAlignVertical;
}
