import { __extends } from "tslib";
import { DApplications } from "./d-applications";
import { DHtmlElement } from "./d-html-element";
import { isString } from "./util/is-string";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
var DInput = /** @class */ (function (_super) {
    __extends(DInput, _super);
    function DInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DInput.prototype.init = function (options) {
        var _this = this;
        this._editingValidationResult = null;
        this._editingValidator = (options && options.editing && options.editing.validator) ||
            this.theme.getEditingValidator();
        _super.prototype.init.call(this, options);
        this._description = (options && options.description) || "";
        this._editingFormatter = (options && options.editing && options.editing.formatter) ||
            (options && options.text && options.text.formatter) ||
            this.theme.getEditingFormatter();
        this._editingUnformatter = (options && options.editing && options.editing.unformatter) ||
            this.theme.getEditingUnformatter();
        this._onInputKeyDownBound = function (e) {
            _this.onInputKeyDown(e);
        };
        this._onInputChangeBound = function () {
            _this.onInputChange();
        };
        this._onInputInputBound = function (e) {
            _this.onInputInput(e);
        };
    };
    Object.defineProperty(DInput.prototype, "value", {
        get: function () {
            return this._textValueComputed;
        },
        set: function (value) {
            this.text = value;
        },
        enumerable: true,
        configurable: true
    });
    DInput.prototype.onTextChange = function () {
        _super.prototype.onTextChange.call(this);
        this.validate();
    };
    DInput.prototype.validate = function () {
        var result = this._editingValidator(this._textValueComputed, this);
        if (this._editingValidationResult !== result) {
            this._editingValidationResult = result;
            this.setInvalid(result != null);
            if (this.isHovered()) {
                this.applyTitle();
            }
        }
        return result;
    };
    DInput.prototype.applyTitle = function () {
        var editingValidationResult = this._editingValidationResult;
        if (isString(editingValidationResult)) {
            var layer = DApplications.getLayer(this);
            if (layer) {
                layer.view.title = editingValidationResult;
            }
        }
        else {
            _super.prototype.applyTitle.call(this);
        }
    };
    DInput.prototype.onStart = function () {
        _super.prototype.onStart.call(this);
        var text = this._text;
        if (text != null) {
            text.visible = false;
        }
    };
    DInput.prototype.onCancel = function () {
        _super.prototype.onCancel.call(this);
        var text = this._text;
        if (text != null) {
            text.visible = true;
        }
    };
    DInput.prototype.onEnd = function () {
        _super.prototype.onEnd.call(this);
        this.onInputChange();
    };
    DInput.prototype.onElementAttached = function (element, before, after) {
        _super.prototype.onElementAttached.call(this, element, before, after);
        element.type = this.getInputType();
        element.value = this._editingFormatter(this._textValueComputed, this);
        element.addEventListener("keydown", this._onInputKeyDownBound);
        element.addEventListener("change", this._onInputChangeBound);
        element.addEventListener("input", this._onInputInputBound);
    };
    DInput.prototype.onElementDetached = function (element, before, after) {
        _super.prototype.onElementDetached.call(this, element, before, after);
        element.removeEventListener("keydown", this._onInputKeyDownBound);
        element.removeEventListener("change", this._onInputChangeBound);
        element.removeEventListener("input", this._onInputInputBound);
    };
    DInput.prototype.onInputKeyDown = function (e) {
        if (UtilKeyboardEvent.isOkKey(e)) {
            this.end();
            this.emit("enter", this);
        }
        else if (UtilKeyboardEvent.isCancelKey(e)) {
            this.cancel();
        }
    };
    DInput.prototype.onInputChange = function () {
        if (this._isElementShown) {
            var element = this._element;
            if (element != null) {
                var newValue = this.toValue(element.value);
                var oldValue = this._textValueComputed;
                if (oldValue !== newValue) {
                    this.text = newValue;
                    this.emit("change", newValue, oldValue, this);
                }
            }
        }
    };
    DInput.prototype.onInputInput = function (e) {
        if (e.target instanceof HTMLInputElement) {
            this.emit("input", this.toValue(e.target.value), this);
        }
    };
    DInput.prototype.onDownThis = function (e) {
        if (this.isFocused()) {
            this.start();
        }
        _super.prototype.onDownThis.call(this, e);
    };
    DInput.prototype.getType = function () {
        return "DInput";
    };
    return DInput;
}(DHtmlElement));
export { DInput };
//# sourceMappingURL=d-input.js.map