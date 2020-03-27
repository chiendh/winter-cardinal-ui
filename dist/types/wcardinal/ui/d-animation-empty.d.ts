import { utils } from "pixi.js";
import { DAnimation, DAnimationOnEnd, DAnimationOnTime, DAnimationOptions } from "./d-animation";
export declare class DAnimationEmpty<TARGET = unknown> extends utils.EventEmitter implements DAnimation<TARGET> {
    protected _reverse: boolean;
    protected _onTime: DAnimationOnTime<TARGET> | undefined;
    protected _onStart: DAnimationOnEnd<TARGET> | undefined;
    protected _onEnd: DAnimationOnEnd<TARGET> | undefined;
    protected _target: TARGET | null;
    protected _isStarted: boolean;
    constructor(options?: DAnimationOptions<TARGET>);
    get target(): TARGET | null;
    set target(target: TARGET | null);
    get duration(): number;
    set duration(duration: number);
    start(reverse?: boolean): void;
    protected onStart(isReverse: boolean): void;
    protected onTime(time: number, isReverse: boolean, elapsedTime: number): void;
    protected onEnd(isReverse: boolean): void;
    isStarted(): boolean;
    isReverse(): boolean;
    stop(): void;
    end(): void;
}
