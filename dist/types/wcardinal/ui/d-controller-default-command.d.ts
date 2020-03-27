import { utils } from "pixi.js";
import { DCommand } from "./d-command";
import { DControllerCommand } from "./d-controller-command";
export declare class DControllerDefaultCommand extends utils.EventEmitter implements DControllerCommand {
    protected _position: number;
    protected _done: DCommand[];
    protected _waiting: DCommand[];
    protected _executing: Promise<void> | null;
    constructor();
    last(): DCommand | null;
    push(command: DCommand): void;
    next(): void;
    protected cleanup(): void;
    protected remove(size: number): boolean;
    protected onSuccess(command: DCommand): void;
    protected onFail(command: DCommand): void;
    size(): number;
    clear(): void;
    redo(): void;
    undo(): void;
    isRedoable(): boolean;
    isUndoable(): boolean;
}
