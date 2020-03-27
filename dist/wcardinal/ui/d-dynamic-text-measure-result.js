import { DDynamicTextMeasureResultCharacter } from "./d-dynamic-text-measure-result-character";
var DDynamicTextMeasureResult = /** @class */ (function () {
    function DDynamicTextMeasureResult() {
        this.count = 0;
        this.width = 0;
        this.height = 0;
        this.characters = [];
        this.clipped = false;
        this.x = 0;
        this.y = 0;
    }
    DDynamicTextMeasureResult.prototype.start = function () {
        this.count = 0;
        this.width = 0;
        this.height = 0;
        this.clipped = false;
        this.x = 0;
        this.y = 0;
    };
    DDynamicTextMeasureResult.prototype.push = function (character) {
        var x = this.x;
        this.x += character.advance;
        var y = this.y;
        var count = this.count;
        var characters = this.characters;
        if (count < characters.length) {
            characters[count].set(x, y, character);
        }
        else {
            characters.push(new DDynamicTextMeasureResultCharacter(x, y, character));
        }
        this.count += 1;
    };
    DDynamicTextMeasureResult.prototype.newLine = function (lineHeight) {
        this.width = Math.max(this.width, this.x);
        this.x = 0;
        this.y += lineHeight;
    };
    DDynamicTextMeasureResult.prototype.pop = function () {
        if (0 < this.x) {
            var count = this.count;
            var characters = this.characters;
            if (0 < count) {
                var character = characters[count - 1];
                this.x -= character.character.advance;
                this.count -= 1;
                return true;
            }
        }
        return false;
    };
    DDynamicTextMeasureResult.prototype.end = function (lineHeight) {
        this.newLine(lineHeight);
        this.height = this.y;
    };
    return DDynamicTextMeasureResult;
}());
export { DDynamicTextMeasureResult };
//# sourceMappingURL=d-dynamic-text-measure-result.js.map