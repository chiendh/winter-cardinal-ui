/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeCapability } from "./e-shape-capability";
var EShapeCapabilities = /** @class */ (function () {
    function EShapeCapabilities() {
    }
    EShapeCapabilities.get = function (type) {
        return this.mappings[type] || EShapeCapability.PRIMITIVE;
    };
    EShapeCapabilities.contains = function (shape, capability) {
        if (shape != null) {
            if (this.get(shape.type) & capability) {
                return true;
            }
            var children = shape.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                if (this.contains(children[i], capability)) {
                    return true;
                }
            }
        }
        return false;
    };
    EShapeCapabilities.set = function (type, capability) {
        this.mappings[type] = capability;
    };
    EShapeCapabilities.mappings = {};
    return EShapeCapabilities;
}());
export { EShapeCapabilities };
//# sourceMappingURL=e-shape-capabilities.js.map