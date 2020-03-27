/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var UtilDragEasingHistory = /** @class */ (function () {
    function UtilDragEasingHistory(dx, dy, ds, dt) {
        this.dx = dx;
        this.dy = dy;
        this.ds = ds;
        this.dt = dt;
    }
    UtilDragEasingHistory.prototype.set = function (dx, dy, ds, dt) {
        this.dx = dx;
        this.dy = dy;
        this.ds = ds;
        this.dt = dt;
    };
    return UtilDragEasingHistory;
}());
export { UtilDragEasingHistory };
//# sourceMappingURL=util-drag-easing-history.js.map