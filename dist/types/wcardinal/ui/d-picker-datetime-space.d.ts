import { DBase, DBaseOptions, DThemeBase } from "./d-base";
export interface DPickerDatetimeSpaceOptions<THEME extends DThemePickerDatetimeSpace = DThemePickerDatetimeSpace> extends DBaseOptions<THEME> {
}
export interface DThemePickerDatetimeSpace extends DThemeBase {
}
export declare class DPickerDatetimeSpace<THEME extends DThemePickerDatetimeSpace = DThemePickerDatetimeSpace, OPTIONS extends DPickerDatetimeSpaceOptions<THEME> = DPickerDatetimeSpaceOptions<THEME>> extends DBase<THEME, OPTIONS> {
    constructor(options?: OPTIONS);
    protected getType(): string;
}
