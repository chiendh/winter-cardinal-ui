import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";
export interface EShapeLineOfAnyPointsStroke {
    id: number;
    color: EShapeLineOfAnyValue;
    alpha: EShapeLineOfAnyValue;
    set(color?: EShapeLineOfAnyValue, alpha?: EShapeLineOfAnyValue): void;
    getColor(index: number, def: number): number;
    getAlpha(index: number, def: number): number;
    isStaticColor(): boolean;
    isStaticAlpha(): boolean;
    toDirty(): void;
}
