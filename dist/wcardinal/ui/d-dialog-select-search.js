import { __extends } from "tslib";
import { utils } from "pixi.js";
var DDialogSelectSearh = /** @class */ (function (_super) {
    __extends(DDialogSelectSearh, _super);
    function DDialogSelectSearh(search) {
        var _this = _super.call(this) || this;
        _this._search = search || (function (_) { return Promise.resolve([]); });
        _this._id = 0;
        _this._idCompleted = 0;
        _this._result = null;
        return _this;
    }
    DDialogSelectSearh.prototype.create = function (args) {
        var _this = this;
        var id = ++this._id;
        this._search(args[0]).then(function (searchResult) {
            if (_this._id === id) {
                _this._idCompleted = id;
                _this._result = searchResult;
                _this.emit("success", _this, searchResult);
                _this.emit("change", _this);
            }
        }, function () {
            if (_this._id === id) {
                _this._idCompleted = id;
                _this._result = null;
                _this.emit("fail", _this);
                _this.emit("change", _this);
            }
        });
        this.emit("change", this);
    };
    DDialogSelectSearh.prototype.isDone = function () {
        return this._id === this._idCompleted;
    };
    DDialogSelectSearh.prototype.getResult = function () {
        return this._result;
    };
    return DDialogSelectSearh;
}(utils.EventEmitter));
export { DDialogSelectSearh };
//# sourceMappingURL=d-dialog-select-search.js.map