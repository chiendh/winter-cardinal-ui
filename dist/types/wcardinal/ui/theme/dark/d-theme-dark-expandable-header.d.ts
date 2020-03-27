import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeExpandableHeader } from "../../d-expandable-header";
import { DThemeDarkImage } from "./d-theme-dark-image";
export declare class DThemeDarkExpandableHeader extends DThemeDarkImage implements DThemeExpandableHeader {
    COLOR: number;
    COLOR_HOVERED: number;
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCornerMask(): number;
}
