/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
var EShapeNull = /** @class */ (function (_super) {
    __extends(EShapeNull, _super);
    function EShapeNull(type) {
        if (type === void 0) { type = EShapeType.NULL; }
        return _super.call(this, type) || this;
    }
    EShapeNull.prototype.clone = function () {
        return new EShapeNull().copy(this);
    };
    return EShapeNull;
}(EShapePrimitive));
export { EShapeNull };
//# sourceMappingURL=e-shape-null.js.map