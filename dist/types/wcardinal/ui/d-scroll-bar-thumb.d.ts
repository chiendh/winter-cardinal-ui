import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { UtilDrag } from "./util/util-drag";
export interface DScrollBarThumbOptions extends DBaseOptions<DThemeScrollBarThumb> {
}
export interface DThemeScrollBarThumb extends DThemeBase {
    getMinimumSize(): number;
}
export declare abstract class DScrollBarThumb extends DBase<DThemeScrollBarThumb, DScrollBarThumbOptions> {
    protected _dragUtil: UtilDrag;
    protected init(options?: DScrollBarThumbOptions): void;
    getMinimumSize(): number;
    protected getType(): string;
    protected abstract onDragMove(dx: number, dy: number): void;
}
