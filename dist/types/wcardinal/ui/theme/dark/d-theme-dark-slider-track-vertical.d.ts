import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackVertical } from "../../d-slider-track-vertical";
import { DThemeDarkSliderTrack } from "./d-theme-dark-slider-track";
export declare class DThemeDarkSliderTrackVertical extends DThemeDarkSliderTrack implements DThemeSliderTrackVertical {
    getX(): DCoordinatePosition;
    getY(): DCoordinatePosition;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
