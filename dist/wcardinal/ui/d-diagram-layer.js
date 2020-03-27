/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeContainer } from "./shape/e-shape-container";
var DDiagramLayer = /** @class */ (function (_super) {
    __extends(DDiagramLayer, _super);
    function DDiagramLayer(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.interactive = false;
        _this.reference = 0;
        return _this;
    }
    DDiagramLayer.prototype.destroy = function () {
        if (!this._destroyed) {
            var children = this.children;
            for (var i = children.length - 1; 0 <= i; --i) {
                children[i].destroy();
            }
            children.length = 0;
            _super.prototype.destroy.call(this);
        }
    };
    DDiagramLayer.prototype.serialize = function (layer, manager, items) {
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var shape = children[i];
            var item = shape.serialize(manager);
            item[16] = layer;
            items.push(item);
        }
        return [
            this.name || ""
        ];
    };
    return DDiagramLayer;
}(EShapeContainer));
export { DDiagramLayer };
//# sourceMappingURL=d-diagram-layer.js.map