import { EShape } from "./e-shape";
export declare class EShapeRendererIteratorDatum {
    protected index: number;
    protected shapes: EShape[];
    constructor();
    reset(shapes: EShape[]): void;
    next(): EShape | null;
}
