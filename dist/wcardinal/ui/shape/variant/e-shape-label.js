/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";
var EShapeLabel = /** @class */ (function (_super) {
    __extends(EShapeLabel, _super);
    function EShapeLabel(type) {
        if (type === void 0) { type = EShapeType.LABEL; }
        return _super.call(this, type) || this;
    }
    EShapeLabel.prototype.clone = function () {
        return new EShapeLabel().copy(this);
    };
    return EShapeLabel;
}(EShapePrimitive));
export { EShapeLabel };
//# sourceMappingURL=e-shape-label.js.map