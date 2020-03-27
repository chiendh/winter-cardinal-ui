import { DDialogConfirm, DDialogConfirmOptions, DThemeDialogConfirm } from "./d-dialog-confirm";
import { DDialogConfirmMessage, DDialogConfirmMessageOptions } from "./d-dialog-confirm-message";
export interface DDialogProcessingOptions<THEME extends DThemeDialogProcessing> extends DDialogConfirmOptions<THEME> {
    interval?: number;
}
export interface DThemeDialogProcessing extends DThemeDialogConfirm {
    getInterval(): number;
}
export declare class DDialogProcessing<THEME extends DThemeDialogProcessing = DThemeDialogProcessing, OPTIONS extends DDialogProcessingOptions<THEME> = DDialogProcessingOptions<THEME>> extends DDialogConfirm<THEME, OPTIONS> {
    protected _isDone: boolean;
    protected _startTime: number;
    protected _interval: number;
    protected _timeoutId?: number;
    constructor(options?: OPTIONS);
    protected newMessage(options: DDialogConfirmMessageOptions): DDialogConfirmMessage;
    protected onOpen(): void;
    protected onDone(): void;
    protected onResolved(message?: string): void;
    protected onRejected(message?: string): void;
    resolve(message?: string): void;
    reject(message?: string): void;
    protected onCloseOn(): void;
    protected getType(): string;
}
