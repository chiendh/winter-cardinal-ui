import { IPoint } from "pixi.js";
declare type Callback = () => any;
export declare class DBasePoint {
    protected _point: IPoint;
    cb: Callback;
    scope: any;
    constructor(point: IPoint, cb: Callback, scope?: any);
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    set(x: number, y: number): this;
    copyFrom(target: IPoint): this;
    copyTo(target: IPoint): IPoint;
    copy(): this;
    clone(cb?: Function, scope?: any): DBasePoint;
    equals(p: IPoint): boolean;
}
export {};
