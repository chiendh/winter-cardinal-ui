import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";
export interface EShapeLineOfAnyPointsPoint {
    id: number;
    x: EShapeLineOfAnyValue;
    y: EShapeLineOfAnyValue;
    limit: number | null;
    set(x?: EShapeLineOfAnyValue, y?: EShapeLineOfAnyValue): void;
    getX(index: number): number;
    getY(index: number): number;
    getLimit(): number;
    isStaticX(): boolean;
    isStaticY(): boolean;
    toDirty(): void;
}
