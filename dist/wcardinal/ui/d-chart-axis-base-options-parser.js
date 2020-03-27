/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickPosition } from "./d-chart-axis-tick-position";
import { EShapePointsStyles } from "./shape/e-shape-points-styles";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { isString } from "./util/is-string";
import { NumberFormatters } from "./util/number-formatters";
var DChartAxisBaseOptionParser = /** @class */ (function () {
    function DChartAxisBaseOptionParser(theme, options) {
        this._coordinateIndex = (options && options.coordinate != null ? options.coordinate : 0);
        this._position = this.toPosition(theme, options);
        this._tick = this.toTickContainer(theme, options);
        this._label = this.toLabel(theme, options);
        this._padding = (options && options.padding != null ? options.padding : theme.getPadding());
        this._bar = this.toBar(theme, options);
    }
    Object.defineProperty(DChartAxisBaseOptionParser.prototype, "coordinateIndex", {
        get: function () {
            return this._coordinateIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartAxisBaseOptionParser.prototype, "padding", {
        get: function () {
            return this._padding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartAxisBaseOptionParser.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartAxisBaseOptionParser.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartAxisBaseOptionParser.prototype, "tick", {
        get: function () {
            return this._tick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartAxisBaseOptionParser.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    DChartAxisBaseOptionParser.prototype.toPosition = function (theme, options) {
        var position = options && options.position;
        if (isString(position)) {
            return DChartAxisPosition[position];
        }
        else if (position != null) {
            return position;
        }
        return theme.getPosition();
    };
    DChartAxisBaseOptionParser.prototype.toBar = function (theme, options) {
        return {
            style: options && options.style != null ? options.style : theme.getStyle(),
            stroke: this.toBarStroke(theme, options && options.stroke),
            shape: undefined
        };
    };
    DChartAxisBaseOptionParser.prototype.toTickContainer = function (theme, options) {
        var tick = options && options.tick;
        return {
            enable: (tick && tick.enable != null ? tick.enable : theme.getTickEnable()),
            major: this.toTickMajor(theme, tick),
            minor: this.toMinorTick(theme, tick)
        };
    };
    DChartAxisBaseOptionParser.prototype.toTickMajor = function (theme, options) {
        var major = options && options.major;
        var position = (major && major.position != null ? major.position :
            (options && options.position != null ? options.position : theme.getMajorTickPosition()));
        var optionsStyle = options && options.style;
        var style = EShapePointsStyles.from(major && major.style != null ? major.style :
            (optionsStyle != null ? optionsStyle : theme.getMajorTickStyle()));
        var optionsStroke = options && options.stroke;
        var stroke = this.toTickMajorStroke(theme, major && major.stroke, optionsStroke);
        return {
            count: (major && major.count != null ? major.count : theme.getMajorTickCount()),
            size: (major && major.size != null ? major.size : theme.getMajorTickSize()),
            position: this.toTickPosition(position),
            style: style,
            stroke: stroke,
            text: this.toMajorTickText(theme, major && major.text),
            formatter: this.toMajorTickFormatter(theme, major),
            shapes: undefined,
            gridline: this.toTickMajorGridline(theme, major && major.gridline, optionsStyle, optionsStroke)
        };
    };
    DChartAxisBaseOptionParser.prototype.toTickMajorGridline = function (theme, options, optionsStyle, optionsStroke) {
        var style = EShapePointsStyles.from(options && options.style != null ? options.style :
            (optionsStyle != null ? optionsStyle : theme.getMajorTickGridlineStyle()));
        return {
            enable: options && options.enable != null ? options.enable : theme.getMajorTickGridlineEnable(),
            style: style,
            stroke: this.toTickMajorGridlineStroke(theme, options && options.stroke, optionsStroke),
            shapes: undefined
        };
    };
    DChartAxisBaseOptionParser.prototype.toTickPosition = function (tickPosition) {
        var position = this._position;
        if (tickPosition === DChartAxisTickPosition.OUTSIDE || tickPosition === "OUTSIDE") {
            switch (position) {
                case DChartAxisPosition.TOP:
                    return EShapeBarPosition.BOTTOM;
                case DChartAxisPosition.BOTTOM:
                    return EShapeBarPosition.TOP;
                case DChartAxisPosition.LEFT:
                    return EShapeBarPosition.RIGHT;
                case DChartAxisPosition.RIGHT:
                    return EShapeBarPosition.LEFT;
                default:
                    return EShapeBarPosition.TOP;
            }
        }
        else {
            switch (position) {
                case DChartAxisPosition.TOP:
                    return EShapeBarPosition.TOP;
                case DChartAxisPosition.BOTTOM:
                    return EShapeBarPosition.BOTTOM;
                case DChartAxisPosition.LEFT:
                    return EShapeBarPosition.LEFT;
                case DChartAxisPosition.RIGHT:
                    return EShapeBarPosition.RIGHT;
                default:
                    return EShapeBarPosition.TOP;
            }
        }
    };
    DChartAxisBaseOptionParser.prototype.toMinorTick = function (theme, options) {
        var minor = options && options.major;
        var position = (minor && minor.position != null ? minor.position :
            (options && options.position != null ? options.position : theme.getMinorTickPosition()));
        var style = EShapePointsStyles.from(minor && minor.style != null ? minor.style :
            (options && options.style != null ? options.style : theme.getMinorTickStyle()));
        return {
            count: (minor && minor.count != null ? minor.count : theme.getMinorTickCount()),
            size: (minor && minor.size != null ? minor.size : theme.getMinorTickSize()),
            position: this.toTickPosition(position),
            style: style,
            stroke: this.toTickMinorStroke(theme, minor && minor.stroke, options && options.stroke),
            shapes: undefined
        };
    };
    DChartAxisBaseOptionParser.prototype.toBarStroke = function (theme, options) {
        return this.toStroke(options, undefined, theme.getStrokeEnable(), theme.getStrokeColor(), theme.getStrokeAlpha(), theme.getStrokeWidth(), theme.getStrokeAlign(), theme.getStrokeSide());
    };
    DChartAxisBaseOptionParser.prototype.toTickMajorStroke = function (theme, optionsA, optionsB) {
        return this.toStroke(optionsA, optionsB, theme.getMajorTickStrokeEnable(), theme.getMajorTickStrokeColor(), theme.getMajorTickStrokeAlpha(), theme.getMajorTickStrokeWidth(), theme.getMajorTickStrokeAlign(), theme.getMajorTickStrokeSide());
    };
    DChartAxisBaseOptionParser.prototype.toTickMajorGridlineStroke = function (theme, optionsA, optionsB) {
        return this.toStroke(optionsA, optionsB, theme.getMajorTickGridlineStrokeEnable(), theme.getMajorTickGridlineStrokeColor(), theme.getMajorTickGridlineStrokeAlpha(), theme.getMajorTickGridlineStrokeWidth(), theme.getMajorTickGridlineStrokeAlign(), theme.getMajorTickGridlineStrokeSide());
    };
    DChartAxisBaseOptionParser.prototype.toTickMinorStroke = function (theme, optionsA, optionsB) {
        return this.toStroke(optionsA, optionsB, theme.getMinorTickStrokeEnable(), theme.getMinorTickStrokeColor(), theme.getMinorTickStrokeAlpha(), theme.getMinorTickStrokeWidth(), theme.getMinorTickStrokeAlign(), theme.getMinorTickStrokeSide());
    };
    DChartAxisBaseOptionParser.prototype.toStroke = function (optionsA, optionsB, enable, color, alpha, width, align, side) {
        if (optionsA) {
            if (optionsB) {
                return {
                    enable: (optionsA.enable != null ? optionsA.enable :
                        (optionsB.enable != null ? optionsB.enable : enable)),
                    color: (optionsA.color != null ? optionsA.color :
                        (optionsB.color != null ? optionsB.color : color)),
                    alpha: (optionsA.alpha != null ? optionsA.alpha :
                        (optionsB.alpha != null ? optionsB.alpha : alpha)),
                    width: (optionsA.width != null ? optionsA.width :
                        (optionsB.width != null ? optionsB.width : width)),
                    align: (optionsA.align != null ? optionsA.align :
                        (optionsB.align != null ? optionsB.align : align)),
                    side: (optionsA.side != null ? optionsA.side :
                        (optionsB.side != null ? optionsB.side : side))
                };
            }
            else {
                return {
                    enable: (optionsA.enable != null ? optionsA.enable : enable),
                    color: (optionsA.color != null ? optionsA.color : color),
                    alpha: (optionsA.alpha != null ? optionsA.alpha : alpha),
                    width: (optionsA.width != null ? optionsA.width : width),
                    align: (optionsA.align != null ? optionsA.align : align),
                    side: (optionsA.side != null ? optionsA.side : side)
                };
            }
        }
        else if (optionsB) {
            return {
                enable: (optionsB.enable != null ? optionsB.enable : enable),
                color: (optionsB.color != null ? optionsB.color : color),
                alpha: (optionsB.alpha != null ? optionsB.alpha : alpha),
                width: (optionsB.width != null ? optionsB.width : width),
                align: (optionsB.align != null ? optionsB.align : align),
                side: (optionsB.side != null ? optionsB.side : side)
            };
        }
        else {
            return {
                enable: enable,
                color: color,
                alpha: alpha,
                width: width,
                align: align,
                side: side
            };
        }
    };
    DChartAxisBaseOptionParser.prototype.toMajorTickFormatter = function (theme, options) {
        var text = options && options.text;
        if (text) {
            var format = text.format;
            if (format != null) {
                return NumberFormatters.create(format);
            }
            else {
                var formatter = text.formatter;
                if (formatter) {
                    return {
                        format: formatter
                    };
                }
            }
        }
        return NumberFormatters.create(theme.getMajorTickTextFormat());
    };
    DChartAxisBaseOptionParser.prototype.toMajorTickText = function (theme, options) {
        options = options || {};
        return {
            format: options.format,
            color: this.toMajorTickTextColor(theme, options.color),
            alpha: options.alpha,
            family: options.family,
            size: options.size,
            weight: options.weight,
            align: this.toMajorTickTextAlign(theme, options.align),
            offset: this.toMajorTickTextOffset(theme, options.offset),
            style: options.style,
            outline: this.toMajorTickTextOutline(theme, options.outline),
            spacing: this.toMajorTickTextSpacing(theme, options.spacing),
            direction: this.toTickMajorTextDirection(theme, options.direction),
            padding: this.toMajorTickTextPadding(theme, options.padding),
            clipping: options.clipping
        };
    };
    DChartAxisBaseOptionParser.prototype.toMajorTickTextOutline = function (theme, options) {
        if (options) {
            return {
                enable: options.enable,
                color: options.color,
                alpha: options.alpha,
                width: options.width
            };
        }
    };
    DChartAxisBaseOptionParser.prototype.toMajorTickTextAlign = function (theme, options) {
        var position = this._position;
        if (options) {
            return {
                horizontal: (options.horizontal != null ? options.horizontal :
                    theme.getMajorTickTextAlignHorizontal(position)),
                vertical: (options.vertical != null ? options.vertical :
                    theme.getMajorTickTextAlignVertical(position))
            };
        }
        return {
            horizontal: theme.getMajorTickTextAlignHorizontal(position),
            vertical: theme.getMajorTickTextAlignVertical(position)
        };
    };
    DChartAxisBaseOptionParser.prototype.toMajorTickTextOffset = function (theme, options) {
        if (options) {
            return {
                horizontal: options.horizontal,
                vertical: options.vertical
            };
        }
    };
    DChartAxisBaseOptionParser.prototype.toMajorTickTextSpacing = function (theme, options) {
        if (options) {
            return {
                horizontal: options.horizontal,
                vertical: options.vertical
            };
        }
    };
    DChartAxisBaseOptionParser.prototype.toMajorTickTextPadding = function (theme, options) {
        return {
            horizontal: (options && options.horizontal != null ?
                options.horizontal : theme.getMajorTickTextPaddingHorizontal()),
            vertical: (options && options.vertical != null ?
                options.vertical : theme.getMajorTickTextPaddingVertical())
        };
    };
    DChartAxisBaseOptionParser.prototype.toTickMajorTextDirection = function (theme, options) {
        return (options != null ? options : theme.getMajorTickTextDirection());
    };
    DChartAxisBaseOptionParser.prototype.toMajorTickTextColor = function (theme, options) {
        return (options != null ? options : theme.getMajorTickTextColor());
    };
    DChartAxisBaseOptionParser.prototype.toLabel = function (theme, options) {
        var label = options && options.label;
        if (label) {
            return {
                value: label.value,
                color: this.toLabelColor(theme, label.color),
                alpha: label.alpha,
                family: label.family,
                size: label.size,
                weight: label.weight,
                align: this.toLabelAlign(theme, label.align),
                offset: this.toLabelOffset(theme, label.offset),
                style: label.style,
                outline: this.toLabelOutline(theme, label.outline),
                spacing: this.toLabelSpacing(theme, label.spacing),
                direction: this.toLabelDirection(theme, label.direction),
                padding: this.toLabelPadding(theme, label.padding),
                clipping: label.clipping
            };
        }
    };
    DChartAxisBaseOptionParser.prototype.toLabelOutline = function (theme, options) {
        if (options) {
            return {
                enable: options.enable,
                color: options.color,
                alpha: options.alpha,
                width: options.width
            };
        }
    };
    DChartAxisBaseOptionParser.prototype.toLabelAlign = function (theme, options) {
        var position = this._position;
        if (options) {
            return {
                horizontal: (options.horizontal != null ?
                    options.horizontal : theme.getLabelAlignHorizontal(position)),
                vertical: (options.vertical != null ?
                    options.vertical : theme.getLabelAlignVertical(position))
            };
        }
        return {
            horizontal: theme.getLabelAlignHorizontal(position),
            vertical: theme.getLabelAlignVertical(position)
        };
    };
    DChartAxisBaseOptionParser.prototype.toLabelOffset = function (theme, options) {
        if (options) {
            return {
                horizontal: options.horizontal,
                vertical: options.vertical
            };
        }
    };
    DChartAxisBaseOptionParser.prototype.toLabelSpacing = function (theme, options) {
        if (options) {
            return {
                horizontal: options.horizontal,
                vertical: options.vertical
            };
        }
    };
    DChartAxisBaseOptionParser.prototype.toLabelPadding = function (theme, options) {
        return {
            horizontal: (options && options.horizontal != null ?
                options.horizontal : theme.getLabelPaddingHorizontal()),
            vertical: (options && options.vertical != null ?
                options.vertical : theme.getLabelPaddingVertical())
        };
    };
    DChartAxisBaseOptionParser.prototype.toLabelDirection = function (theme, options) {
        return (options != null ? options : theme.getLabelDirection());
    };
    DChartAxisBaseOptionParser.prototype.toLabelColor = function (theme, options) {
        return (options != null ? options : theme.getLabelColor());
    };
    return DChartAxisBaseOptionParser;
}());
export { DChartAxisBaseOptionParser };
//# sourceMappingURL=d-chart-axis-base-options-parser.js.map