/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point } from "pixi.js";
import { UtilPointerEvent } from "./util-pointer-event";
var UtilClickOutside = /** @class */ (function () {
    function UtilClickOutside() {
    }
    UtilClickOutside.apply = function (target, onClick) {
        var _this = this;
        target.on(UtilPointerEvent.down, function (e) {
            if (e.target === target) {
                var point = _this.point;
                point.copyFrom(e.data.global);
                target.toLocal(point, undefined, point, true);
                var x = point.x;
                var y = point.y;
                if (x < 0 || y < 0 || target.width < x || target.height < y) {
                    onClick(e);
                }
            }
        });
    };
    UtilClickOutside.point = new Point();
    return UtilClickOutside;
}());
export { UtilClickOutside };
//# sourceMappingURL=util-click-outside.js.map