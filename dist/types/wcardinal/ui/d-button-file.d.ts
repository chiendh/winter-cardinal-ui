import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { UtilFileAs, UtilFileOnOptions, UtilFileOpener } from "./util/util-file-opener";
export import DButtonFileAs = UtilFileAs;
/**
 * Mappings of event names and handlers.
 */
export interface DButtonFileOnOptions<VALUE> extends DButtonOnOptions<VALUE>, UtilFileOnOptions<any> {
}
export interface DButtonFileOptions<VALUE = unknown, THEME extends DThemeButtonFile = DThemeButtonFile> extends DButtonOptions<VALUE, THEME> {
    /**
     * An output format.
     */
    as?: (keyof typeof UtilFileAs) | UtilFileAs;
    /**
     * A checker called before opening a file.
     * If the checker returns false or the returned promise object is rejected,
     * files will not be opened.
     */
    checker?: () => Promise<unknown> | boolean;
    on?: DButtonFileOnOptions<VALUE>;
}
export interface DThemeButtonFile extends DThemeButton {
}
export declare class DButtonFile<VALUE = unknown, THEME extends DThemeButtonFile = DThemeButtonFile, OPTIONS extends DButtonFileOptions<VALUE, THEME> = DButtonFileOptions<VALUE, THEME>> extends DButton<VALUE, THEME, OPTIONS> {
    protected _checker: (() => Promise<unknown> | boolean) | undefined;
    protected _opener: UtilFileOpener;
    protected init(options?: OPTIONS): void;
    onOpening(): boolean | Promise<unknown>;
    open(): void;
    protected getType(): string;
}
