import { DBase } from "../d-base";
export interface UtilKeyboardEventShortcut {
    alt: boolean;
    ctrl: boolean;
    shift: boolean;
    key: string;
    which: number;
    event?: string;
}
export declare class UtilKeyboardEvent {
    static isActivateKey(e: KeyboardEvent): boolean;
    static isArrowUpKey(e: KeyboardEvent): boolean;
    static isArrowDownKey(e: KeyboardEvent): boolean;
    static isArrowLeftKey(e: KeyboardEvent): boolean;
    static isArrowRightKey(e: KeyboardEvent): boolean;
    static isCancelKey(e: KeyboardEvent): boolean;
    static isFocusKey(e: KeyboardEvent): boolean;
    static isUndoKey(e: KeyboardEvent): boolean;
    static isRedoKey(e: KeyboardEvent): boolean;
    static isSaveKey(e: KeyboardEvent): boolean;
    static isSaveAsKey(e: KeyboardEvent): boolean;
    static isDeleteKey(e: KeyboardEvent): boolean;
    static isSelectAllKey(e: KeyboardEvent): boolean;
    static isOkKey(e: KeyboardEvent): boolean;
    static getFocusDirection(e: KeyboardEvent): boolean;
    static toShortcut(expressionOrShortcut: string | UtilKeyboardEventShortcut): UtilKeyboardEventShortcut;
    static toString(shortcut: UtilKeyboardEventShortcut): string;
    static on(target: DBase<any, any>, expressionOrShortcut: string | UtilKeyboardEventShortcut, handler?: (e: KeyboardEvent) => void): void;
}
