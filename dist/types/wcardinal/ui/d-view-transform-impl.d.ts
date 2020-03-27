import { DAnimation } from "./d-animation";
import { DBase } from "./d-base";
import { DViewStopper } from "./d-view-stopper";
import { DViewTarget, DViewToTarget } from "./d-view-to-target";
import { DViewTransform } from "./d-view-transform";
export declare class DViewTransformImpl implements DViewTransform {
    protected _parent: DBase;
    protected _toTarget: DViewToTarget;
    protected _newX: number;
    protected _newY: number;
    protected _newScaleX: number;
    protected _newScaleY: number;
    protected _oldX: number;
    protected _oldY: number;
    protected _oldScaleX: number;
    protected _oldScaleY: number;
    protected _animation: DAnimation;
    protected _stopper: DViewStopper;
    protected _duration: number;
    constructor(parent: DBase, toTarget: DViewToTarget, stopper: DViewStopper, duration: number);
    protected onTime(time: number): void;
    start(target: DViewTarget, x: number, Y: number, scaleX: number, scaleY: number, duration?: number, stop?: boolean): void;
    stop(): void;
}
