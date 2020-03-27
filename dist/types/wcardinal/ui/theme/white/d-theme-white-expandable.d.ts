import { DBaseState } from "../../d-base-state";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeExpandable } from "../../d-expandable";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
export declare class DThemeWhiteExpandable extends DThemeWhiteLayoutVertical implements DThemeExpandable {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getMargin(): number;
    getCornerMask(): DCornerMask;
}
