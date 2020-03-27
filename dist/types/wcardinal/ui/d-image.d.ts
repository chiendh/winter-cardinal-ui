import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
export interface DImageOptions<VALUE = unknown, THEME extends DThemeImage = DThemeImage> extends DImageBaseOptions<VALUE, THEME> {
}
export interface DThemeImage extends DThemeImageBase {
}
export declare class DImage<VALUE = unknown, THEME extends DThemeImage = DThemeImage, OPTIONS extends DImageOptions<VALUE, THEME> = DImageOptions<VALUE, THEME>> extends DImageBase<VALUE, THEME, OPTIONS> {
    protected getType(): string;
}
