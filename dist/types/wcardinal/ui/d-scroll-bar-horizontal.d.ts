import { DScrollBar, DScrollBarOptions } from "./d-scroll-bar";
import { DScrollBarThumb, DScrollBarThumbOptions } from "./d-scroll-bar-thumb";
export declare class DScrollBarHorizontal extends DScrollBar {
    protected init(options?: DScrollBarOptions): void;
    protected createThumb(options?: DScrollBarThumbOptions): DScrollBarThumb;
    onRegionChange(): void;
}
