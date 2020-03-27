/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Texture } from "pixi.js";
import { EShapeUploadedBase } from "../e-shape-uploaded";
var EShapeGroupUploaded = /** @class */ (function (_super) {
    __extends(EShapeGroupUploaded, _super);
    function EShapeGroupUploaded(buffer, voffset, ioffset) {
        return _super.call(this, buffer, voffset, ioffset, 0, 0, 1) || this;
    }
    EShapeGroupUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        this.texture = shape.texture || Texture.WHITE;
        return this;
    };
    EShapeGroupUploaded.prototype.update = function (shape) {
        // DO NOTHING
    };
    return EShapeGroupUploaded;
}(EShapeUploadedBase));
export { EShapeGroupUploaded };
//# sourceMappingURL=e-shape-group-uploaded.js.map