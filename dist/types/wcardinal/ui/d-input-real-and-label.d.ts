import { DInputAndLabel, DInputAndLabelOptions, DThemeInputAndLabel } from "./d-input-and-label";
import { DInputReal, DInputRealOptions, DThemeInputReal } from "./d-input-real";
export interface DInputRealAndLabelOptions<THEME extends DThemeInputAndLabel = DThemeInputAndLabel> extends DInputAndLabelOptions<DInputRealOptions, THEME> {
}
export declare class DInputRealAndLabel<THEME extends DThemeInputAndLabel = DThemeInputAndLabel, OPTIONS extends DInputRealAndLabelOptions<THEME> = DInputRealAndLabelOptions<THEME>> extends DInputAndLabel<DInputReal, DInputRealOptions, THEME, OPTIONS> {
    protected createInput(options?: DInputRealOptions<DThemeInputReal>): DInputReal;
}
