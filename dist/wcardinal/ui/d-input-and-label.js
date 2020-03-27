/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DInputLabel } from "./d-input-label";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
var DInputAndLabel = /** @class */ (function (_super) {
    __extends(DInputAndLabel, _super);
    function DInputAndLabel(options) {
        var _this = _super.call(this, options) || this;
        _this.addChild(_this._label = new DInputLabel(options != null ? options.label : undefined));
        _this.addChild(_this._input = _this.createInput(options != null ? options.input : undefined));
        if (options != null && options.space != null) {
            _this.addChild(new DLayoutSpace(options.space));
        }
        return _this;
    }
    Object.defineProperty(DInputAndLabel.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DInputAndLabel.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    DInputAndLabel.prototype.getType = function () {
        return "DInputAndLabel";
    };
    return DInputAndLabel;
}(DLayoutHorizontal));
export { DInputAndLabel };
//# sourceMappingURL=d-input-and-label.js.map