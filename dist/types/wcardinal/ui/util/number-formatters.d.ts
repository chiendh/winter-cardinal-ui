import { NumberFormatter } from "./number-formatter";
/**
 * An number formatter utility class.
 */
export declare class NumberFormatters {
    /**
     * Creates a number formatter of the given format.
     * Please refer to {@link NumberFormatter} for format details.
     *
     * @return A created number formatter
     */
    static create(format: string): NumberFormatter;
}
