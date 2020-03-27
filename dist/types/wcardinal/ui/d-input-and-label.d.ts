import { DisplayObject } from "pixi.js";
import { DInputLabel, DInputLabelOptions } from "./d-input-label";
import { DLayoutOptions } from "./d-layout";
import { DLayoutHorizontal, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpaceOptions } from "./d-layout-space";
interface InputOptions {
    weight?: number;
}
interface Input extends DisplayObject {
    readonly height: number;
}
export interface DInputAndLabelOptions<INPUT_OPTIONS extends InputOptions = InputOptions, THEME extends DThemeInputAndLabel = DThemeInputAndLabel> extends DLayoutOptions<THEME> {
    input?: INPUT_OPTIONS;
    label?: DInputLabelOptions;
    space?: DLayoutSpaceOptions;
}
export interface DThemeInputAndLabel extends DThemeLayoutHorizontal {
}
export declare abstract class DInputAndLabel<INPUT extends Input, INPUT_OPTIONS extends InputOptions, THEME extends DThemeInputAndLabel = DThemeInputAndLabel, OPTIONS extends DInputAndLabelOptions<INPUT_OPTIONS, THEME> = DInputAndLabelOptions<INPUT_OPTIONS, THEME>> extends DLayoutHorizontal<THEME, OPTIONS> {
    protected _input: INPUT;
    protected _label: DInputLabel;
    constructor(options?: OPTIONS);
    get input(): INPUT;
    get label(): DInputLabel<unknown, import("./d-input-label").DThemeInputLabel, DInputLabelOptions<unknown, import("./d-input-label").DThemeInputLabel>>;
    protected abstract createInput(options?: INPUT_OPTIONS | {
        weight: number;
    }): INPUT;
    protected getType(): string;
}
export {};
