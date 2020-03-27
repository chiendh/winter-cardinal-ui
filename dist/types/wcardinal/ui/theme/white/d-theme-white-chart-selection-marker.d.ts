import { DBaseState } from "../../d-base-state";
import { DThemeChartSelectionShape } from "../../d-chart-selection-shape";
import { EShape } from "../../shape/e-shape";
export declare class DThemeWhiteChartSelectionMarker implements DThemeChartSelectionShape {
    isEnabled(state: DBaseState): boolean;
    newShape(state: DBaseState): EShape;
}
