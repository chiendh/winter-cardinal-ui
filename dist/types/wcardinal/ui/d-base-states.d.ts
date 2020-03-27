import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
export declare class DBaseStates {
    static is(target: DBaseState, state: DBaseState): boolean;
    static isHovered(target: DBaseState): boolean;
    static isDragging(target: DBaseState): boolean;
    static isFocused(target: DBaseState): boolean;
    static isFocusedIn(target: DBaseState): boolean;
    static isActive(target: DBaseState): boolean;
    static isActiveIn(target: DBaseState): boolean;
    static isNotActive(state: DBaseState): boolean;
    static isPressed(target: DBaseState): boolean;
    static isDisabled(target: DBaseState): boolean;
    static isReadOnly(target: DBaseState): boolean;
    static isActionable(target: DBaseState): boolean;
    static isInvalid(target: DBaseState): boolean;
    static isSucceeded(target: DBaseState): boolean;
    static isFailed(target: DBaseState): boolean;
    static bind(destination: DBase<any, any>, destinationState: DBaseState, source: DBase<any, any>, when: (sourceState: DBaseState) => boolean): void;
    static disable(destination: DBase<any, any>, source: DBase<any, any>, when?: (sourceState: DBaseState) => boolean): void;
}
