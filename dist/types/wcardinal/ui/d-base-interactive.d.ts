/**
 * DBase interactivity.
 * Mouse / touch events are triggered only on interactive objects.
 */
export declare enum DBaseInteractive {
    /**
     * Not interactive.
     */
    NONE = 0,
    /**
     * Interactive.
     * However children are not interactive.
     */
    SELF = 1,
    /**
     * Not interactive.
     * However children are interactive.
     */
    CHILDREN = 2,
    /**
     * Interactive.
     * Children are also interactive.
     */
    BOTH = 3
}
