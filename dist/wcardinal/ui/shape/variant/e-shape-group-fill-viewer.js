/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeGroupFillViewer = /** @class */ (function () {
    function EShapeGroupFillViewer() {
        // DO NOTHING
    }
    Object.defineProperty(EShapeGroupFillViewer.prototype, "enable", {
        get: function () {
            return true;
        },
        set: function (enable) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupFillViewer.prototype, "color", {
        get: function () {
            return 0xffffff;
        },
        set: function (color) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupFillViewer.prototype, "alpha", {
        get: function () {
            return 1.0;
        },
        set: function (alpha) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupFillViewer.prototype.copy = function (target) {
        // DO NOTHING
    };
    EShapeGroupFillViewer.prototype.set = function (enable, color, alpha) {
        // DO NOTHING
    };
    EShapeGroupFillViewer.prototype.clone = function () {
        return new EShapeGroupFillViewer();
    };
    EShapeGroupFillViewer.prototype.toObject = function () {
        return {
            enable: true,
            color: 0xffffff,
            alpha: 1.0
        };
    };
    EShapeGroupFillViewer.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupFillViewer.prototype.deserialize = function (target, manager) {
        //
    };
    return EShapeGroupFillViewer;
}());
export { EShapeGroupFillViewer };
//# sourceMappingURL=e-shape-group-fill-viewer.js.map