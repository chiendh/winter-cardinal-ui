/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBaseState } from "./d-base-state";
import { DThemes } from "./theme/d-themes";
import { isString } from "./util/is-string";
var DChartSelectionShapeBase = /** @class */ (function () {
    function DChartSelectionShapeBase(options) {
        var theme = this.toTheme(options);
        this._theme = theme;
        var state = (options && options.state != null ? options.state : DBaseState.HOVERED);
        this._state = state;
        this._isEnabled = (options && options.enable != null ? options.enable : theme.isEnabled(state));
        this._shape = options && options.shape;
        this._style = (options && options.style) || this.setStyle;
    }
    DChartSelectionShapeBase.prototype.bind = function (container) {
        if (this._isEnabled) {
            var shape = this._shape = (this._shape || this.newShape(this._theme));
            shape.attach(container.plotArea.axis.container);
            shape.visible = false;
        }
    };
    DChartSelectionShapeBase.prototype.unbind = function () {
        var shape = this._shape;
        if (shape) {
            shape.detach();
        }
    };
    DChartSelectionShapeBase.prototype.newShape = function (theme) {
        return theme.newShape(this._state);
    };
    DChartSelectionShapeBase.prototype.set = function (container, mappedPosition, series) {
        this.update(container, mappedPosition);
        var shape = this._shape;
        if (shape) {
            this._style(shape, series);
        }
    };
    DChartSelectionShapeBase.prototype.setStyle = function (shape, series) {
        var seriesShape = series.shape;
        if (seriesShape) {
            shape.stroke.color = seriesShape.stroke.color;
        }
    };
    DChartSelectionShapeBase.prototype.unset = function () {
        var shape = this._shape;
        if (shape) {
            shape.visible = false;
        }
    };
    DChartSelectionShapeBase.prototype.toTheme = function (options) {
        var theme = (options && options.theme);
        if (isString(theme)) {
            return this.getTheme(theme);
        }
        else if (theme != null) {
            return theme;
        }
        else {
            return this.getTheme(this.getType());
        }
    };
    DChartSelectionShapeBase.prototype.getTheme = function (type) {
        return DThemes.getInstance().get(type);
    };
    return DChartSelectionShapeBase;
}());
export { DChartSelectionShapeBase };
//# sourceMappingURL=d-chart-selection-shape-base.js.map