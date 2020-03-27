/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeBufferUnit } from "./e-shape-buffer-unit";
var EShapeBufferUnitBuilder = /** @class */ (function () {
    function EShapeBufferUnitBuilder() {
        this.index = 0;
        this.baseTexture = null;
        this.units = [];
    }
    EShapeBufferUnitBuilder.prototype.begin = function () {
        this.index = 0;
        this.baseTexture = null;
    };
    EShapeBufferUnitBuilder.prototype.push = function (texture, indexOffset) {
        if (this.index < this.units.length) {
            var unit = this.units[this.index];
            unit.texture = texture;
            unit.indexOffset = indexOffset;
        }
        else {
            this.units.push(new EShapeBufferUnit(texture, indexOffset));
        }
        this.index += 1;
    };
    EShapeBufferUnitBuilder.prototype.end = function () {
        if (this.units.length !== this.index) {
            this.units.length = this.index;
        }
    };
    EShapeBufferUnitBuilder.prototype.destroy = function () {
        this.units.length = 0;
    };
    return EShapeBufferUnitBuilder;
}());
export { EShapeBufferUnitBuilder };
//# sourceMappingURL=e-shape-buffer-unit-builder.js.map