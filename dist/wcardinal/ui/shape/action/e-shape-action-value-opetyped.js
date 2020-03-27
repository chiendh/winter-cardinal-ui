import { __extends } from "tslib";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
var EShapeActionValueOpetyped = /** @class */ (function (_super) {
    __extends(EShapeActionValueOpetyped, _super);
    function EShapeActionValueOpetyped(type, condition, subtype, opetype) {
        var _this = _super.call(this, type, condition, subtype) || this;
        _this.opetype = opetype;
        return _this;
    }
    EShapeActionValueOpetyped.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueOpetyped) &&
            this.opetype === value.opetype);
    };
    return EShapeActionValueOpetyped;
}(EShapeActionValueSubtyped));
export { EShapeActionValueOpetyped };
//# sourceMappingURL=e-shape-action-value-opetyped.js.map