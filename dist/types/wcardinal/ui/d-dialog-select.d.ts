import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DDialogSelectList } from "./d-dialog-select-list";
import { DDialogSelectListItem } from "./d-dialog-select-list-item";
import { DInputText } from "./d-input-text";
import { DLayoutVertical } from "./d-layout-vertical";
import { DNote, DNoteOptions } from "./d-note";
export interface DDialogSelectSearch<SEARCH_RESULT> {
    create(args: [string]): void;
    on(event: "success", handler: (e: unknown, searchResults: SEARCH_RESULT[]) => void): void;
    on(event: "change", handler: () => void): void;
    isDone(): boolean;
    getResult(): SEARCH_RESULT[] | null;
}
export declare type DDialogSelectSearchFunction<SEARCH_RESULT> = (word: string) => Promise<SEARCH_RESULT[]>;
export interface DDialogSelectController<SEARCH_RESULT> {
    search: DDialogSelectSearch<SEARCH_RESULT> | DDialogSelectSearchFunction<SEARCH_RESULT>;
}
export interface DDialogSelectNoteOptions {
    noItems?: DNoteOptions;
    searching?: DNoteOptions;
}
export declare type DDialogSelectItemTextFormatter<SEARCH_RESULT> = (result: SEARCH_RESULT, caller: any) => string;
export interface DDialogSelectItemTextOptions<SEARCH_RESULT> {
    formatter?: DDialogSelectItemTextFormatter<SEARCH_RESULT>;
}
export interface DDialogSelectItemOptions<SEARCH_RESULT> {
    text?: DDialogSelectItemTextOptions<SEARCH_RESULT>;
}
export interface DDialogSelectOptions<SEARCH_RESULT, THEME extends DThemeDialogSelect = DThemeDialogSelect> extends DDialogCommandOptions<THEME> {
    controller?: DDialogSelectController<SEARCH_RESULT>;
    item?: DDialogSelectItemOptions<SEARCH_RESULT>;
    note?: DDialogSelectNoteOptions;
}
export interface DThemeDialogSelect extends DThemeDialogCommand {
    getItemTextFormatter(): DDialogSelectItemTextFormatter<any>;
    getNoteNoItemsText(): string;
    getNoteSearchingText(): string;
}
export declare class DDialogSelect<SEARCH_RESULT extends unknown = unknown, THEME extends DThemeDialogSelect = DThemeDialogSelect, OPTIONS extends DDialogSelectOptions<SEARCH_RESULT, THEME> = DDialogSelectOptions<SEARCH_RESULT, THEME>> extends DDialogCommand<THEME, OPTIONS> {
    protected _value: SEARCH_RESULT | null;
    protected _input: DInputText;
    protected _list: DDialogSelectList;
    protected _noteNoItems: DNote;
    protected _noteSearching: DNote;
    protected _itemTextFormatter: DDialogSelectItemTextFormatter<SEARCH_RESULT>;
    protected _search: DDialogSelectSearch<SEARCH_RESULT>;
    protected onInit(layout: DLayoutVertical, options?: OPTIONS): void;
    protected onSearched(results: SEARCH_RESULT[]): void;
    protected newItem(result: SEARCH_RESULT, label: string): DDialogSelectListItem<SEARCH_RESULT>;
    get value(): SEARCH_RESULT | null;
    protected getType(): string;
    protected onOpen(): void;
    protected onOk(): void;
    destroy(): void;
}
