import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackHorizontal } from "../../d-slider-track-horizontal";
import { DThemeDarkSliderTrack } from "./d-theme-dark-slider-track";
export declare class DThemeDarkSliderTrackHorizontal extends DThemeDarkSliderTrack implements DThemeSliderTrackHorizontal {
    getX(): DCoordinatePosition;
    getY(): DCoordinatePosition;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
