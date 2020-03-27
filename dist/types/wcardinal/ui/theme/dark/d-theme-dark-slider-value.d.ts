import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseState } from "../../d-base-state";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderValue } from "../../d-slider-value";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";
export declare class DThemeDarkSliderValue extends DThemeDarkTextBase implements DThemeSliderValue {
    getX(): DCoordinatePosition;
    getY(): DCoordinatePosition;
    getWidth(): DCoordinateSize;
    getHeight(): DCoordinateSize;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
    getTextAlignHorizontal(): DAlignHorizontal;
    getTextAlignVertical(): DAlignVertical;
    getPrecision(): number;
}
