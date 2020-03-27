import { DBase } from "../d-base";
export interface UtilTransitionOptions {
    duration?: number;
}
export declare class UtilTransition {
    protected _duration: number;
    protected _current: DBase<any, any> | null;
    protected _lastUpdate: number;
    protected _updateId: number | null;
    constructor(options?: UtilTransitionOptions);
    show(next: DBase<any, any> | null, forcibly?: boolean): void;
    protected update(now: number, next: DBase<any, any> | null): void;
    hide(): void;
}
