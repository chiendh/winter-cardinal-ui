import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
export interface DTableBodyCellInputTreeMarkerOptions<VALUE = unknown, THEME extends DThemeTableBodyCellInputTreeMarker = DThemeTableBodyCellInputTreeMarker> extends DButtonBaseOptions<VALUE, THEME> {
}
export interface DThemeTableBodyCellInputTreeMarker extends DThemeButtonBase {
}
export declare class DTableBodyCellInputTreeMarker<VALUE = unknown, THEME extends DThemeTableBodyCellInputTreeMarker = DThemeTableBodyCellInputTreeMarker, OPTIONS extends DTableBodyCellInputTreeMarkerOptions<VALUE, THEME> = DTableBodyCellInputTreeMarkerOptions<VALUE, THEME>> extends DButtonBase<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
