import { DAnimation } from "../d-animation";
import { UtilDragEasingHistory } from "./util-drag-easing-history";
export declare type UtilDragEasingOnMove = (dx: number, dy: number, ds: number, time: number) => void;
export interface UtilDragEasingDurationOptions {
    position?: number;
    scale?: number;
}
export interface UtilDragEasingOptions {
    duration?: number | UtilDragEasingDurationOptions;
}
export declare class UtilDragEasing {
    protected static HISTORY_CAPACITY: number;
    protected _histories: UtilDragEasingHistory[];
    protected _historiesSorted: UtilDragEasingHistory[];
    protected _historyBegin: number;
    protected _historyEnd: number;
    protected _animation: DAnimation;
    protected _dx: number;
    protected _dy: number;
    protected _dt: number;
    protected _ds: number;
    protected _durationPosition: number;
    protected _durationScale: number;
    protected _onMove: UtilDragEasingOnMove;
    constructor(onMove: UtilDragEasingOnMove, options?: UtilDragEasingOptions);
    onStart(): void;
    onMove(dx: number, dy: number, ds: number, dt: number): void;
    protected updateHistoriesSorted(dt: number): number;
    onEnd(ldt: number): void;
    protected onEase(time: number): void;
    stop(): void;
}
