var UtilCharacterIterator = /** @class */ (function () {
    function UtilCharacterIterator() {
        this._target = "";
        this._position = 0;
    }
    Object.defineProperty(UtilCharacterIterator.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            this._position = position;
        },
        enumerable: true,
        configurable: true
    });
    UtilCharacterIterator.prototype.init = function (target) {
        this._target = target;
        this._position = 0;
    };
    UtilCharacterIterator.prototype.hasNext = function () {
        return this._position < this._target.length;
    };
    UtilCharacterIterator.prototype.findNextBreak = function (target, istart) {
        var iend = target.length;
        for (var i = istart; i < iend; ++i) {
            var code = target.charCodeAt(i);
            if (!this.isLowSurrogate(code) && !this.isVariationSelector(code)) {
                return i;
            }
        }
        return iend;
    };
    UtilCharacterIterator.prototype.isHighSurrogate = function (code) {
        return (0xd800 <= code && code <= 0xdbff);
    };
    UtilCharacterIterator.prototype.isLowSurrogate = function (code) {
        return (0xdc00 <= code && code <= 0xdfff);
    };
    UtilCharacterIterator.prototype.isVariationSelector = function (code) {
        return (0xfe00 <= code && code <= 0xfe0f);
    };
    UtilCharacterIterator.prototype.next = function () {
        var target = this._target;
        var position = this._position;
        var nextBreak = this.findNextBreak(target, position + 1);
        var result = target.substring(position, nextBreak);
        this._position = nextBreak;
        return result;
    };
    /**
     * Advances the position if the next character is not equal to
     * the given `except`.
     *
     * @param except
     * @return true if the position is advanced
     */
    UtilCharacterIterator.prototype.advance = function (except) {
        var target = this._target;
        var position = this._position;
        var nextBreak = this.findNextBreak(target, position + 1);
        if (target.substring(position, nextBreak) !== except) {
            this._position = nextBreak;
            return true;
        }
        return false;
    };
    UtilCharacterIterator.from = function (target) {
        if (UtilCharacterIterator._instance == null) {
            UtilCharacterIterator._instance = new UtilCharacterIterator();
        }
        var instance = UtilCharacterIterator._instance;
        instance.init(target);
        return instance;
    };
    UtilCharacterIterator._instance = null;
    return UtilCharacterIterator;
}());
export { UtilCharacterIterator };
//# sourceMappingURL=util-character-iterator.js.map