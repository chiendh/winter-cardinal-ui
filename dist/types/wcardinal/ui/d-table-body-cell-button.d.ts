import { interaction } from "pixi.js";
import { DTableBodyCellText, DTableBodyCellTextOptions, DThemeTableBodyCellText } from "./d-table-body-cell-text";
export interface DTableBodyCellButtonOptions<ROW, THEME extends DThemeTableBodyCellButton = DThemeTableBodyCellButton> extends DTableBodyCellTextOptions<ROW, THEME> {
}
export interface DThemeTableBodyCellButton extends DThemeTableBodyCellText {
}
export declare class DTableBodyCellButton<ROW, THEME extends DThemeTableBodyCellButton = DThemeTableBodyCellButton, OPTIONS extends DTableBodyCellButtonOptions<ROW, THEME> = DTableBodyCellButtonOptions<ROW, THEME>> extends DTableBodyCellText<ROW, THEME, OPTIONS> {
    constructor(options: OPTIONS);
    protected init(options: OPTIONS): void;
    protected initOnClick(options: OPTIONS): void;
    protected onActive(e: KeyboardEvent | interaction.InteractionEvent): void;
    protected onActivateKeyDown(e: KeyboardEvent): void;
    protected onActivateKeyUp(e: KeyboardEvent): void;
    onKeyDown(e: KeyboardEvent): boolean;
    onKeyUp(e: KeyboardEvent): boolean;
    protected onStateChange(newState: number, oldState: number): void;
    protected getType(): string;
}
