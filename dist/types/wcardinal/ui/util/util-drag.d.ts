import { interaction, Point } from "pixi.js";
import { DBase } from "../d-base";
import { DMouseModifier } from "../d-mouse-modifier";
import { UtilDragEasing, UtilDragEasingOptions } from "./util-drag-easing";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
export declare type UtilDragOnMove = (dx: number, dy: number, x: number, y: number, ds: number) => void;
export declare type UtilDragOnStart = () => void;
export declare type UtilDragOnEnd = () => void;
export declare type UtilDragChecker = (e: InteractionEvent, modifier: DMouseModifier, target: DBase) => boolean;
export interface UtilDragCheckerOptions {
    start?: UtilDragChecker;
    move?: UtilDragChecker;
}
export interface UtilDragOnOptions {
    start?: UtilDragOnStart;
    move?: UtilDragOnMove;
    end?: UtilDragOnEnd;
}
export interface UtilDragOptions {
    target: DBase;
    touch?: boolean;
    modifier?: DMouseModifier;
    checker?: UtilDragCheckerOptions;
    easing?: boolean | UtilDragEasingOptions;
    bind?: boolean;
    on?: UtilDragOnOptions;
}
export declare class UtilDrag {
    protected static EPSILON: number;
    protected _target: DBase<any, any>;
    protected _onDownBound: (e: InteractionEvent) => void;
    protected _onMoveBound: (e: InteractionEvent) => void;
    protected _onEndBound: (e: InteractionEvent) => void;
    protected _onStart?: UtilDragOnStart;
    protected _onMove?: UtilDragOnMove;
    protected _onEnd?: UtilDragOnEnd;
    protected _down: string;
    protected _move: string;
    protected _up: string;
    protected _easing?: UtilDragEasing;
    protected _modifier: DMouseModifier;
    protected _checker: {
        start: UtilDragChecker;
        move: UtilDragChecker;
    };
    protected _interactionManager: InteractionManager | null;
    protected _center: Point;
    protected _scale: number;
    protected _scalingCenter: Point;
    protected _time: number;
    constructor(options: UtilDragOptions);
    protected calcCenterAndScale(e: InteractionEvent, center: Point, interactionManager: InteractionManager): number;
    onDown(e: InteractionEvent): void;
    protected onMove(e: InteractionEvent): void;
    protected onEnd(e: InteractionEvent): void;
    protected onEasingMove(dx: number, dy: number, ds: number, time: number): void;
    stop(): void;
}
