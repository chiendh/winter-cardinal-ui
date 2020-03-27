/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { ObservablePoint } from "pixi.js";
var DDiagramCanvasTileMappingPointImpl = /** @class */ (function (_super) {
    __extends(DDiagramCanvasTileMappingPointImpl, _super);
    function DDiagramCanvasTileMappingPointImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DDiagramCanvasTileMappingPointImpl.prototype, "lon", {
        get: function () {
            return this.x;
        },
        set: function (lon) {
            this.x = lon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDiagramCanvasTileMappingPointImpl.prototype, "lat", {
        get: function () {
            return this.y;
        },
        set: function (lat) {
            this.y = lat;
        },
        enumerable: true,
        configurable: true
    });
    DDiagramCanvasTileMappingPointImpl.prototype.toObject = function () {
        return {
            lon: this.x,
            lat: this.y
        };
    };
    return DDiagramCanvasTileMappingPointImpl;
}(ObservablePoint));
export { DDiagramCanvasTileMappingPointImpl };
//# sourceMappingURL=d-diagram-canvas-mapping-point-impl.js.map