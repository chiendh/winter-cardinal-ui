import { utils } from "pixi.js";
export declare class DDialogSelectSearh<SEARCH_RESULT> extends utils.EventEmitter {
    protected _search: (word: string) => Promise<SEARCH_RESULT[]>;
    protected _id: number;
    protected _idCompleted: number;
    protected _result: SEARCH_RESULT[] | null;
    constructor(search?: (word: string) => Promise<SEARCH_RESULT[]>);
    create(args: [string]): void;
    isDone(): boolean;
    getResult(): SEARCH_RESULT[] | null;
}
