import { __extends } from "tslib";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
var EShapeActionValueSubtyped = /** @class */ (function (_super) {
    __extends(EShapeActionValueSubtyped, _super);
    function EShapeActionValueSubtyped(type, condition, subtype) {
        var _this = _super.call(this, type, condition) || this;
        _this.subtype = subtype;
        return _this;
    }
    EShapeActionValueSubtyped.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueSubtyped) &&
            this.subtype === value.subtype);
    };
    return EShapeActionValueSubtyped;
}(EShapeActionValueBase));
export { EShapeActionValueSubtyped };
//# sourceMappingURL=e-shape-action-value-subtyped.js.map