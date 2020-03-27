/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { ObservablePoint, Point } from "pixi.js";
var EShapeGroupSizeViewer = /** @class */ (function (_super) {
    __extends(EShapeGroupSizeViewer, _super);
    function EShapeGroupSizeViewer(cb, x, y) {
        var _this = _super.call(this, cb, undefined, x, y) || this;
        _this.base = new Point(x, y);
        return _this;
    }
    EShapeGroupSizeViewer.prototype.init = function () {
        this.base.copyFrom(this);
        this.cb();
    };
    EShapeGroupSizeViewer.prototype.fit = function () {
        // DO NOTHING
    };
    return EShapeGroupSizeViewer;
}(ObservablePoint));
export { EShapeGroupSizeViewer };
//# sourceMappingURL=e-shape-group-size-viewer.js.map