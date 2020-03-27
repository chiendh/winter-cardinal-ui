/**
 * A border mask.
 * Borders on masked parts are not rendered.
 */
export declare enum DBorderMask {
    NONE = 0,
    TOP = 1,
    RIGHT = 2,
    BOTTOM = 4,
    LEFT = 8,
    TOP_RIGHT = 3,
    TOP_BOTTOM = 5,
    TOP_LEFT = 9,
    RIGHT_BOTTOM = 6,
    RIGHT_LEFT = 10,
    BOTTOM_LEFT = 12,
    NOT_TOP = 14,
    NOT_RIGHT = 13,
    NOT_BOTTOM = 11,
    NOT_LEFT = 7,
    ALL = 15
}
