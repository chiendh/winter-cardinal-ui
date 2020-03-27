/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
var DynamicAtlasItemWhite = /** @class */ (function (_super) {
    __extends(DynamicAtlasItemWhite, _super);
    function DynamicAtlasItemWhite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynamicAtlasItemWhite.prototype.render = function (context) {
        var frame = this.frame;
        context.save();
        context.fillStyle = "#ffffff";
        context.fillRect(frame.x - 1, frame.y - 1, frame.width + 2, frame.height + 2);
        context.restore();
    };
    return DynamicAtlasItemWhite;
}(DynamicAtlasItem));
export { DynamicAtlasItemWhite };
//# sourceMappingURL=dynamic-atlas-item-white.js.map