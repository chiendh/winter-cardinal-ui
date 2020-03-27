import { Point } from "pixi.js";
import { DAnimation } from "./d-animation";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DFocusable } from "./d-controller-focus";
import { DDialogCloseOn } from "./d-dialog-close-on";
import { UtilOverlay } from "./util/util-overlay";
export interface DDialogOptions<THEME extends DThemeDialog = DThemeDialog> extends DBaseOptions<THEME> {
    closeOn?: DDialogCloseOn;
    animation?: DAnimation<DBase>;
}
export interface DThemeDialog extends DThemeBase {
    closeOn(): DDialogCloseOn;
}
/**
 * A base class for dialogs.
 *
 * If multiple application instances are there, better to set
 * the constructor option `parent` to an `application.stage`
 * so that the dialog picks a right application.
 *
 * By default, the dialog assumes the last created application is
 * the one it belongs to at the time when it is created.
 */
export declare class DDialog<THEME extends DThemeDialog = DThemeDialog, OPTIONS extends DDialogOptions<THEME> = DDialogOptions<THEME>> extends DBase<THEME, OPTIONS> {
    protected _animation: DAnimation<DBase>;
    protected _closeOn: DDialogCloseOn;
    protected _focusable: DFocusable | null;
    protected _isOpened: boolean;
    protected _overlay: UtilOverlay;
    protected init(options?: OPTIONS): void;
    protected onAnimationEnd(isReverse: boolean): void;
    open(): void;
    protected onOpen(): void;
    isOpened(): boolean;
    close(): void;
    protected onClose(): void;
    protected getType(): string;
    onKeyDown(e: KeyboardEvent): boolean;
    protected onCloseOn(): void;
    protected containsGlobalPoint(point: Point): boolean;
}
