/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DisplayObject } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseStates } from "./d-base-states";
import { DLayoutVertical } from "./d-layout-vertical";
import { DMenuItemExpandableBody } from "./d-menu-item-expandable-body";
import { DMenuItemExpandableHeader } from "./d-menu-item-expandable-header";
import { DMenuItemExpandables } from "./d-menu-item-expandables";
var DMenuItemExpandable = /** @class */ (function (_super) {
    __extends(DMenuItemExpandable, _super);
    function DMenuItemExpandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuItemExpandable.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        // Header
        var theme = this.theme;
        var header = this.toHeader(theme, options);
        this._header = header;
        header.on("select", function () {
            _this.toggle();
        });
        this.addChild(header);
        // Body
        var body = this.toBody(theme, options);
        this._body = body;
        var sticky = (options && options.sticky != null ? options.sticky : false);
        this.newItems(body, sticky, theme, options);
        this.addChild(body);
        //
        if (this.isActive()) {
            this.onActivated();
        }
        else {
            this.onDeactivated();
        }
    };
    DMenuItemExpandable.prototype.newItems = function (body, sticky, theme, options) {
        if (options != null && options.items != null) {
            DMenuItemExpandables.newItems(body, options.items, sticky);
        }
    };
    DMenuItemExpandable.prototype.toHeader = function (theme, options) {
        if (options) {
            if (options.header instanceof DisplayObject) {
                return options.header;
            }
            else {
                return this.newHeader(theme, options.header);
            }
        }
        return this.newHeader(theme);
    };
    DMenuItemExpandable.prototype.newHeader = function (theme, options) {
        return new DMenuItemExpandableHeader(options);
    };
    DMenuItemExpandable.prototype.toBody = function (theme, options) {
        if (options && options.body) {
            if (options.body instanceof DisplayObject) {
                return options.body;
            }
            else {
                return this.newBody(theme, options.body);
            }
        }
        return this.newBody(theme);
    };
    DMenuItemExpandable.prototype.newBody = function (theme, options) {
        return new DMenuItemExpandableBody(options);
    };
    DMenuItemExpandable.prototype.open = function () {
        this.setActive(true);
    };
    DMenuItemExpandable.prototype.close = function () {
        this.setActive(false);
    };
    DMenuItemExpandable.prototype.toggle = function () {
        this.setActive(!this.isActive());
    };
    DMenuItemExpandable.prototype.onActivated = function () {
        var body = this._body;
        if (body instanceof DBase) {
            body.show();
        }
        else {
            body.visible = true;
        }
    };
    DMenuItemExpandable.prototype.onDeactivated = function () {
        var body = this._body;
        if (body instanceof DBase) {
            body.hide();
        }
        else {
            body.visible = false;
        }
    };
    DMenuItemExpandable.prototype.onStateChange = function (newState, oldState) {
        _super.prototype.onStateChange.call(this, newState, oldState);
        if (DBaseStates.isActive(newState)) {
            if (!DBaseStates.isActive(oldState)) {
                this.onActivated();
            }
        }
        else {
            if (DBaseStates.isActive(oldState)) {
                this.onDeactivated();
            }
        }
    };
    DMenuItemExpandable.prototype.getType = function () {
        return "DMenuItemExpandable";
    };
    DMenuItemExpandable.isCompatible = function (options) {
        return "header" in options;
    };
    return DMenuItemExpandable;
}(DLayoutVertical));
export { DMenuItemExpandable };
//# sourceMappingURL=d-menu-item-expandable.js.map