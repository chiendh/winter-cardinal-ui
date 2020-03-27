/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var ESnapperTargetValueType;
(function (ESnapperTargetValueType) {
    ESnapperTargetValueType[ESnapperTargetValueType["HORIZONTAL"] = 0] = "HORIZONTAL";
    ESnapperTargetValueType[ESnapperTargetValueType["VERTICAL"] = 1] = "VERTICAL";
})(ESnapperTargetValueType || (ESnapperTargetValueType = {}));
var ESnapperTargetValue = /** @class */ (function () {
    function ESnapperTargetValue(type, position) {
        this.type = type;
        this.position = position;
    }
    ESnapperTargetValue.prototype.serialize = function () {
        return [this.type, this.position];
    };
    return ESnapperTargetValue;
}());
export { ESnapperTargetValue };
//# sourceMappingURL=e-snapper-target-value.js.map