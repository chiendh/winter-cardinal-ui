/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
var ESnapperGrid = /** @class */ (function (_super) {
    __extends(ESnapperGrid, _super);
    function ESnapperGrid() {
        var _this = _super.call(this) || this;
        _this._isEnabled = true;
        _this._size = 10;
        return _this;
    }
    ESnapperGrid.prototype.toggle = function () {
        this._isEnabled = !this._isEnabled;
        this.emit("change", this);
        return this._isEnabled;
    };
    ESnapperGrid.prototype.enable = function () {
        if (this._isEnabled !== true) {
            this._isEnabled = true;
            this.emit("change", this);
        }
    };
    ESnapperGrid.prototype.disable = function () {
        if (this._isEnabled !== false) {
            this._isEnabled = false;
            this.emit("change", this);
        }
    };
    ESnapperGrid.prototype.isEnabled = function () {
        return this._isEnabled;
    };
    Object.defineProperty(ESnapperGrid.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            if (this._size !== size) {
                this._size = size;
                this.emit("change", size, this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ESnapperGrid.prototype.snap = function (value, result) {
        if (this._isEnabled) {
            var size = this._size;
            result.set(value, Math.round(value / size) * size);
        }
    };
    ESnapperGrid.prototype.reset = function () {
        this._isEnabled = true;
        this._size = 10;
        this.emit("change", this);
    };
    ESnapperGrid.prototype.serialize = function () {
        return [
            (this._isEnabled ? 1 : 0),
            this._size
        ];
    };
    ESnapperGrid.prototype.deserialize = function (serialized) {
        if (serialized[0] !== 0) {
            this.enable();
        }
        else {
            this.disable();
        }
        this.size = serialized[1];
    };
    return ESnapperGrid;
}(utils.EventEmitter));
export { ESnapperGrid };
//# sourceMappingURL=e-snapper-grid.js.map