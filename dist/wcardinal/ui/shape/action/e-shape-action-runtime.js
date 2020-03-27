/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCanvasContainer } from "../../d-canvas-container";
import { EShapeRuntimeReset } from "../e-shape-runtime";
var EShapeActionRuntime = /** @class */ (function () {
    function EShapeActionRuntime(reset) {
        this.reset = reset || EShapeRuntimeReset.NONE;
    }
    EShapeActionRuntime.prototype.toExpression = function (expression, def, defLiteral) {
        if (expression.trim().length <= 0) {
            return def;
        }
        try {
            return Function("shape", "time", "try{ with( shape ) { return (" + expression + "); } } catch( e ) { return " + defLiteral + "; }");
        }
        catch (e) {
            return def;
        }
    };
    EShapeActionRuntime.prototype.toContainer = function (shape) {
        var current = shape;
        while (current != null) {
            if (current instanceof DCanvasContainer) {
                return current;
            }
            current = current.parent;
        }
        return null;
    };
    EShapeActionRuntime.prototype.execute = function (shape, runtime, time) {
        // OVERRIDE THIS
    };
    return EShapeActionRuntime;
}());
export { EShapeActionRuntime };
//# sourceMappingURL=e-shape-action-runtime.js.map