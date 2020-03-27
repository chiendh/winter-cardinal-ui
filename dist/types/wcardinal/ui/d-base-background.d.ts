import { DBackgroundStateAware } from "./d-background";
import { DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
declare type Callback = () => void;
export declare class DBaseBackground implements DBackgroundStateAware {
    protected _theme: DThemeBase;
    protected _color?: DStateAwareOrValueMightBe<number | null>;
    protected _alpha?: DStateAwareOrValueMightBe<number>;
    protected _callback: Callback | undefined;
    constructor(theme: DThemeBase, options?: DBaseOptions<any>, callback?: Callback);
    getTheme(): DThemeBase;
    setTheme(theme: DThemeBase): void;
    getColor(state: DBaseState): number | null;
    get color(): DStateAwareOrValueMightBe<number | null>;
    set color(color: DStateAwareOrValueMightBe<number | null>);
    getAlpha(state: DBaseState): number;
    get alpha(): DStateAwareOrValueMightBe<number>;
    set alpha(alpha: DStateAwareOrValueMightBe<number>);
    protected onChange(): void;
}
export {};
