import { DBaseState } from "./d-base-state";
/**
 * A {@link DBaseState}-aware function returning R.
 */
export declare type DStateAware<R> = (state: DBaseState) => R;
/**
 * R or a {@link DBaseState}-aware function returning R.
 */
export declare type DStateAwareOrValue<R> = DStateAware<R> | R;
/**
 * R or a {@link DBaseState}-aware function returning R.
 * If a computed value is undefined, the computed value is supposed to be ignored.
 */
export declare type DStateAwareOrValueMightBe<R> = DStateAwareOrValue<R | undefined>;
