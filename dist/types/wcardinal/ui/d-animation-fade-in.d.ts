import { DAnimationOptions } from "./d-animation";
import { DAnimationBase } from "./d-animation-base";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DBase } from "./d-base";
export interface DAnimationFadeInShiftOptions {
    x?: number | null;
    y?: number | null;
}
export interface DAnimationFadeInOptions<TARGET> extends DAnimationOptions<TARGET> {
    shift?: DAnimationFadeInShiftOptions;
}
export declare class DAnimationFadeIn<TARGET extends DBase = DBase> extends DAnimationBase<TARGET> {
    protected _shiftX: number;
    protected _shiftY: number;
    protected _storedX: number;
    protected _storedY: number;
    protected _storedAlpha: number;
    protected _storedTime: number;
    protected _storedTarget: TARGET | null;
    protected _layer: DApplicationLayerLike | null;
    protected _onPrerenderBound: () => void;
    protected _onPostrenderBound: () => void;
    constructor(options?: DAnimationFadeInOptions<TARGET>);
    stop(): void;
    protected addEventListeners(target: TARGET): void;
    protected removeEventListeners(): void;
    protected onStart(isReverse: boolean): void;
    protected onTime(time: number, isReverse: boolean, elapsedTime: number): void;
    protected onEnd(isReverse: boolean): void;
    protected onPrerender(): void;
    protected onPostrender(): void;
}
