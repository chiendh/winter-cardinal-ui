import { DCommandFlag } from "./d-command-flag";
export interface DCommand {
    /**
     * Called to executed this command.
     */
    execute(): Promise<unknown> | boolean;
    redo(): Promise<unknown> | boolean;
    undo(): Promise<unknown> | boolean;
    destroy(): void;
    getFlag(): DCommandFlag;
}
