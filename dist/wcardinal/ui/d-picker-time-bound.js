/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DPickerTimeBound = /** @class */ (function () {
    function DPickerTimeBound(options, onChange) {
        this._date = (options && options.date !== undefined ? options.date : null);
        this._inclusive = (options && options.inclusive !== undefined ? options.inclusive : false);
        this._onChange = onChange;
    }
    Object.defineProperty(DPickerTimeBound.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (date) {
            if (this._date !== date) {
                this._date = date;
                this._onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerTimeBound.prototype, "inclusive", {
        get: function () {
            return this._inclusive;
        },
        set: function (inclusive) {
            if (this._inclusive !== inclusive) {
                this._inclusive = inclusive;
                this._onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    return DPickerTimeBound;
}());
export { DPickerTimeBound };
//# sourceMappingURL=d-picker-time-bound.js.map