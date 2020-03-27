import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DBoardOptions<THEME extends DThemeBoard = DThemeBoard> extends DBaseOptions<THEME> {
}
export interface DThemeBoard extends DThemeBase {
}
export declare class DBoard<THEME extends DThemeBoard = DThemeBoard, OPTIONS extends DBoardOptions<THEME> = DBoardOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected getType(): string;
}
