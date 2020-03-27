/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBaseState } from "./d-base-state";
var DBaseStates = /** @class */ (function () {
    function DBaseStates() {
    }
    DBaseStates.is = function (target, state) {
        return !!(target & state);
    };
    DBaseStates.isHovered = function (target) {
        return !!(target & DBaseState.HOVERED);
    };
    DBaseStates.isDragging = function (target) {
        return !!(target & DBaseState.DRAGGING);
    };
    DBaseStates.isFocused = function (target) {
        return !!(target & DBaseState.FOCUSED);
    };
    DBaseStates.isFocusedIn = function (target) {
        return !!(target & (DBaseState.FOCUSED | DBaseState.FOCUSED_IN));
    };
    DBaseStates.isActive = function (target) {
        return !!(target & DBaseState.ACTIVE);
    };
    DBaseStates.isActiveIn = function (target) {
        return !!(target & (DBaseState.ACTIVE | DBaseState.ACTIVE_IN));
    };
    DBaseStates.isNotActive = function (state) {
        return (!!(state & DBaseState.DISABLED)) || (!(state & DBaseState.ACTIVE));
    };
    DBaseStates.isPressed = function (target) {
        return !!(target & DBaseState.PRESSED);
    };
    DBaseStates.isDisabled = function (target) {
        return !!(target & DBaseState.DISABLED);
    };
    DBaseStates.isReadOnly = function (target) {
        return !!(target & DBaseState.READ_ONLY);
    };
    DBaseStates.isActionable = function (target) {
        return !(target & (DBaseState.DISABLED | DBaseState.READ_ONLY));
    };
    DBaseStates.isInvalid = function (target) {
        return !!(target & DBaseState.INVALID);
    };
    DBaseStates.isSucceeded = function (target) {
        return !!(target & DBaseState.SUCCEEDED);
    };
    DBaseStates.isFailed = function (target) {
        return !!(target & DBaseState.FAILED);
    };
    DBaseStates.bind = function (destination, destinationState, source, when) {
        destination.setState(destinationState, when(source.state));
        source.on("statechange", function (newSourceState) {
            destination.setState(destinationState, when(newSourceState));
        });
    };
    DBaseStates.disable = function (destination, source, when) {
        if (when === void 0) { when = DBaseStates.isNotActive; }
        DBaseStates.bind(destination, DBaseState.DISABLED, source, when);
    };
    return DBaseStates;
}());
export { DBaseStates };
//# sourceMappingURL=d-base-states.js.map