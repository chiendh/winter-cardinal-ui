/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeGroupTextOutlineViewer = /** @class */ (function () {
    function EShapeGroupTextOutlineViewer() {
        // DO NOTHING
    }
    Object.defineProperty(EShapeGroupTextOutlineViewer.prototype, "enable", {
        get: function () {
            return false;
        },
        set: function (enable) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextOutlineViewer.prototype, "color", {
        get: function () {
            return 0xffffff;
        },
        set: function (color) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextOutlineViewer.prototype, "alpha", {
        get: function () {
            return 1.0;
        },
        set: function (alpha) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupTextOutlineViewer.prototype, "width", {
        get: function () {
            return 1.0;
        },
        set: function (width) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupTextOutlineViewer.prototype.copy = function (target) {
        // DO NOTHING
    };
    EShapeGroupTextOutlineViewer.prototype.set = function (enable, color, alpha, width) {
        // DO NOTHING
    };
    EShapeGroupTextOutlineViewer.prototype.clone = function () {
        return new EShapeGroupTextOutlineViewer();
    };
    EShapeGroupTextOutlineViewer.prototype.toObject = function () {
        return {
            enable: false,
            color: 0xffffff,
            alpha: 1.0,
            width: 1.0
        };
    };
    EShapeGroupTextOutlineViewer.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupTextOutlineViewer.prototype.deserialize = function (target, manager) {
        //
    };
    return EShapeGroupTextOutlineViewer;
}());
export { EShapeGroupTextOutlineViewer };
//# sourceMappingURL=e-shape-group-text-outline-viewer.js.map