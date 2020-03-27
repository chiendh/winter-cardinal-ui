import { DDynamicTextMeasureResult } from "./d-dynamic-text-measure-result";
import { UtilCharacterIterator } from "./util/util-character-iterator";
var DDynamicTextMeasure = /** @class */ (function () {
    function DDynamicTextMeasure() {
    }
    DDynamicTextMeasure.measure = function (text, atlas, clippingWidth) {
        var result = DDynamicTextMeasure.RESULT = DDynamicTextMeasure.RESULT || new DDynamicTextMeasureResult();
        result.start();
        if (atlas != null) {
            var iterator = UtilCharacterIterator.from(text);
            var lineHeight = atlas.font.height;
            var newLine = "\n";
            while (iterator.hasNext()) {
                var character = iterator.next();
                if (character === newLine) {
                    result.newLine(lineHeight);
                }
                else {
                    var a = atlas.get(character);
                    if (a != null) {
                        if (clippingWidth != null && clippingWidth < result.x + a.advance) {
                            result.clipped = true;
                            var dots = atlas.get("...");
                            if (dots != null) {
                                while (clippingWidth - dots.advance < result.x) {
                                    if (!result.pop()) {
                                        break;
                                    }
                                }
                                if (result.x <= clippingWidth - dots.advance) {
                                    result.push(dots);
                                }
                            }
                            while (iterator.hasNext()) {
                                if (iterator.next() === newLine) {
                                    result.newLine(lineHeight);
                                    break;
                                }
                            }
                        }
                        else {
                            result.push(a);
                        }
                    }
                }
            }
            result.end(lineHeight);
        }
        return result;
    };
    DDynamicTextMeasure.RESULT = null;
    return DDynamicTextMeasure;
}());
export { DDynamicTextMeasure };
//# sourceMappingURL=d-dynamic-text-measure.js.map