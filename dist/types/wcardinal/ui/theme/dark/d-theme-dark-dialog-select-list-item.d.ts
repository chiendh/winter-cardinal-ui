import { DBaseState } from "../../d-base-state";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";
export declare class DThemeDarkDialogSelectListItem extends DThemeDarkListItem implements DThemeDialogSelecListItem {
    getBackgroundColor(state: DBaseState): number | null;
    getBackgroundAlpha(state: DBaseState): number;
    getColor(state: DBaseState): number;
    getCornerMask(): number;
}
