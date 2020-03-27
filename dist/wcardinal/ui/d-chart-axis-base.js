/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartAxisBaseOptionParser } from "./d-chart-axis-base-options-parser";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { DThemes } from "./theme/d-themes";
import { isNaN } from "./util/is-nan";
var DChartAxisBase = /** @class */ (function () {
    function DChartAxisBase(options) {
        var theme = this.toTheme(options);
        this._theme = theme;
        this._index = 0;
        var parser = new DChartAxisBaseOptionParser(theme, options);
        this._coordinateIndex = parser.coordinateIndex;
        this._padding = parser.padding;
        this._position = parser.position;
        var tick = parser.tick;
        this._tick = tick;
        this._label = parser.label;
        this._bar = parser.bar;
        this._majorTicks = new Float64Array(tick.major.count * 3);
        this._minorTicks = new Float64Array((tick.major.count + 1) * tick.minor.count * 3);
    }
    Object.defineProperty(DChartAxisBase.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    DChartAxisBase.prototype.updateBar = function (container) {
        var bar = this._bar;
        var barShape = bar.shape;
        if (barShape) {
            var plotArea = container.plotArea;
            var plotAreaWidth = plotArea.width;
            var plotAreaHeight = plotArea.height;
            var padding = this._padding * this._index;
            barShape.disallowUploadedUpdate();
            switch (this._position) {
                case DChartAxisPosition.TOP:
                    barShape.transform.position.set(plotAreaWidth * 0.5, 0 - padding);
                    barShape.size.set(plotAreaWidth, 0);
                    break;
                case DChartAxisPosition.BOTTOM:
                    barShape.transform.position.set(plotAreaWidth * 0.5, plotAreaHeight + padding);
                    barShape.size.set(plotAreaWidth, 0);
                    break;
                case DChartAxisPosition.LEFT:
                    barShape.transform.position.set(0 - padding, plotAreaHeight * 0.5);
                    barShape.size.set(0, plotAreaHeight);
                    break;
                case DChartAxisPosition.RIGHT:
                    barShape.transform.position.set(plotAreaWidth + padding, plotAreaHeight * 0.5);
                    barShape.size.set(0, plotAreaHeight);
                    break;
            }
            barShape.allowUploadedUpdate();
        }
    };
    DChartAxisBase.prototype.updateTicksX = function (domainMin, domainMax, coordinate, majorShapes, minorShapes, gridlineShapes, shapePositionY, transform, plotAreaHeight) {
        var tick = this._tick;
        var majorCount = tick.major.count;
        var majorFormatter = tick.major.formatter;
        var minorCountPerMajor = tick.minor.count;
        var minorCount = (majorCount + 1) * minorCountPerMajor;
        var majorTicks = this._majorTicks;
        var minorTicks = this._minorTicks;
        coordinate.ticks(domainMin, domainMax, majorCount, minorCountPerMajor, minorCount, majorTicks, minorTicks);
        var a = transform.a;
        var tx = transform.tx;
        for (var i = 0; i < majorCount; ++i) {
            var majorShape = majorShapes[i];
            var imajorTick = i * 3;
            var majorTickPosition = majorTicks[imajorTick + 0];
            if (!isNaN(majorTickPosition)) {
                var majorTickProjectedPosition = majorTicks[imajorTick + 1];
                var majotTickPositionX = a * majorTickProjectedPosition + tx;
                var majorTickStep = majorTicks[imajorTick + 2];
                majorShape.disallowUploadedUpdate();
                majorShape.visible = true;
                majorShape.transform.position.set(majotTickPositionX, shapePositionY);
                majorShape.text.value = majorFormatter.format(majorTickPosition, majorTickStep);
                majorShape.allowUploadedUpdate();
                if (gridlineShapes) {
                    var gridlineShape = gridlineShapes[i];
                    gridlineShape.disallowUploadedUpdate();
                    gridlineShape.visible = true;
                    gridlineShape.transform.position.set(majotTickPositionX, plotAreaHeight * 0.5);
                    gridlineShape.size.set(0, plotAreaHeight);
                    gridlineShape.allowUploadedUpdate();
                }
            }
            else {
                majorShape.visible = false;
                if (gridlineShapes) {
                    gridlineShapes[i].visible = false;
                }
            }
        }
        for (var i = 0; i < minorCount; ++i) {
            var minorShape = minorShapes[i];
            var iminorTick = i * 3;
            var minorTickPosition = minorTicks[iminorTick + 0];
            var minorTickProjectedPosition = minorTicks[iminorTick + 1];
            if (!isNaN(minorTickPosition)) {
                minorShape.disallowUploadedUpdate();
                minorShape.visible = true;
                minorShape.transform.position.set(a * minorTickProjectedPosition + tx, shapePositionY);
                minorShape.allowUploadedUpdate();
            }
            else {
                minorShape.visible = false;
            }
        }
    };
    DChartAxisBase.prototype.updateTicksY = function (domainMin, domainMax, coordinate, majorShapes, minorShapes, gridlineShapes, shapePositionX, transform, plotAreaWidth) {
        var tick = this._tick;
        var majorCount = tick.major.count;
        var majorFormatter = tick.major.formatter;
        var minorCountPerMajor = tick.minor.count;
        var minorCount = (majorCount + 1) * minorCountPerMajor;
        var majorTicks = this._majorTicks;
        var minorTicks = this._minorTicks;
        coordinate.ticks(domainMin, domainMax, majorCount, minorCountPerMajor, minorCount, majorTicks, minorTicks);
        var d = transform.d;
        var ty = transform.ty;
        for (var i = 0; i < majorCount; ++i) {
            var majorShape = majorShapes[i];
            var imajorTick = i * 3;
            var majorTickPosition = majorTicks[imajorTick + 0];
            if (!isNaN(majorTickPosition)) {
                var majorTickProjectedPosition = majorTicks[imajorTick + 1];
                var majotTickPositionY = d * majorTickProjectedPosition + ty;
                var majorTickStep = majorTicks[imajorTick + 2];
                majorShape.disallowUploadedUpdate();
                majorShape.visible = true;
                majorShape.transform.position.set(shapePositionX, majotTickPositionY);
                majorShape.text.value = majorFormatter.format(majorTickPosition, majorTickStep);
                majorShape.allowUploadedUpdate();
                if (gridlineShapes) {
                    var gridlineShape = gridlineShapes[i];
                    gridlineShape.disallowUploadedUpdate();
                    gridlineShape.visible = true;
                    gridlineShape.transform.position.set(plotAreaWidth * 0.5, majotTickPositionY);
                    gridlineShape.size.set(plotAreaWidth, 0);
                    gridlineShape.allowUploadedUpdate();
                }
            }
            else {
                majorShape.visible = false;
                if (gridlineShapes) {
                    gridlineShapes[i].visible = false;
                }
            }
        }
        for (var i = 0; i < minorCount; ++i) {
            var minorShape = minorShapes[i];
            var iminorTick = i * 3;
            var minorTickPosition = minorTicks[iminorTick + 0];
            var minorTickProjectedPosition = minorTicks[iminorTick + 1];
            if (!isNaN(minorTickPosition)) {
                minorShape.disallowUploadedUpdate();
                minorShape.visible = true;
                minorShape.transform.position.set(shapePositionX, d * minorTickProjectedPosition + ty);
                minorShape.allowUploadedUpdate();
            }
            else {
                minorShape.visible = false;
            }
        }
    };
    DChartAxisBase.prototype.updateTicks = function (container) {
        var tick = this._tick;
        var majorShapes = tick.major.shapes;
        var minorShapes = tick.minor.shapes;
        if (majorShapes && minorShapes) {
            var plotArea = container.plotArea;
            var bounds = plotArea.getBoundsInContainer();
            var transform = plotArea.container.transform.localTransform;
            var gridlineShapes = tick.major.gridline.shapes;
            var coordinateIndex = this._coordinateIndex;
            var padding = this._padding * this._index;
            var coordinate = void 0;
            switch (this._position) {
                case DChartAxisPosition.TOP:
                    coordinate = plotArea.coordinate.x.get(coordinateIndex);
                    if (coordinate) {
                        var domainFrom = coordinate.unmap(coordinate.transform.unmap(bounds.x));
                        var domainTo = coordinate.unmap(coordinate.transform.unmap(bounds.x + bounds.width));
                        var plotAreaHeight = plotArea.height;
                        this.updateTicksX(domainFrom, domainTo, coordinate, majorShapes, minorShapes, gridlineShapes, 0 - padding, transform, plotAreaHeight);
                    }
                    break;
                case DChartAxisPosition.BOTTOM:
                    coordinate = plotArea.coordinate.x.get(coordinateIndex);
                    if (coordinate) {
                        var domainFrom = coordinate.unmap(coordinate.transform.unmap(bounds.x));
                        var domainTo = coordinate.unmap(coordinate.transform.unmap(bounds.x + bounds.width));
                        var plotAreaHeight = plotArea.height;
                        this.updateTicksX(domainFrom, domainTo, coordinate, majorShapes, minorShapes, gridlineShapes, plotAreaHeight + padding, transform, plotAreaHeight);
                    }
                    break;
                case DChartAxisPosition.LEFT:
                    coordinate = plotArea.coordinate.y.get(coordinateIndex);
                    if (coordinate) {
                        var domainFrom = coordinate.unmap(coordinate.transform.unmap(bounds.y));
                        var domainTo = coordinate.unmap(coordinate.transform.unmap(bounds.y + bounds.height));
                        var plotAreaWidth = plotArea.width;
                        this.updateTicksY(domainFrom, domainTo, coordinate, majorShapes, minorShapes, gridlineShapes, 0 - padding, transform, plotAreaWidth);
                    }
                    break;
                case DChartAxisPosition.RIGHT:
                    coordinate = plotArea.coordinate.y.get(coordinateIndex);
                    if (coordinate) {
                        var domainFrom = coordinate.unmap(coordinate.transform.unmap(bounds.y));
                        var domainTo = coordinate.unmap(coordinate.transform.unmap(bounds.y + bounds.height));
                        var plotAreaWidth = plotArea.width;
                        this.updateTicksY(domainFrom, domainTo, coordinate, majorShapes, minorShapes, gridlineShapes, plotAreaWidth + padding, transform, plotAreaWidth);
                    }
                    break;
            }
        }
    };
    DChartAxisBase.prototype.bind = function (container, index) {
        this._container = container;
        this._index = index;
        var tickShapeContainer = container.container;
        // Bar
        var bar = this._bar;
        var barShape = bar.shape;
        if (!barShape) {
            var position = this._position;
            var barPosition = (position === DChartAxisPosition.LEFT || position === DChartAxisPosition.RIGHT ?
                EShapeBarPosition.TOP : EShapeBarPosition.LEFT);
            barShape = new EShapeBar(barPosition, -1, EShapeDefaults.STROKE_WIDTH, bar.style);
            barShape.stroke.copy(bar.stroke);
            barShape.text.copy(this._label);
            this._bar.shape = barShape;
        }
        barShape.attach(container.container);
        // Major tick gridline
        var tick = this._tick;
        var tickMajor = tick.major;
        var gridline = tickMajor.gridline;
        var gridlineShapes = gridline.shapes;
        if (!gridlineShapes && tick.enable && gridline.enable) {
            gridlineShapes = [];
            gridline.shapes = gridlineShapes;
            var position = this._position;
            var gridlinePosition = (position === DChartAxisPosition.LEFT || position === DChartAxisPosition.RIGHT ?
                EShapeBarPosition.LEFT : EShapeBarPosition.TOP);
            var gridlineCount = tickMajor.count;
            var gridlineStyle = gridline.style;
            for (var i = 0; i < gridlineCount; ++i) {
                var gridlineShape = new EShapeBar(gridlinePosition, -1, EShapeDefaults.STROKE_WIDTH, gridlineStyle);
                gridlineShape.stroke.copy(gridline.stroke);
                gridlineShapes.push(gridlineShape);
            }
        }
        if (gridlineShapes) {
            for (var i = 0, imax = gridlineShapes.length; i < imax; ++i) {
                gridlineShapes[i].attach(tickShapeContainer);
            }
        }
        // Major ticks
        var tickMajorShapes = tickMajor.shapes;
        if (!tickMajorShapes && tick.enable) {
            tickMajorShapes = [];
            tickMajor.shapes = tickMajorShapes;
            var tickMajorCount = tickMajor.count;
            var tickMajorSize = tickMajor.size;
            var tickMajorPosition = tickMajor.position;
            var tickMajorStyle = tickMajor.style;
            for (var i = 0; i < tickMajorCount; ++i) {
                var tickMajorShape = new EShapeBar(tickMajorPosition, tickMajorSize, EShapeDefaults.STROKE_WIDTH, tickMajorStyle);
                tickMajorShape.stroke.copy(tickMajor.stroke);
                tickMajorShape.text.copy(tickMajor.text);
                tickMajorShape.size.set(0, 0);
                tickMajorShapes.push(tickMajorShape);
            }
        }
        if (tickMajorShapes) {
            for (var i = 0, imax = tickMajorShapes.length; i < imax; ++i) {
                tickMajorShapes[i].attach(tickShapeContainer);
            }
        }
        // Minor ticks
        var tickMinor = tick.minor;
        var tickMinorShapes = tickMinor.shapes;
        if (!tickMinorShapes && tick.enable) {
            tickMinorShapes = [];
            tickMinor.shapes = tickMinorShapes;
            var tickMinorCount = tickMinor.count;
            var tickMinorSize = tickMinor.size;
            var tickMinorPosition = tickMinor.position;
            var tickMinorStyle = tickMinor.style;
            for (var i = 0, imax = (tickMajor.count + 1) * tickMinorCount; i < imax; ++i) {
                var tickMinorShape = new EShapeBar(tickMinorPosition, tickMinorSize, EShapeDefaults.STROKE_WIDTH, tickMinorStyle);
                tickMinorShape.stroke.copy(tickMinor.stroke);
                tickMinorShape.size.set(0, 0);
                tickMinorShapes.push(tickMinorShape);
            }
        }
        if (tickMinorShapes) {
            for (var i = 0, imax = tickMinorShapes.length; i < imax; ++i) {
                tickMinorShapes[i].attach(tickShapeContainer);
            }
        }
    };
    DChartAxisBase.prototype.unbind = function () {
        // Bar
        var barShape = this._bar.shape;
        if (barShape) {
            barShape.detach();
        }
        // Major ticks
        var tick = this._tick;
        var tickMajorShapes = tick.major.shapes;
        if (tickMajorShapes) {
            for (var i = 0, imax = tickMajorShapes.length; i < imax; ++i) {
                tickMajorShapes[i].detach();
            }
        }
        // Major tick gridlines
        var tickMajorGridlineShapes = tick.major.gridline.shapes;
        if (tickMajorGridlineShapes) {
            for (var i = 0, imax = tickMajorGridlineShapes.length; i < imax; ++i) {
                tickMajorGridlineShapes[i].detach();
            }
        }
        // Minor ticks
        var tickMinorShapes = tick.minor.shapes;
        if (tickMinorShapes) {
            for (var i = 0, imax = tickMinorShapes.length; i < imax; ++i) {
                tickMinorShapes[i].detach();
            }
        }
        //
        this._container = undefined;
    };
    DChartAxisBase.prototype.update = function () {
        var container = this._container;
        if (container) {
            this.updateBar(container);
            this.updateTicks(container);
        }
    };
    DChartAxisBase.prototype.destroy = function () {
        // Bar
        var barShape = this._bar.shape;
        if (barShape) {
            barShape.destroy();
        }
        // Major ticks
        var tick = this._tick;
        var tickMajorShapes = tick.major.shapes;
        if (tickMajorShapes) {
            for (var i = 0, imax = tickMajorShapes.length; i < imax; ++i) {
                tickMajorShapes[i].destroy();
            }
        }
        // Major tick gridlines
        var tickMajorGridlineShapes = tick.major.gridline.shapes;
        if (tickMajorGridlineShapes) {
            for (var i = 0, imax = tickMajorGridlineShapes.length; i < imax; ++i) {
                tickMajorGridlineShapes[i].destroy();
            }
        }
        // Minor ticks
        var tickMinorShapes = tick.minor.shapes;
        if (tickMinorShapes) {
            for (var i = 0, imax = tickMinorShapes.length; i < imax; ++i) {
                tickMinorShapes[i].destroy();
            }
        }
        //
        this._container = undefined;
    };
    DChartAxisBase.prototype.toTheme = function (options) {
        return (options && options.theme) || this.getThemeDefault();
    };
    DChartAxisBase.prototype.getThemeDefault = function () {
        return DThemes.getInstance().get(this.getType());
    };
    DChartAxisBase.prototype.getType = function () {
        return "DChartAxisBase";
    };
    return DChartAxisBase;
}());
export { DChartAxisBase };
//# sourceMappingURL=d-chart-axis-base.js.map