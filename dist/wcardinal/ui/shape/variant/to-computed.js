import { isFunction } from "../../util/is-function";
import { isNumber } from "../../util/is-number";
export var toComputed = function (index, value, def) {
    if (isNumber(value)) {
        return value;
    }
    else if (isFunction(value)) {
        return value(index);
    }
    else if (value) {
        return value[index % value.length];
    }
    return def;
};
//# sourceMappingURL=to-computed.js.map