/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DDiagramCanvasTileMappingPointImpl } from "./d-diagram-canvas-mapping-point-impl";
var DDiagramCanvasTileMappingImpl = /** @class */ (function () {
    function DDiagramCanvasTileMappingImpl(cb, mappingOrEnable, lon0, lat0, lon1, lat1) {
        this._cb = cb;
        if (mappingOrEnable === true || mappingOrEnable === false) {
            this._enable = mappingOrEnable;
            this._from = new DDiagramCanvasTileMappingPointImpl(cb, null, lon0, lat0);
            this._to = new DDiagramCanvasTileMappingPointImpl(cb, null, lon1, lat1);
        }
        else if (mappingOrEnable != null) {
            this._enable = mappingOrEnable.enable;
            this._from = new DDiagramCanvasTileMappingPointImpl(cb, null, mappingOrEnable.from.lon, mappingOrEnable.from.lat);
            this._to = new DDiagramCanvasTileMappingPointImpl(cb, null, mappingOrEnable.to.lon, mappingOrEnable.to.lat);
        }
        else {
            this._enable = false;
            this._from = new DDiagramCanvasTileMappingPointImpl(cb, null, -180, +85.05112877980659);
            this._to = new DDiagramCanvasTileMappingPointImpl(cb, null, +180, -85.05112877980659);
        }
    }
    Object.defineProperty(DDiagramCanvasTileMappingImpl.prototype, "enable", {
        get: function () {
            return this._enable;
        },
        set: function (enable) {
            if (this._enable !== enable) {
                this._enable = enable;
                this._cb();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDiagramCanvasTileMappingImpl.prototype, "from", {
        get: function () {
            return this._from;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDiagramCanvasTileMappingImpl.prototype, "to", {
        get: function () {
            return this._to;
        },
        enumerable: true,
        configurable: true
    });
    DDiagramCanvasTileMappingImpl.prototype.serialize = function () {
        return {
            enable: this._enable,
            from: this._from.toObject(),
            to: this._to.toObject()
        };
    };
    return DDiagramCanvasTileMappingImpl;
}());
export { DDiagramCanvasTileMappingImpl };
//# sourceMappingURL=d-diagram-canvas-mapping-impl.js.map