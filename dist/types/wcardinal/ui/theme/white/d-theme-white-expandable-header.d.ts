import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeExpandableHeader } from "../../d-expandable-header";
import { DThemeWhiteImage } from "./d-theme-white-image";
export declare class DThemeWhiteExpandableHeader extends DThemeWhiteImage implements DThemeExpandableHeader {
    getBackgroundColor(state: DBaseState): number | null;
    getBorderColor(state: DBaseState): number | null;
    getHeight(): DCoordinateSize;
    getWidth(): DCoordinateSize;
    getPaddingLeft(): number;
    getPaddingRight(): number;
    getCornerMask(): number;
}
