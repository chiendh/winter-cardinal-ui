/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DMapCoordinateEPSG3857 } from "./d-map-coordinate-epsg3857";
var DMapCoordinates = /** @class */ (function () {
    function DMapCoordinates() {
    }
    Object.defineProperty(DMapCoordinates, "DEFAULT", {
        get: function () {
            if (this._default == null) {
                this._default = new DMapCoordinateEPSG3857();
            }
            return this._default;
        },
        enumerable: true,
        configurable: true
    });
    return DMapCoordinates;
}());
export { DMapCoordinates };
//# sourceMappingURL=d-map-coordinates.js.map