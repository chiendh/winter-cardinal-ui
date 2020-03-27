import { DBaseState } from "./d-base-state";
/**
 * Tree item states.
 */
export var DTreeItemState = {
    /**
     * the parent item is expanded
     */
    EXPANDED: DBaseState.CUSTOM << 0,
    /**
     * the parent item is collapsed
     */
    COLLAPSED: DBaseState.CUSTOM << 1,
    /**
     * the child item is selected
     */
    SELECTED: DBaseState.CUSTOM << 2
};
//# sourceMappingURL=d-tree-item-state.js.map