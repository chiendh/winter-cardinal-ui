import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackVertical } from "../../d-slider-track-vertical";
import { DThemeWhiteSliderTrack } from "./d-theme-white-slider-track";
export declare class DThemeWhiteSliderTrackVertical extends DThemeWhiteSliderTrack implements DThemeSliderTrackVertical {
    getX(): DCoordinatePosition;
    getY(): DCoordinatePosition;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
