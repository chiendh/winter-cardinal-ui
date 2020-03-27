import { EShapePointsStyle } from "../e-shape-points-style";
export var toScaleInvariant = function (style) {
    var nonExpandingWidth = (style & EShapePointsStyle.NON_EXPANDING_WIDTH ? 1 : 0);
    var nonShrinkingWidth = (style & EShapePointsStyle.NON_SHRINKING_WIDTH ? 2 : 0);
    var nonScalingDotAndDash = (style & EShapePointsStyle.NON_SCALING_DOT_AND_DASH ? 4 : 0);
    if (style & EShapePointsStyle.NON_SOLID_MASK) {
        return nonExpandingWidth | nonShrinkingWidth | nonScalingDotAndDash;
    }
    else {
        return nonExpandingWidth | nonShrinkingWidth;
    }
};
//# sourceMappingURL=to-scale-invariant.js.map