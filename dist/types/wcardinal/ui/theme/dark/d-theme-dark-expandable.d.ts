import { DBaseState } from "../../d-base-state";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeExpandable } from "../../d-expandable";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
export declare class DThemeDarkExpandable extends DThemeDarkLayoutVertical implements DThemeExpandable {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getMargin(): number;
    getCornerMask(): DCornerMask;
}
