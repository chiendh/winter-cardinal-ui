import { utils } from "pixi.js";
/**
 * A function called when an animation starts.
 *
 * @param isReverse true if an animation is playing in reverse
 * @param animation an instance
 */
export declare type DAnimationOnStart<TARGET> = (isReverse: boolean, animation: DAnimation<TARGET>) => void;
/**
 * A function called constantly when an animation is on a run.
 *
 * @param time a timing value in a range [0, 1]
 * @param isReverse true if an animation is playing in reverse
 * @param elapsedTime an elapsed time since an animation has started
 * @param animation an instance
 */
export declare type DAnimationOnTime<TARGET> = (time: number, isReverse: boolean, elapsedTime: number, animation: DAnimation<TARGET>) => void;
/**
 * Triggered when an animation stops.
 *
 * @param isReverse true if an animation is playing in reverse
 * @param animation an instance
 */
export declare type DAnimationOnEnd<TARGET> = (isReverse: boolean, animation: DAnimation<TARGET>) => void;
/**
 * An easing function.
 *
 * @param time a normalized elapsed time
 * @param animation an instance
 */
export declare type DAnimationTiming<TARGET> = (time: number, animation: DAnimation<TARGET>) => number;
/**
 * Mappings of event names and handlers.
 */
export interface DAnimationOnOptions<TARGET> {
    [name: string]: Function | undefined;
    /**
     * Triggered when an animation starts.
     *
     * @param isReverse true if an animation is playing in reverse
     * @param animation an instance
     */
    start?: (isReverse: boolean, animation: DAnimation<TARGET>) => void;
    /**
     * Triggered constantly when an animation is on a run.
     *
     * @param time a timing value in a range [0, 1]
     * @param isReverse true if an animation is playing in reverse
     * @param elapsedTime an elapsed time since an animation has started
     * @param animation an instance
     */
    time?: (time: number, isReverse: boolean, elapsedTime: number, animation: DAnimation<TARGET>) => void;
    /**
     * Triggered when an animation stops.
     *
     * @param isReverse true if an animation is playing in reverse
     * @param animation an instance
     */
    end?: (isReverse: boolean, animation: DAnimation<TARGET>) => void;
}
/**
 * An animation options.
 */
export interface DAnimationOptions<TARGET> {
    /**
     * An animation target.
     */
    target?: TARGET | null;
    /**
     * A function called when an animation starts.
     */
    onStart?: DAnimationOnStart<TARGET>;
    /**
     * A function called constantly when an animation is on a run.
     */
    onTime?: DAnimationOnTime<TARGET>;
    /**
     * Triggered when an animation stops.
     */
    onEnd?: DAnimationOnEnd<TARGET>;
    timing?: DAnimationTiming<TARGET>;
    /**
     * An animation duration.
     */
    duration?: number;
    /**
     * Event handlers.
     */
    on?: DAnimationOnOptions<TARGET>;
}
export interface DAnimation<TARGET = unknown> extends utils.EventEmitter {
    /**
     * An animation target.
     */
    target: TARGET | null;
    /**
     * An animation duration.
     */
    duration: number;
    /**
     * Starts an animation.
     *
     * @param reverse true to play in reverse.
     */
    start(reverse?: boolean): void;
    /**
     * Returns true if an animation is playing.
     */
    isStarted(): boolean;
    /**
     * Returns true if an animation is in a reverse mode.
     */
    isReverse(): boolean;
    /**
     * Stops an animation as is.
     */
    stop(): void;
    /**
     * Moves an animation frame to the end.
     */
    end(): void;
}
