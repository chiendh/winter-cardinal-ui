import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderLabel } from "../../d-slider-label";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";
export declare class DThemeDarkSliderLabel extends DThemeDarkTextBase implements DThemeSliderLabel {
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getTextAlignHorizontal(): DAlignHorizontal;
    getTextAlignVertical(): DAlignVertical;
}
