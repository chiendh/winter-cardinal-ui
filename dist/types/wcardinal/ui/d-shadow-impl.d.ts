import { NineSlicePlane, Texture } from "pixi.js";
import { DBase } from "./d-base";
import { DShadow } from "./d-shadow";
export declare class DShadowImpl extends NineSlicePlane implements DShadow {
    protected _offsetX: number;
    protected _offsetY: number;
    protected _shiftX: number;
    protected _shiftY: number;
    constructor(texture: Texture, width: number, height: number, offsetX: number, offsetY: number);
    protected onTextureUpdate(): void;
    onReflow(base: DBase, width: number, height: number): void;
}
