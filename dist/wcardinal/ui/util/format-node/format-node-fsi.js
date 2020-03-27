/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { FormatNodePrecision } from "./format-node-precision";
var FormatNodefsi = /** @class */ (function (_super) {
    __extends(FormatNodefsi, _super);
    function FormatNodefsi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatNodefsi.prototype.format = function (target, step, date) {
        var abs = this.toAbs(target, step, date);
        if (abs < 1e-24) {
            return this.format_(target, 1e+00, "");
        }
        else if (abs < 1e-21) {
            return this.format_(target, 1e+24, "y");
        }
        else if (abs < 1e-18) {
            return this.format_(target, 1e+21, "z");
        }
        else if (abs < 1e-15) {
            return this.format_(target, 1e+18, "a");
        }
        else if (abs < 1e-12) {
            return this.format_(target, 1e+15, "f");
        }
        else if (abs < 1e-09) {
            return this.format_(target, 1e+12, "p");
        }
        else if (abs < 1e-06) {
            return this.format_(target, 1e+09, "n");
        }
        else if (abs < 1e-03) {
            return this.format_(target, 1e+06, "μ");
        }
        else if (abs < 1e+00) {
            return this.format_(target, 1e+03, "m");
        }
        else if (abs < 1e+03) {
            return this.format_(target, 1e+00, "");
        }
        else if (abs < 1e+06) {
            return this.format_(target, 1e-03, "k");
        }
        else if (abs < 1e+09) {
            return this.format_(target, 1e-06, "M");
        }
        else if (abs < 1e+12) {
            return this.format_(target, 1e-09, "G");
        }
        else if (abs < 1e+15) {
            return this.format_(target, 1e-12, "T");
        }
        else if (abs < 1e+18) {
            return this.format_(target, 1e-15, "P");
        }
        else if (abs < 1e+21) {
            return this.format_(target, 1e-18, "E");
        }
        else if (abs < 1e+24) {
            return this.format_(target, 1e-21, "Z");
        }
        else {
            return this.format_(target, 1e-24, "Y");
        }
    };
    FormatNodefsi.prototype.toAbs = function (target, step, date) {
        return Math.abs(target);
    };
    FormatNodefsi.prototype.format_ = function (target, unitInverse, postfix) {
        var value = target * unitInverse;
        return "" + value.toFixed(this.precision) + postfix;
    };
    return FormatNodefsi;
}(FormatNodePrecision));
export { FormatNodefsi };
//# sourceMappingURL=format-node-fsi.js.map