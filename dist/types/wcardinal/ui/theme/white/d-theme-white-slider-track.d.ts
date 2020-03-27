import { DBaseState } from "../../d-base-state";
import { DThemeSliderTrack } from "../../d-slider-track";
import { DThemeWhiteButton } from "./d-theme-white-button";
export declare class DThemeWhiteSliderTrack extends DThemeWhiteButton implements DThemeSliderTrack {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
}
