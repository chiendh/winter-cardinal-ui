import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackHorizontal } from "../../d-slider-track-horizontal";
import { DThemeWhiteSliderTrack } from "./d-theme-white-slider-track";
export declare class DThemeWhiteSliderTrackHorizontal extends DThemeWhiteSliderTrack implements DThemeSliderTrackHorizontal {
    getX(): DCoordinatePosition;
    getY(): DCoordinatePosition;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
}
