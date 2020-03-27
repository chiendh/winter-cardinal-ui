import { EShape } from "../e-shape";
import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeStroke, EShapeStrokeLike } from "../e-shape-stroke";
import { EShapeText, EShapeTextLike } from "../e-shape-text";
import { EShapeTextOutline, EShapeTextOutlineLike } from "../e-shape-text-outline";
import { EShapeActionExpression } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";
export declare class EShapeActionRuntimeChangeColorBrightness extends EShapeActionRuntimeConditional {
    protected readonly brightness: EShapeActionExpression<number | null>;
    constructor(value: EShapeActionValueChangeColorBrightness, reset: EShapeRuntimeReset);
    protected set(shape: EShape, runtime: EShapeRuntime, time: number, target: EShapeStroke | EShapeFill | EShapeText | EShapeTextOutline, base: EShapeStrokeLike | EShapeFillLike | EShapeTextLike | EShapeTextOutlineLike): void;
    protected sets(shape: EShape, runtime: EShapeRuntime, time: number, fill: EShapeFill, stroke: EShapeStroke, baseFill: EShapeFillLike, baseStroke: EShapeStrokeLike): void;
    protected setAll(shape: EShape, runtime: EShapeRuntime, time: number, fill: EShapeFill, stroke: EShapeStroke, text: EShapeText, outline: EShapeTextOutline, baseFill: EShapeFillLike, baseStroke: EShapeStrokeLike, baseText: EShapeTextLike, baseOutline: EShapeTextOutlineLike): void;
    protected toColorAdjusted(color: number, brightness: number): number;
}
