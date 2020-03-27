import { DButton } from "./d-button";
import { DCoordinatePosition, DCoordinateSize } from "./d-coordinate";
import { DDialog, DDialogOptions, DThemeDialog } from "./d-dialog";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutVertical } from "./d-layout-vertical";
export interface DDialogCommandOptions<THEME extends DThemeDialogCommand = DThemeDialogCommand> extends DDialogOptions<THEME> {
    ok?: string;
    cancel?: string;
}
export interface DThemeDialogCommand extends DThemeDialog {
    getOk(): string | null;
    getCancel(): string | null;
    getLayoutX(): DCoordinatePosition;
    getLayoutY(): DCoordinatePosition;
    getLayoutWidth(): DCoordinateSize;
    getLayoutHeight(): DCoordinateSize;
}
export declare class DDialogCommand<THEME extends DThemeDialogCommand = DThemeDialogCommand, OPTIONS extends DDialogCommandOptions<THEME> = DDialogCommandOptions<THEME>> extends DDialog<THEME, OPTIONS> {
    protected _promise: Promise<void> | null;
    protected _resolve: (() => void) | null;
    protected _reject: (() => void) | null;
    protected _buttonLayout?: DLayoutHorizontal;
    protected _buttonOk?: DButton;
    protected _buttonCancel?: DButton;
    protected init(options?: OPTIONS): void;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    open(): Promise<void>;
    protected onOpen(): void;
    protected onClose(): void;
    protected onOk(): void;
    protected onCancel(): void;
    protected getType(): string;
}
