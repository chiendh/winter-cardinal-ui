/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var FormatNodesdt = /** @class */ (function () {
    function FormatNodesdt(Y, M, D, H, m, s, mi) {
        this.Y = Y;
        this.M = M;
        this.D = D;
        this.H = H;
        this.m = m;
        this.s = s;
        this.mi = mi;
    }
    FormatNodesdt.prototype.format = function (target, step, date) {
        if (step < 1000) {
            return this.s.format(target, step, date) + "." + this.mi.format(target, step, date);
        }
        else if (step < 60000) {
            return this.m.format(target, step, date) + ":" + this.s.format(target, step, date);
        }
        else if (step < 3600000) {
            return this.H.format(target, step, date) + ":" + this.m.format(target, step, date);
        }
        else if (step < 86400000) {
            var M = this.M.format(target, step, date);
            var D = this.D.format(target, step, date);
            return M + "/" + D + " " + this.H.format(target, step, date);
        }
        else if (step < 2592000000) {
            return this.M.format(target, step, date) + "/" + this.D.format(target, step, date);
        }
        else {
            return this.Y.format(target, step, date) + "/" + this.M.format(target, step, date);
        }
    };
    return FormatNodesdt;
}());
export { FormatNodesdt };
//# sourceMappingURL=format-node-sdt.js.map