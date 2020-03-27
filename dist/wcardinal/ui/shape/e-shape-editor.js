/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Matrix, Point } from "pixi.js";
var EShapeEditor = /** @class */ (function () {
    function EShapeEditor() {
        this.localTransform = new Matrix();
        this.internalTransform = new Matrix();
        this.internalTransformParentInverse = new Matrix();
        this.rotation = 0;
        this.size = new Point();
    }
    return EShapeEditor;
}());
export { EShapeEditor };
//# sourceMappingURL=e-shape-editor.js.map