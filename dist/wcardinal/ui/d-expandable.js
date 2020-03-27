/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DisplayObject } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseStates } from "./d-base-states";
import { DExpandableHeader } from "./d-expandable-header";
import { DLayoutVertical } from "./d-layout-vertical";
var DExpandable = /** @class */ (function (_super) {
    __extends(DExpandable, _super);
    function DExpandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DExpandable.prototype.init = function (options) {
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
        this.addChild(body);
        //
        if (this.isActive()) {
            this.onActivated();
        }
        else {
            this.onDeactivated();
        }
    };
    DExpandable.prototype.toHeader = function (theme, options) {
        if (options && options.header) {
            if (options.header instanceof DisplayObject) {
                return options.header;
            }
            else {
                return this.newHeader(theme, options.header);
            }
        }
        return this.newHeader(theme);
    };
    DExpandable.prototype.newHeader = function (theme, options) {
        return new DExpandableHeader(options);
    };
    DExpandable.prototype.toBody = function (theme, options) {
        return options.body;
    };
    DExpandable.prototype.open = function () {
        this.setActive(true);
    };
    DExpandable.prototype.close = function () {
        this.setActive(false);
    };
    DExpandable.prototype.toggle = function () {
        this.setActive(!this.isActive());
    };
    DExpandable.prototype.onActivated = function () {
        var body = this._body;
        if (body instanceof DBase) {
            body.show();
        }
        else {
            body.visible = true;
        }
    };
    DExpandable.prototype.onDeactivated = function () {
        var body = this._body;
        if (body instanceof DBase) {
            body.hide();
        }
        else {
            body.visible = false;
        }
    };
    DExpandable.prototype.onStateChange = function (newState, oldState) {
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
    DExpandable.prototype.getType = function () {
        return "DExpandable";
    };
    return DExpandable;
}(DLayoutVertical));
export { DExpandable };
//# sourceMappingURL=d-expandable.js.map