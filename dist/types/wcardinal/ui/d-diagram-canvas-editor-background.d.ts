import { DBackgroundStateAware } from "./d-background";
import { DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
export declare class DDiagramCanvasEditorBackground implements DBackgroundStateAware {
    protected _target: DBackgroundStateAware;
    protected _base: number | null;
    constructor(target: DBackgroundStateAware, base: number | null);
    getTheme(): DThemeBase;
    setTheme(theme: DThemeBase): void;
    getBaseColor(): number | null;
    setBaseColor(baseColor: number | null): void;
    getColor(state: DBaseState): number | null;
    get color(): DStateAwareOrValueMightBe<number | null>;
    set color(color: DStateAwareOrValueMightBe<number | null>);
    getAlpha(state: DBaseState): number;
    get alpha(): DStateAwareOrValueMightBe<number>;
    set alpha(alpha: DStateAwareOrValueMightBe<number>);
}
