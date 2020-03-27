import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderHorizontal } from "../../d-slider-horizontal";
import { DThemeDarkSlider } from "./d-theme-dark-slider";
export declare class DThemeDarkSliderHorizontal extends DThemeDarkSlider implements DThemeSliderHorizontal {
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getX(): DCoordinatePosition;
}
