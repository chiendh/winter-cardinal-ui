import { DBaseState } from "../../d-base-state";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderThumb } from "../../d-slider-thumb";
import { DThemeWhiteButton } from "./d-theme-white-button";
export declare class DThemeWhiteSliderThumb extends DThemeWhiteButton implements DThemeSliderThumb {
    getX(): DCoordinatePosition;
    getY(): DCoordinatePosition;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getCornerRadius(): number;
}
