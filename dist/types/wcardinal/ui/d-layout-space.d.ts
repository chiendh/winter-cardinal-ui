import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DLayoutSpaceOptions<THEME extends DThemeLayoutSpace = DThemeLayoutSpace> extends DBaseOptions<THEME> {
}
export interface DThemeLayoutSpace extends DThemeBase {
}
export declare class DLayoutSpace<THEME extends DThemeLayoutSpace = DThemeLayoutSpace, OPTIONS extends DLayoutSpaceOptions<THEME> = DLayoutSpaceOptions<THEME>> extends DBase<THEME, OPTIONS> {
    constructor(options?: OPTIONS);
    protected getType(): string;
}
