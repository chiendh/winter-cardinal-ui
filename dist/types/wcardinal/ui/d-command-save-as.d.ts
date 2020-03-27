import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";
export declare class DCommandSaveAs implements DCommand {
    protected _name: string;
    constructor(name: string);
    execute(): Promise<unknown> | boolean;
    redo(): Promise<unknown> | boolean;
    undo(): Promise<unknown> | boolean;
    destroy(): void;
    getFlag(): DCommandFlag;
}
