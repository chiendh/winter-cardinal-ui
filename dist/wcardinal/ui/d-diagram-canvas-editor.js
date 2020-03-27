/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Graphics } from "pixi.js";
import { DApplications } from "./d-applications";
import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramCanvasEditorBackground } from "./d-diagram-canvas-editor-background";
import { DDiagramSerializedVersion } from "./d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";
import { ESnapperTargetValueType } from "./snapper/e-snapper-target-value";
import { isNumber } from "./util/is-number";
var DDiagramCanvasEditor = /** @class */ (function (_super) {
    __extends(DDiagramCanvasEditor, _super);
    function DDiagramCanvasEditor(options) {
        var _this = _super.call(this, options) || this;
        _this._background = new DDiagramCanvasEditorBackground(_this._background, _this.toBackgroundColorBase(_this.theme, options));
        _this.shadow = _this.theme.newShadowWeak();
        var snapperGraphics = new Graphics();
        snapperGraphics.visible = false;
        _this.addChildAt(snapperGraphics, _this.children.length - 1);
        _this._snapperGraphics = snapperGraphics;
        var snapper = options.snapper;
        snapper.target.on("change", function () {
            _this.toDirty();
            DApplications.update(_this);
        });
        _this._snapper = snapper;
        return _this;
    }
    DDiagramCanvasEditor.prototype.toBackgroundColorBase = function (theme, options) {
        var background = options.background;
        var backgroundBase = background && background.base;
        return (backgroundBase != null ? backgroundBase : theme.getBackgroundBase());
    };
    DDiagramCanvasEditor.prototype.serialize = function (id) {
        var manager = new EShapeResourceManagerSerialization();
        var items = [];
        var background = this._background;
        var backgroundColor = background.color;
        var backgroundAlpha = background.alpha;
        return {
            version: DDiagramSerializedVersion,
            id: id,
            name: this.name,
            width: this.width,
            height: this.height,
            background: {
                color: isNumber(backgroundColor) ? backgroundColor : 0xffffff,
                alpha: isNumber(backgroundAlpha) ? backgroundAlpha : 0
            },
            tile: this._tile.serialize(),
            resources: manager.serialize(),
            layers: this._layer.serialize(manager, items),
            items: items,
            snap: this._snapper.serialize()
        };
    };
    DDiagramCanvasEditor.prototype.onReflow = function () {
        _super.prototype.onReflow.call(this);
        var snapperGraphics = this._snapperGraphics;
        var target = this._snapper.target;
        if (target.visible) {
            var borderColor = 0x1e87f0;
            var borderWidth = 1;
            var borderAlpha = 0.5;
            var width = this.width + 0.5;
            var height = this.height + 0.5;
            var values = target.values;
            snapperGraphics.clear();
            snapperGraphics.lineStyle(0, 0, 0, 0);
            snapperGraphics.beginFill(borderColor, borderAlpha);
            for (var i = 0, imax = values.length; i < imax; ++i) {
                var value = values[i];
                if (value.type === ESnapperTargetValueType.VERTICAL) {
                    snapperGraphics.drawRect(value.position, 0, borderWidth, height);
                }
                else {
                    snapperGraphics.drawRect(0, value.position, width, borderWidth);
                }
            }
            snapperGraphics.endFill();
            snapperGraphics.visible = true;
        }
        else {
            snapperGraphics.visible = false;
        }
    };
    DDiagramCanvasEditor.prototype.getType = function () {
        return "DDiagramCanvasEditor";
    };
    return DDiagramCanvasEditor;
}(DDiagramCanvasBase));
export { DDiagramCanvasEditor };
//# sourceMappingURL=d-diagram-canvas-editor.js.map