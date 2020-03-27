/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DPaginationDynamicButtons } from "./d-pagination-dynamic-buttons";
import { DPaginationNavigationButton } from "./d-pagination-navigation-button";
import { DThemes } from "./theme";
var DPagination = /** @class */ (function (_super) {
    __extends(DPagination, _super);
    function DPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DPagination.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.DEFAULT_SELECTED = 0; // set default selected index page is page 0
        // get total pages
        this._total = options.total;
        // get selected page
        this._selected = options.selected ? options.selected : this.DEFAULT_SELECTED;
        // get button options
        this._buttonOptions = {
            first: !!(options.button && options.button.first),
            last: !!(options.button && options.button.last),
            width: options.button && options.button.width
        };
        this.initButtons(this.getButtonWidth());
        this.listenButtonClicked();
        this.on("resize", function () {
            _this._numberPageButtonVisible = _this.toNumberVisible();
            _this.update();
        });
    };
    Object.defineProperty(DPagination.prototype, "selected", {
        /**
         * Get selected page.
         *
         * @returns index of selected page.
         */
        get: function () {
            return this._selected;
        },
        /**
         * Set selected page.
         *
         * @param selected page's index want to select.
         */
        set: function (selected) {
            if (selected < 0 || selected >= this._total || !Number.isInteger(selected)) {
                selected = this.DEFAULT_SELECTED;
            }
            this._selected = selected;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPagination.prototype, "total", {
        /**
         * Get total pages.
         *
         * @returns number of total pages.
         */
        get: function () {
            return this._total;
        },
        /**
         * Set total page.
         *
         * @param total number of page want to present in pagination.
         */
        set: function (total) {
            if (total >= 0 && Number.isInteger(total)) {
                this._total = total;
                this._numberPageButtonVisible = this.toNumberVisible();
                this.selected = this._selected;
                this._lastPageBtn.text = this._total;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    DPagination.prototype.initButtons = function (width) {
        this._previousBtn = new DPaginationNavigationButton({
            width: width,
            image: {
                source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_previous
            }
        });
        this._nextBtn = new DPaginationNavigationButton({
            width: width,
            image: {
                source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_next
            }
        });
        this._goFirstBtn = new DPaginationNavigationButton({
            width: width,
            image: {
                source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_go_first
            },
            visible: this._buttonOptions.first
        });
        this._goLastBtn = new DPaginationNavigationButton({
            width: width,
            image: {
                source: DThemes.getInstance().getAtlas().mappings.pagination_navigation_button_go_last
            },
            visible: this._buttonOptions.last
        });
        this._dynamicPageBtns = new DPaginationDynamicButtons({
            button: {
                width: width
            }
        });
        this._firstPageBtn = new DButton({
            width: width,
            text: {
                value: 1
            }
        });
        this._lastPageBtn = new DButton({
            width: width,
            text: {
                value: this._total
            }
        });
        this.addChild(this._goFirstBtn);
        this.addChild(this._previousBtn);
        this.addChild(this._firstPageBtn);
        this.addChild(this._dynamicPageBtns);
        this.addChild(this._lastPageBtn);
        this.addChild(this._nextBtn);
        this.addChild(this._goLastBtn);
    };
    DPagination.prototype.listenButtonClicked = function () {
        var _this = this;
        this._firstPageBtn.on("active", function (btn) {
            _this.onClickPageButton(btn);
        });
        this._lastPageBtn.on("active", function (btn) {
            _this.onClickPageButton(btn);
        });
        this._dynamicPageBtns.on("active", function (btn) {
            _this.onClickPageButton(btn);
        });
        this._goFirstBtn.on("active", function (btn) {
            _this.selected = _this.DEFAULT_SELECTED;
        });
        this._goLastBtn.on("active", function (btn) {
            _this.selected = _this._total - 1;
        });
        this._nextBtn.on("active", function (btn) {
            if (_this.selected !== _this._total + 1) {
                _this.selected = _this._selected + 1;
            }
        });
        this._previousBtn.on("active", function (btn) {
            if (_this._selected !== 0) {
                _this.selected = _this._selected - 1;
            }
        });
    };
    DPagination.prototype.update = function () {
        var startDynamic;
        var endDynamic;
        var dotsLeft;
        var dotsRight;
        var numberButtonsInLeft = 0;
        var numberButtonsInRight = 0;
        this.updateStaticButtons();
        // Number displayed buttons from first button to selected button when select center button of all buttons.
        // Not including selected button.
        var numberButtonsFirstToCenter = Math.ceil((this._numberPageButtonVisible - 1) * 0.5);
        var numberButtonsCenterToEnd = Math.floor((this._numberPageButtonVisible - 1) * 0.5);
        if (this._selected < numberButtonsFirstToCenter) {
            numberButtonsInLeft = this._selected;
            numberButtonsInRight = this._numberPageButtonVisible - numberButtonsInLeft - 1;
        }
        else if (this._selected + numberButtonsCenterToEnd > this._total - 1) {
            numberButtonsInRight = (this._total - 1) - this.selected;
            numberButtonsInLeft = this._numberPageButtonVisible - numberButtonsInRight - 1;
        }
        else {
            numberButtonsInLeft = numberButtonsFirstToCenter;
            numberButtonsInRight = numberButtonsCenterToEnd;
        }
        if (this._selected <= numberButtonsInLeft) {
            startDynamic = 1;
            dotsLeft = false;
        }
        else {
            startDynamic = this._selected - numberButtonsInLeft + 2;
            dotsLeft = true;
        }
        if (this._selected + numberButtonsInRight >= this._total - 1) {
            endDynamic = this._total - 2;
            dotsRight = false;
        }
        else {
            endDynamic = this._selected + numberButtonsInRight - 2;
            dotsRight = true;
        }
        this._dynamicPageBtns.update({
            start: startDynamic,
            end: endDynamic,
            selected: this._selected,
            button: {
                width: this.getButtonWidth(),
                dotsLeft: dotsLeft,
                dotsRight: dotsRight
            }
        });
    };
    DPagination.prototype.updateStaticButtons = function () {
        if (this._total > 0) {
            this._firstPageBtn.show();
        }
        else {
            this._firstPageBtn.hide();
        }
        if (this._total > 1) {
            this._lastPageBtn.show();
        }
        else {
            this._lastPageBtn.hide();
        }
        var isFirst = this._selected === this.DEFAULT_SELECTED;
        var isLast = this._selected === this._total - 1 || this._total === 0;
        this._firstPageBtn.setActive(isFirst);
        this._lastPageBtn.setActive(isLast);
        this._goFirstBtn.setDisabled(isFirst);
        this._previousBtn.setDisabled(isFirst);
        this._nextBtn.setDisabled(isLast);
        this._goLastBtn.setDisabled(isLast);
    };
    DPagination.prototype.getButtonWidth = function () {
        return this._buttonOptions.width ? this._buttonOptions.width : this.theme.getButtonWidth();
    };
    DPagination.prototype.toNumberVisible = function () {
        var numberNavigationBtn = 2; // 2 buttons always displayed are "next" and "previous" button
        if (this._buttonOptions.first) {
            numberNavigationBtn++;
        }
        if (this._buttonOptions.last) {
            numberNavigationBtn++;
        }
        var widthOfNavigationBtns = numberNavigationBtn * (this.getButtonWidth() + this._margin.horizontal * 2);
        var widthOfPageBtns = this.width - widthOfNavigationBtns;
        var numberVisible = Math.floor(widthOfPageBtns / (this.getButtonWidth() + this._margin.horizontal * 2));
        /* set numberVisible is 5, if it less than 5
             If total pages less than numberVisible, set numberVisible equal total pages
        **/
        return Math.min(this._total, Math.max(numberVisible, 5));
    };
    DPagination.prototype.onClickPageButton = function (btn) {
        var btnIndex = Number(btn.text) - 1;
        if (this._selected !== btnIndex) {
            this._selected = btnIndex;
            this.update();
        }
    };
    DPagination.prototype.getType = function () {
        return "DPagination";
    };
    return DPagination;
}(DLayoutHorizontal));
export { DPagination };
//# sourceMappingURL=d-pagination.js.map