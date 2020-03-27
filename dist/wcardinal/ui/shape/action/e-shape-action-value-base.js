import { DThemes } from "../../theme/d-themes";
var EShapeActionValueBase = /** @class */ (function () {
    function EShapeActionValueBase(type, condition) {
        this.type = type;
        this.condition = condition;
    }
    EShapeActionValueBase.prototype.isEquals = function (value) {
        return (this.type === value.type &&
            this.condition === value.condition);
    };
    EShapeActionValueBase.prototype.toLabel = function () {
        return DThemes.getInstance().get("EShapeActionValue").toLabel(this);
    };
    return EShapeActionValueBase;
}());
export { EShapeActionValueBase };
//# sourceMappingURL=e-shape-action-value-base.js.map