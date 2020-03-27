import { isNumber } from "../util/is-number";
import { isString } from "../util/is-string";
import { EShapePointsStyle } from "./e-shape-points-style";
var EShapePointsStyles = /** @class */ (function () {
    function EShapePointsStyles() {
    }
    EShapePointsStyles.from = function (style) {
        if (isString(style)) {
            return EShapePointsStyle[style];
        }
        else if (isNumber(style)) {
            return style;
        }
        else {
            var result = EShapePointsStyle.NONE;
            for (var i = 0, imax = style.length; i < imax; ++i) {
                result |= EShapePointsStyle[style[i]];
            }
            return result;
        }
    };
    return EShapePointsStyles;
}());
export { EShapePointsStyles };
//# sourceMappingURL=e-shape-points-styles.js.map