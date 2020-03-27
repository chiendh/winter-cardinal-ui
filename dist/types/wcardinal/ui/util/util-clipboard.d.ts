import { utils } from "pixi.js";
export declare class UtilClipboard extends utils.EventEmitter {
    constructor();
    static copy(text: string): void;
}
