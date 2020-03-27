import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DScrollBarThumb, DScrollBarThumbOptions } from "./d-scroll-bar-thumb";
export interface DScrollBarOptions extends DBaseOptions<DThemeScrollBar> {
    thumb?: DScrollBarThumbOptions;
}
export interface DThemeScrollBar extends DThemeBase {
}
export declare abstract class DScrollBar extends DBase<DThemeScrollBar, DScrollBarOptions> {
    protected _start: number;
    protected _end: number;
    protected _thumb: DScrollBarThumb;
    protected init(options?: DScrollBarOptions): void;
    get thumb(): DScrollBarThumb;
    protected abstract createThumb(options?: DScrollBarThumbOptions): DScrollBarThumb;
    protected getType(): string;
    setRegion(start: number, end: number, size: number): void;
    isRegionVisible(): boolean;
    onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;
    onRegionChange(): void;
    getRegionStart(): number;
    getRegionEnd(): number;
}
