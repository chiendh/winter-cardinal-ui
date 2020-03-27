import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";
export declare class DCommandUndo implements DCommand {
    execute(): Promise<void> | boolean;
    redo(): Promise<void> | boolean;
    undo(): Promise<void> | boolean;
    destroy(): void;
    getFlag(): DCommandFlag;
}
