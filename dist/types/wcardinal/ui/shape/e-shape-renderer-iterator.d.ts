import { EShape } from "./e-shape";
import { EShapeRendererIteratorDatum } from "./e-shape-renderer-iterator-datum";
export declare class EShapeRendererIterator {
    protected _index: number;
    protected _data: EShapeRendererIteratorDatum[];
    protected _datum: EShapeRendererIteratorDatum;
    protected _current: EShape | null;
    constructor();
    reset(shapes: EShape[]): EShape | null;
    get(): EShape | null;
    next(): EShape | null;
}
