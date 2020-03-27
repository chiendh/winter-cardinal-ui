/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDatetimeButtonBack } from "./d-picker-datetime-button-back";
import { DPickerDatetimeButtonDate } from "./d-picker-datetime-button-date";
import { DPickerDatetimeButtonNext } from "./d-picker-datetime-button-next";
import { DPickerDatetimeLabel } from "./d-picker-datetime-label";
import { DPickerDatetimeLabelDate } from "./d-picker-datetime-label-date";
import { DPickerDatetimeSpace } from "./d-picker-datetime-space";
import { DPickerTime } from "./d-picker-time";
var DPickerDatetime = /** @class */ (function (_super) {
    __extends(DPickerDatetime, _super);
    function DPickerDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DPickerDatetime.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this._datePage = new Date(this._dateCurrent.getTime());
    };
    DPickerDatetime.prototype.newChildren = function (theme, options, margin) {
        this._dateButtons = this.newDateButtons(theme, options);
        this._dateDecorator = (options && options.date && options.date.decorator) ||
            theme.getDateDecorator();
        this._label = this.newLabel(theme, options);
        var result = _super.prototype.newChildren.call(this, theme, options, margin);
        result.unshift(new DLayoutHorizontal({
            width: "100%", height: "auto",
            children: [
                this.newBackButton(theme, options),
                this._label,
                this.newNextButton(theme, options)
            ]
        }), new DLayoutHorizontal({
            width: "auto", height: "auto",
            margin: margin,
            children: this.newDateLabels(theme, options)
        }), new DLayoutVertical({
            width: "auto", height: "auto",
            margin: margin,
            column: 7,
            children: this._dateButtons
        }));
        return result;
    };
    Object.defineProperty(DPickerDatetime.prototype, "page", {
        get: function () {
            return this._datePage;
        },
        set: function (datePage) {
            if (this._datePage.getTime() !== datePage.getTime()) {
                this._datePage = datePage;
                this.onPageChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    DPickerDatetime.prototype.onReset = function () {
        this._datePage.setTime(this._dateCurrent.getTime());
        _super.prototype.onReset.call(this);
    };
    DPickerDatetime.prototype.next = function () {
        var work = this._datePage;
        work.setFullYear(work.getFullYear(), work.getMonth() + 1, 1);
        work.setHours(0, 0, 0, 0);
        this.onPageChanged();
    };
    DPickerDatetime.prototype.back = function () {
        var work = this._datePage;
        work.setFullYear(work.getFullYear(), work.getMonth() - 1, 1);
        work.setHours(0, 0, 0, 0);
        this.onPageChanged();
    };
    DPickerDatetime.prototype.onNewChanged = function () {
        this._dateBounds.adjust(this._datePage);
        _super.prototype.onNewChanged.call(this);
        this.onPageChanged();
    };
    DPickerDatetime.prototype.onPageChanged = function () {
        var buttons = this._dateButtons;
        var bounds = this._dateBounds;
        var datePage = this._datePage;
        var dateNew = this._dateNew;
        var tmp = new Date(datePage.getTime());
        tmp.setDate(1);
        tmp.setHours(0, 0, 0, 0);
        // Spaces
        var theme = this.theme;
        var spaceCount = (tmp.getDay() - theme.getDayStart() + 7) % 7;
        for (var i = 0; i < spaceCount; ++i) {
            buttons[i].show();
        }
        for (var i = spaceCount; i < 7; ++i) {
            buttons[i].hide();
        }
        // Date buttons
        var dateDecorator = this._dateDecorator;
        tmp.setFullYear(tmp.getFullYear(), tmp.getMonth() + 1, 0);
        var dateCount = tmp.getDate();
        var dateNewDate = (dateNew.getFullYear() === tmp.getFullYear() &&
            dateNew.getMonth() === tmp.getMonth() ? dateNew.getDate() : 0);
        for (var i = 0; i < dateCount; ++i) {
            tmp.setDate(i + 1);
            var button = buttons[i + 7];
            button.setActive(dateNewDate === i + 1);
            button.setDisabled(!bounds.contains(tmp));
            button.show();
            dateDecorator(tmp, button);
        }
        for (var i = dateCount; i < 31; ++i) {
            var button = buttons[i + 7];
            button.setActive(false);
            button.hide();
        }
        // Label
        tmp.setTime(datePage.getTime());
        this._label.text = tmp;
    };
    DPickerDatetime.prototype.adjustInputOptions = function (theme, options, max) {
        if (options.weight == null) {
            options.weight = 1;
        }
        return _super.prototype.adjustInputOptions.call(this, theme, options, max);
    };
    DPickerDatetime.prototype.getTimeLayoutWidth = function () {
        return "100%";
    };
    DPickerDatetime.prototype.toLabelOptions = function (theme, options) {
        var result = (options && options.label) || {};
        if (result.weight === undefined) {
            result.weight = 1;
        }
        if (result.padding === undefined) {
            result.padding = 0;
        }
        var labelText = result.text = result.text || {};
        var labelTextAlign = labelText.align = labelText.align || {};
        if (labelTextAlign.horizontal === undefined) {
            labelTextAlign.horizontal = "CENTER";
        }
        if (labelText.formatter === undefined) {
            labelText.formatter = theme.getLabelFormatter();
        }
        return result;
    };
    DPickerDatetime.prototype.newLabel = function (theme, options) {
        return new DPickerDatetimeLabel(this.toLabelOptions(theme, options));
    };
    DPickerDatetime.prototype.newBackButton = function (theme, options) {
        var _this = this;
        var buttonOptions = (options && options.back !== undefined ?
            options.back : theme.getBackButtonOptions());
        if (buttonOptions != null) {
            var button = new DPickerDatetimeButtonBack(buttonOptions);
            button.on("active", function () {
                _this.back();
            });
            return button;
        }
        return null;
    };
    DPickerDatetime.prototype.newNextButton = function (theme, options) {
        var _this = this;
        var buttonOptions = (options && options.next !== undefined ?
            options.next : theme.getNextButtonOptions());
        if (buttonOptions != null) {
            var button = new DPickerDatetimeButtonNext(buttonOptions);
            button.on("active", function () {
                _this.next();
            });
            return button;
        }
        return null;
    };
    DPickerDatetime.prototype.newDateLabels = function (theme, options) {
        var dateLabels = theme.getDayLabels();
        var dayStart = theme.getDayStart();
        var result = [];
        for (var i = 0; i < 7; ++i) {
            var label = dateLabels[(dayStart + i) % 7];
            result.push(this.newDateLabel(theme, options, label));
        }
        return result;
    };
    DPickerDatetime.prototype.newDateLabel = function (theme, options, label) {
        return new DPickerDatetimeLabelDate({
            text: {
                value: label
            }
        });
    };
    DPickerDatetime.prototype.newDateButtons = function (theme, options) {
        var result = [];
        for (var i = 0; i < 7; ++i) {
            result.push(this.newSpace(theme, options));
        }
        for (var i = 1; i <= 31; ++i) {
            result.push(this.newDateButton(theme, options, i));
        }
        return result;
    };
    DPickerDatetime.prototype.newSpace = function (theme, options) {
        return new DPickerDatetimeSpace();
    };
    DPickerDatetime.prototype.newDateButton = function (theme, options, date) {
        var _this = this;
        return new DPickerDatetimeButtonDate({
            text: {
                value: String(date)
            },
            on: {
                active: function () {
                    _this.onDateButtonClicked(date);
                }
            }
        });
    };
    DPickerDatetime.prototype.onDateButtonClicked = function (date) {
        var dateNew = this._dateNew;
        if (dateNew.getDate() !== date) {
            var datePage = this._datePage;
            dateNew.setFullYear(datePage.getFullYear());
            dateNew.setMonth(datePage.getMonth());
            dateNew.setDate(date);
            this.onNewChanged();
        }
    };
    DPickerDatetime.prototype.getType = function () {
        return "DPickerDatetime";
    };
    return DPickerDatetime;
}(DPickerTime));
export { DPickerDatetime };
//# sourceMappingURL=d-picker-datetime.js.map