/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeRuntimeReset } from "../e-shape-runtime";
var EShapeActionBases = /** @class */ (function () {
    function EShapeActionBases() {
    }
    EShapeActionBases.toBaseFill = function (shape, runtime) {
        return (runtime.written & EShapeRuntimeReset.COLOR_FILL ? shape : runtime).fill;
    };
    EShapeActionBases.toBaseStroke = function (shape, runtime) {
        return (runtime.written & EShapeRuntimeReset.COLOR_STROKE ? shape : runtime).stroke;
    };
    EShapeActionBases.toBaseText = function (shape, runtime) {
        return (runtime.written & EShapeRuntimeReset.COLOR_TEXT ? shape : runtime).text;
    };
    EShapeActionBases.toBaseTextOutline = function (shape, runtime) {
        return (runtime.written & EShapeRuntimeReset.COLOR_TEXT_OUTLINE ? shape : runtime).text.outline;
    };
    return EShapeActionBases;
}());
export { EShapeActionBases };
//# sourceMappingURL=e-shape-action-bases.js.map