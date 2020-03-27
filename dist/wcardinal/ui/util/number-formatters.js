/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { NumberFormatterImpl } from "./number-formatter-impl";
/**
 * An number formatter utility class.
 */
var NumberFormatters = /** @class */ (function () {
    function NumberFormatters() {
    }
    /**
     * Creates a number formatter of the given format.
     * Please refer to {@link NumberFormatter} for format details.
     *
     * @return A created number formatter
     */
    NumberFormatters.create = function (format) {
        return new NumberFormatterImpl(format);
    };
    return NumberFormatters;
}());
export { NumberFormatters };
//# sourceMappingURL=number-formatters.js.map