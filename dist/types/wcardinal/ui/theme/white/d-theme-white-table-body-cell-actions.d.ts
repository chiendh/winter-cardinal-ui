import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
export declare class DThemeWhiteTableBodyCellActions {
    static init(): void;
    static getImageSource(state: DBaseState): Texture | DisplayObject | null;
    static getImageTintColor(state: DBaseState): number | null;
}
