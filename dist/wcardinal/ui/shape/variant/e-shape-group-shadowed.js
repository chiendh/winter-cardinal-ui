/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeType } from "../e-shape-type";
import { EShapeGroup } from "./e-shape-group";
import { EShapeGroupSizeShadowed } from "./e-shape-group-size-shadowed";
var EShapeGroupShadowed = /** @class */ (function (_super) {
    __extends(EShapeGroupShadowed, _super);
    function EShapeGroupShadowed(type) {
        if (type === void 0) { type = EShapeType.GROUP_SHADOWED; }
        return _super.call(this, type) || this;
    }
    EShapeGroupShadowed.prototype.newGroupSize = function () {
        if (EShapeDefaults.IS_EDIT_MODE) {
            return new EShapeGroupSizeShadowed(this, EShapeDefaults.SIZE_X, EShapeDefaults.SIZE_Y);
        }
        else {
            return _super.prototype.newGroupSize.call(this);
        }
    };
    return EShapeGroupShadowed;
}(EShapeGroup));
export { EShapeGroupShadowed };
//# sourceMappingURL=e-shape-group-shadowed.js.map