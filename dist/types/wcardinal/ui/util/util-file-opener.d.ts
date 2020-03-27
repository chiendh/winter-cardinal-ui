/**
 * An output format.
 */
export declare enum UtilFileAs {
    TEXT = 0,
    DATA_URL = 1,
    BINARY_STRING = 2,
    ARRAY_BUTTER = 3
}
export interface UtilFileFacade {
    emit(name: string, ...args: any[]): void;
}
/**
 * An `open` event handler.
 *
 * @param result a file contents
 * @param self an event emitter
 */
export declare type UtilFileOnOpen<RESULT, SELF> = (result: RESULT, self: SELF) => void;
/**
 * Mappings of event names and halders.
 */
export interface UtilFileOnOptions<SELF> {
    /**
     * Triggered when a file is opened.
     */
    open?: UtilFileOnOpen<string, SELF> | UtilFileOnOpen<ArrayBuffer, SELF>;
    /**
     * Triggered when an operation is aborted.
     *
     * @param e an event object
     * @param en event emitter
     */
    abort?: (e: ProgressEvent, self: SELF) => void;
    /**
     * Triggered when an operation is canceled.
     *
     * @param en event emitter
     */
    cancel?: (self: SELF) => void;
}
export declare class UtilFileOpener {
    protected _input: HTMLInputElement | null;
    protected _as: UtilFileAs;
    protected _facade: UtilFileFacade;
    constructor(as: UtilFileAs, facade: UtilFileFacade);
    open(): void;
    protected getOrCreateInput(): HTMLInputElement | null;
    protected onInputChange(input: HTMLInputElement): void;
    protected onOpen(result: string | ArrayBuffer): void;
    protected onAboart(e: ProgressEvent): void;
    protected onCancel(): void;
}
