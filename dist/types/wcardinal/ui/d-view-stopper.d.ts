export interface DViewStopper {
    stop(): void;
    toNormalizedScale(scale: number): number;
}
