import { EShape } from "../e-shape";
import { EShapeFillLike } from "../e-shape-fill";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeStrokeLike } from "../e-shape-stroke";
import { EShapeTextLike } from "../e-shape-text";
import { EShapeTextOutlineLike } from "../e-shape-text-outline";
export declare class EShapeActionBases {
    static toBaseFill(shape: EShape, runtime: EShapeRuntime): EShapeFillLike;
    static toBaseStroke(shape: EShape, runtime: EShapeRuntime): EShapeStrokeLike;
    static toBaseText(shape: EShape, runtime: EShapeRuntime): EShapeTextLike;
    static toBaseTextOutline(shape: EShape, runtime: EShapeRuntime): EShapeTextOutlineLike;
}
