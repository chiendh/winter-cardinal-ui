/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DPaginationDotsButton } from "./d-pagination-dots-button";
var DPaginationDynamicButtons = /** @class */ (function (_super) {
    __extends(DPaginationDynamicButtons, _super);
    function DPaginationDynamicButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DPaginationDynamicButtons.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this._dotsBtnLeft = new DPaginationDotsButton({
            width: options.button.width,
            visible: !!options.button.dotsLeft
        });
        this._dotsBtnRight = new DPaginationDotsButton({
            width: options.button.width,
            visible: !!options.button.dotsRight
        });
        this.addChild(this._dotsBtnLeft);
        this.addChild(this._dotsBtnRight);
    };
    DPaginationDynamicButtons.prototype.update = function (options) {
        var _this = this;
        if (options.start == null || options.end == null) {
            return;
        }
        var btnsCount = options.end - options.start + 1 > 0 ? options.end - options.start + 1 : 0;
        var pageButtons = this.children.slice(1, this.children.length - 1);
        if (pageButtons.length < btnsCount) {
            for (var i = pageButtons.length; i < btnsCount; i++) {
                var btn = new DButton({
                    width: options.button.width
                });
                this.addChildAt(btn, this.children.length - 1);
                btn.on("active", function (clickedBtn) {
                    _this.emit("active", clickedBtn);
                });
            }
            // re-new "pageButtons" after add new buttons
            pageButtons = this.children.slice(1, this.children.length - 1);
        }
        else if (pageButtons.length > btnsCount) {
            for (var i = btnsCount; i < pageButtons.length; i++) {
                pageButtons[i].hide();
            }
        }
        // update button text and active state
        for (var i = 0; i < btnsCount; i++) {
            var btn = pageButtons[i];
            btn.text = options.start + i + 1;
            btn.setActive(options.start + i === options.selected);
            if (btn.isHidden()) {
                btn.show();
            }
        }
        // update visible state of dots buttons
        if (!!options.button.dotsLeft) {
            this._dotsBtnLeft.show();
        }
        else {
            this._dotsBtnLeft.hide();
        }
        if (!!options.button.dotsRight) {
            this._dotsBtnRight.show();
        }
        else {
            this._dotsBtnRight.hide();
        }
    };
    DPaginationDynamicButtons.prototype.getType = function () {
        return "DPaginationDynamicButtons";
    };
    return DPaginationDynamicButtons;
}(DLayoutHorizontal));
export { DPaginationDynamicButtons };
//# sourceMappingURL=d-pagination-dynamic-buttons.js.map