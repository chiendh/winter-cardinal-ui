/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeStrokeSide } from "../e-shape-stroke-side";
var EShapeGroupStrokeViewer = /** @class */ (function () {
    function EShapeGroupStrokeViewer() {
        // DO NOTHING
    }
    Object.defineProperty(EShapeGroupStrokeViewer.prototype, "enable", {
        get: function () {
            return false;
        },
        set: function (enable) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeViewer.prototype, "color", {
        get: function () {
            return 0xffffff;
        },
        set: function (color) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeViewer.prototype, "alpha", {
        get: function () {
            return 1.0;
        },
        set: function (alpha) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeViewer.prototype, "width", {
        get: function () {
            return 1.0;
        },
        set: function (width) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeViewer.prototype, "align", {
        get: function () {
            return 0.0;
        },
        set: function (width) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupStrokeViewer.prototype, "side", {
        get: function () {
            return EShapeStrokeSide.NONE;
        },
        set: function (side) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupStrokeViewer.prototype.copy = function (target) {
        // DO NOTHING
    };
    EShapeGroupStrokeViewer.prototype.set = function (enable, color, alpha, width, side) {
        // DO NOTHING
    };
    EShapeGroupStrokeViewer.prototype.clone = function () {
        return new EShapeGroupStrokeViewer();
    };
    EShapeGroupStrokeViewer.prototype.toObject = function () {
        return {
            enable: false,
            color: 0xffffff,
            alpha: 1.0,
            width: 1.0,
            align: 0.0,
            side: EShapeStrokeSide.NONE
        };
    };
    EShapeGroupStrokeViewer.prototype.serialize = function (manager) {
        return -1;
    };
    EShapeGroupStrokeViewer.prototype.deserialize = function (target, manager) {
        //
    };
    return EShapeGroupStrokeViewer;
}());
export { EShapeGroupStrokeViewer };
//# sourceMappingURL=e-shape-group-stroke-viewer.js.map