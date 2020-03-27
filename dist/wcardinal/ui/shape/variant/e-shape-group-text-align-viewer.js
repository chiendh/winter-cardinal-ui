/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
var EShapeGroupTextAlignViewer = /** @class */ (function () {
    function EShapeGroupTextAlignViewer() {
        // DO NOTHING
    }
    Object.defineProperty(EShapeGroupTextAlignViewer.prototype, "horizontal", {
        get: function () {
            return EShapeTextAlignHorizontal.CENTER;
        },
        set: function (horizontal) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextAlignViewer.prototype, "vertical", {
        get: function () {
            return EShapeTextAlignVertical.MIDDLE;
        },
        set: function (vertical) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextAlignViewer.prototype.copy = function (target) {
        // DO NOTHING
    };
    EShapeGroupTextAlignViewer.prototype.set = function (horizontal, vertical) {
        // DO NOTHING
    };
    EShapeGroupTextAlignViewer.prototype.toObject = function () {
        return {
            horizontal: EShapeTextAlignHorizontal.CENTER,
            vertical: EShapeTextAlignVertical.MIDDLE
        };
    };
    EShapeGroupTextAlignViewer.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextAlignViewer.prototype.deserialize = function (target, manager) {
        // DO NOTHING
    };
    return EShapeGroupTextAlignViewer;
}());
export { EShapeGroupTextAlignViewer };
//# sourceMappingURL=e-shape-group-text-align-viewer.js.map