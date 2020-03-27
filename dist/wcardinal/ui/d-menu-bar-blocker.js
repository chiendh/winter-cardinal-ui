/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Container } from "pixi.js";
import { DMenuBarItem } from "./d-menu-bar-item";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DMenuBarBlocker = /** @class */ (function (_super) {
    __extends(DMenuBarBlocker, _super);
    function DMenuBarBlocker(target) {
        var _this = _super.call(this) || this;
        _this.renderable = false;
        _this.interactive = true;
        _this.on(UtilPointerEvent.down, function (e) {
            if (e.target === _this) {
                target.close();
            }
        });
        _this.on(UtilPointerEvent.move, function (e) {
            if (e.target === _this) {
                var children = target.children;
                for (var i = 0, imax = children.length; i < imax; ++i) {
                    var child = children[i];
                    if (child instanceof DMenuBarItem) {
                        child.setHovered(child.containsPoint(e.data.global));
                    }
                }
            }
        });
        return _this;
    }
    DMenuBarBlocker.prototype.containsPoint = function (global) {
        return true;
    };
    return DMenuBarBlocker;
}(Container));
export { DMenuBarBlocker };
//# sourceMappingURL=d-menu-bar-blocker.js.map