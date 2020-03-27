import { __extends } from "tslib";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DTreeItemState } from "./d-tree-item-state";
import { DTreeItemTextAndImage } from "./d-tree-item-text-and-image";
import { DTreeItemToggleIcon } from "./d-tree-item-toggle-icon";
import { UtilPointerEvent } from "./util";
var toText = function (options) {
    if (options) {
        return options.text;
    }
    return "";
};
var isParent = function (options) {
    return !!(options && options.isParent);
};
var isExpanded = function (options) {
    return !!(options && options.expanded);
};
var toImage = function (options) {
    return options && options.image ? options.image : null;
};
var toYCoordinate = function (options) {
    return options ? options.y : 0;
};
var toRawData = function (options) {
    return options ? options.rawData : {
        text: "",
        children: []
    };
};
var toPaddingLeft = function (theme, options) {
    var level = options ? options.level : 0;
    return theme.getPaddingByLevel(level);
};
var toTreeItemTextAndImage = function (options) {
    return new DTreeItemTextAndImage({
        text: {
            value: toText(options)
        },
        image: {
            source: toImage(options)
        }
    });
};
var DTreeItem = /** @class */ (function (_super) {
    __extends(DTreeItem, _super);
    function DTreeItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DTreeItem.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        // get isParent option
        this._isParent = isParent(options);
        // get isExpand option
        this._isExpanded = isExpanded(options);
        // get raw data
        this._rawData = toRawData(options);
        this._icon = new DTreeItemToggleIcon();
        this._textAndImage = toTreeItemTextAndImage(options);
        this.addChild(this._icon);
        this.addChild(this._textAndImage);
        this._icon.on(UtilPointerEvent.down, function () {
            _this.onToggle();
        });
        this._textAndImage.on(UtilPointerEvent.down, function (e) {
            _this.onSelect(e);
        });
        // update states
        this.updateStates(false);
    };
    DTreeItem.prototype.onSelect = function (e) {
        this.emit("select", e);
    };
    DTreeItem.prototype.onToggle = function () {
        this.emit("toggle");
    };
    DTreeItem.prototype.isExpanded = function () {
        return this._isExpanded;
    };
    DTreeItem.prototype.isParent = function () {
        return this._isParent;
    };
    DTreeItem.prototype.getRawData = function () {
        return this._rawData;
    };
    DTreeItem.prototype.update = function (options, isActive) {
        this._textAndImage.text = toText(options);
        this._textAndImage.image = toImage(options);
        this._rawData = toRawData(options);
        this._padding.left = toPaddingLeft(this.theme, options);
        this.position.y = toYCoordinate(options);
        this._isParent = isParent(options);
        this._isExpanded = isExpanded(options);
        this.updateStates(isActive);
        return this;
    };
    DTreeItem.prototype.updateActiveState = function (isActive) {
        this.setActive(isActive);
        this._icon.setState(DTreeItemState.SELECTED, isActive);
        this._textAndImage.setState(DTreeItemState.SELECTED, isActive);
    };
    DTreeItem.prototype.updateStates = function (isActive) {
        this.updateActiveState(isActive);
        this._icon.setState(DTreeItemState.COLLAPSED, !this._isExpanded && this._isParent);
        this._icon.setState(DTreeItemState.EXPANDED, !!this._isExpanded && this._isParent);
    };
    DTreeItem.prototype.getType = function () {
        return "DTreeItem";
    };
    return DTreeItem;
}(DLayoutHorizontal));
export { DTreeItem };
//# sourceMappingURL=d-tree-item.js.map