export declare class ESnapperResult {
    distance: number;
    result: number;
    threshold: number;
    constructor();
    reset(value: number, scale: number): void;
    set(value: number, snapped: number): void;
}
