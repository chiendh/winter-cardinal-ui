import { EShape } from "../e-shape";
import { EShapeTransform } from "../e-shape-transform";
export interface EShapeGroupSizeParent {
    readonly children: EShape[];
    readonly transform: EShapeTransform;
    updateTransform(): void;
    disallowOnTransformChange(): void;
    allowOnTransformChange(invokeOnTransformChange: boolean): void;
    onSizeChange(): void;
}
