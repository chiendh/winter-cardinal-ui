import { IPoint, Rectangle } from "pixi.js";
export interface UtilAttachTarget {
    readonly width: number;
    readonly height: number;
    readonly position: IPoint;
}
export declare enum UtilAttachAlign {
    TOP = 0,
    LEFT = 1,
    RIGHT = 2,
    BOTTOM = 3
}
export declare class UtilAttach {
    static attach(target: UtilAttachTarget, bounds: Rectangle, offsetX: number, offsetY: number, clippingWidth: number, clippingHeight: number, align: UtilAttachAlign): void;
    static adjust(positionFirst: number, positionSecond: number, size: number, clippingSize: number): number;
}
