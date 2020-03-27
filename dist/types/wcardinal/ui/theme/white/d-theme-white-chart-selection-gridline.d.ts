import { DBaseState } from "../../d-base-state";
import { DThemeChartSelectionShape } from "../../d-chart-selection-shape";
import { EShape } from "../../shape/e-shape";
export declare class DThemeWhiteChartSelectionGridline implements DThemeChartSelectionShape {
    isEnabled(state: DBaseState): boolean;
    newShape(state: DBaseState): EShape;
}
