import { DBaseState } from "../../d-base-state";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";
export declare class DThemeWhiteDialogSelectListItem extends DThemeWhiteListItem implements DThemeDialogSelecListItem {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getColor(state: DBaseState): number;
    getCornerMask(): number;
}
