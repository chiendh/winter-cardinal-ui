import { utils } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DButtonBase } from "./d-button-base";
declare type BUTTON = DButtonBase<any, any, any>;
export interface DButtonGroupOptions {
    on?: {
        [name: string]: Function;
    };
}
export declare class DButtonGroup extends utils.EventEmitter {
    protected _buttons: BUTTON[];
    protected _active: BUTTON | null;
    protected _stateOn: DBaseState;
    protected _stateOff: DBaseState;
    protected _onActiveBound: (button: BUTTON) => void;
    constructor(options?: DButtonGroupOptions);
    add(button: BUTTON): void;
    get active(): BUTTON | null;
    protected onActive(active: BUTTON): void;
    remove(button: BUTTON): void;
    contains(button: BUTTON): boolean;
    setHovered(isHovered: boolean): this;
    setActive(isActive: boolean): this;
    setReadOnly(isReadOnly: boolean): this;
    setDisabled(isDisabled: boolean): this;
    setDragging(isDragging: boolean): this;
    isHovered(): boolean;
    isActive(): boolean;
    isReadOnly(): boolean;
    isDisabled(): boolean;
    isDragging(): boolean;
    isFocused(): boolean;
    isUnfocusable(): boolean;
    setState(state: DBaseState, isOn: boolean): this;
    hasState(state: DBaseState): boolean;
    clear(): void;
    destroy(): void;
}
export {};
