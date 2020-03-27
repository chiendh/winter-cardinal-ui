import { DBaseOptions, DThemeBase } from "./d-base";
import { DCorner } from "./d-corner";
import { DCornerMask } from "./d-corner-mask";
declare type Callback = () => void;
export declare class DBaseCorner implements DCorner {
    protected _theme: DThemeBase;
    protected _radius?: number;
    protected _mask?: DCornerMask;
    protected _callback: Callback | undefined;
    constructor(theme: DThemeBase, options?: DBaseOptions<any>, callback?: () => void);
    getTheme(): DThemeBase;
    setTheme(theme: DThemeBase): void;
    getRadius(): number;
    get radius(): number | undefined;
    set radius(radius: number | undefined);
    getMask(): DCornerMask;
    get mask(): DCornerMask | undefined;
    set mask(mask: DCornerMask | undefined);
    set(radius?: number, mask?: DCornerMask): void;
}
export {};
