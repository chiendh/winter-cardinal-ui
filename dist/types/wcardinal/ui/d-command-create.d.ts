import { DCommand } from "./d-command";
import { DCommandFlag } from "./d-command-flag";
export declare abstract class DCommandCreate implements DCommand {
    abstract execute(): Promise<unknown> | boolean;
    redo(): Promise<unknown> | boolean;
    undo(): Promise<unknown> | boolean;
    destroy(): void;
    getFlag(): DCommandFlag;
}
