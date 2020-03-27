import { DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderVertical } from "../../d-slider-vertical";
import { DThemeWhiteSlider } from "./d-theme-white-slider";
export declare class DThemeWhiteSliderVertical extends DThemeWhiteSlider implements DThemeSliderVertical {
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
}
