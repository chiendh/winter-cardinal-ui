import { DBaseState } from "../../d-base-state";
import { DThemeSliderTrack } from "../../d-slider-track";
import { DThemeDarkButton } from "./d-theme-dark-button";
export declare class DThemeDarkSliderTrack extends DThemeDarkButton implements DThemeSliderTrack {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getColor(state: DBaseState): number;
    getAlpha(state: DBaseState): number;
}
