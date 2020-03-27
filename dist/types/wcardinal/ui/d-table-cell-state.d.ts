/**
 * Cell states.
 */
export declare const DTableCellState: {
    /**
     * Cells of even rows.
     */
    EVEN: number;
    /**
     * Start cells in rows.
     */
    START: number;
    /**
     * End cells in rows.
     */
    END: number;
    /**
     * Cells of frozen columns.
     */
    FROZEN: number;
    /**
     * Cells of a right-most frozen column.
     */
    FROZEN_END: number;
    /**
     * Header cells of columns sorted in the ascending order.
     */
    SORTED_ASCENDING: number;
    /**
     * Header cells of columns sorted in the descending order.
     */
    SORTED_DESCENDING: number;
    /**
     * Cells with a link which is opened in a new window.
     */
    NEW_WINDOW: number;
    /**
     * Cells with child cells.
     */
    HAS_CHILDREN: number;
    /**
     * Cells opened.
     */
    OPENED: number;
};
