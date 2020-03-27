import { DImage, DImageOptions, DThemeImage } from "./d-image";
export interface DExpandableHeaderOptions<VALUE = unknown, THEME extends DThemeExpandableHeader = DThemeExpandableHeader> extends DImageOptions<VALUE, THEME> {
}
export interface DThemeExpandableHeader extends DThemeImage {
}
export declare class DExpandableHeader<VALUE = unknown, THEME extends DThemeExpandableHeader = DThemeExpandableHeader, OPTIONS extends DExpandableHeaderOptions<VALUE, THEME> = DExpandableHeaderOptions<VALUE, THEME>> extends DImage<VALUE, THEME, OPTIONS> {
    constructor(options?: OPTIONS);
    protected onSelect(): void;
    onKeyDown(e: KeyboardEvent): boolean;
    protected getType(): string;
}
