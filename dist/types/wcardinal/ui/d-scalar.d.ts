/**
 * An object returining a scalar value.
 */
export interface DScalar {
    /**
     * Calculates a scalar value.
     *
     * @param parent a parent value
     * @param self a self value
     * @param padding a padding value
     * @param current a current value
     * @return a calculated scalar value
     */
    calculate(parent: number, self: number, padding: number, current: number): number;
}
