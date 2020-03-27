import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderHorizontal } from "../../d-slider-horizontal";
import { DThemeWhiteSlider } from "./d-theme-white-slider";
export declare class DThemeWhiteSliderHorizontal extends DThemeWhiteSlider implements DThemeSliderHorizontal {
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getX(): DCoordinatePosition;
}
