/**
 * Returns a ceiling index of the given value.
 * The array must be sorted in an ascending order.
 *
 * @param array an array sorted in an ascending order
 * @param value a value to be searched
 * @returns a ceiling index of the given value
 */
export declare const toCeilingIndex: <V>(array: V[], value: V, size: number, offset: number) => number;
