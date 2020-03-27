import { DControllerCommand } from "./d-controller-command";
import { DControllerDocument } from "./d-controller-document";
import { DControllerKeyboard } from "./d-controller-keyboard";
import { DDocument } from "./d-document";
export declare class DControllers {
    protected static KEYBOARD: DControllerKeyboard | null;
    protected static COMMAND: DControllerCommand | null;
    protected static DOCUMENT: DControllerDocument<any> | null;
    static getKeyboardController(): DControllerKeyboard;
    static setKeyboardController(instance: DControllerKeyboard): DControllerKeyboard | null;
    static getCommandController(): DControllerCommand;
    static setCommandController(instance: DControllerCommand): DControllerCommand | null;
    static getDocumentController<DOCUMENT extends DDocument>(): DControllerDocument<DOCUMENT>;
    static setDocumentController<DOCUMENT extends DDocument>(instance: DControllerDocument<DOCUMENT>): DControllerDocument<DOCUMENT> | null;
}
