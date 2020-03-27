/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isNumber } from "../../util/is-number";
var EShapeActionValues = /** @class */ (function () {
    function EShapeActionValues() {
    }
    EShapeActionValues.toResource = function (index, parsed, resources) {
        if (0 <= index && index < parsed.length) {
            var id = parsed[index];
            if (isNumber(id) && 0 <= id && id < resources.length) {
                return resources[id];
            }
        }
        return "";
    };
    return EShapeActionValues;
}());
export { EShapeActionValues };
//# sourceMappingURL=e-shape-action-values.js.map