import { Container, utils } from "pixi.js";
import { DControllerFocus } from "./d-controller-focus";
export declare class DControllerKeyboard extends utils.EventEmitter {
    init(element: HTMLElement, stage: Container, focusController: DControllerFocus): void;
    protected hasOnKeyDown(target: any): target is {
        onKeyDown(e: KeyboardEvent): boolean;
    };
    protected hasOnKeyUp(target: any): target is {
        onKeyUp(e: KeyboardEvent): boolean;
    };
}
