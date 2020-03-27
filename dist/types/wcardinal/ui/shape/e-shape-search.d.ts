import { EShape } from "./e-shape";
import { EShapeContainer } from "./e-shape-container";
import { EShapeType } from "./e-shape-type";
export declare class EShapeSearch {
    static COMPARATOR_INDEX: (a: EShape, b: EShape) => number;
    static toIndices(shapes: EShape[]): number[];
    static toDepth(shape: EShape): number;
    static toSharedParent(first: EShape, shape: EShape): EShape | EShapeContainer;
    static toOfParent(shape: EShape, parent: EShape | EShapeContainer): EShape;
    static isParent(shape: EShape, target: EShape | null): boolean;
    static toSelected(shape: EShape): EShape | null;
    static findChildById(shape: {
        children: EShape[];
    }, id: string, recursively?: boolean): EShape | null;
    static findChildByType(shape: {
        children: EShape[];
    }, type: EShapeType, recursively?: boolean): EShape | null;
    static findChild(shape: {
        children: EShape[];
    }, matcher: (shape: EShape) => boolean, recursively?: boolean): EShape | null;
    static findChildrenByType(shape: {
        children: EShape[];
    }, type: EShapeType, recursively?: boolean, result?: EShape[]): EShape[];
    static findChildren(shape: {
        children: EShape[];
    }, matcher: (shape: EShape) => boolean, recursively?: boolean, result?: EShape[]): EShape[];
}
