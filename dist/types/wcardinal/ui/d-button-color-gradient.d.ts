import { Texture } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogColorGradient, DDialogColorGradientOptions } from "./d-dialog-color-gradient";
import { DPickerColorGradientData, DPickerColorGradientDataLike } from "./d-picker-color-gradient-data";
import { DPickerColorGradientDataView } from "./d-picker-color-gradient-data-view";
export interface DButtonColorGradientOnOptions extends DButtonOnOptions<DPickerColorGradientData> {
    /**
     * Triggered when a selection is changed.
     *
     * @param newValue a newly selected value
     * @param oldValue a previously selected value
     * @param self a button
     */
    change?: (newValue: DPickerColorGradientDataLike, oldValue: DPickerColorGradientDataLike, self: any) => void;
}
export interface DButtonColorGradientOptions<THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient> extends DButtonOptions<DPickerColorGradientData, THEME> {
    dialog?: DDialogColorGradientOptions;
    on?: DButtonColorGradientOnOptions;
}
export interface DThemeButtonColorGradient extends DThemeButton {
    getViewBaseTexture(): Texture | null;
    getTextFormatter(): (value: DPickerColorGradientData, caller: DButtonColorGradient) => string;
    getTextValue(state: DBaseState): DPickerColorGradientData;
    newTextValue(): DPickerColorGradientData;
}
export declare class DButtonColorGradient<THEME extends DThemeButtonColorGradient = DThemeButtonColorGradient, OPTIONS extends DButtonColorGradientOptions<THEME> = DButtonColorGradientOptions<THEME>> extends DButton<DPickerColorGradientData, THEME, OPTIONS> {
    protected static DIALOG?: DDialogColorGradient;
    protected _dialog?: DDialogColorGradient;
    protected _dialogOptions?: DDialogColorGradientOptions;
    protected _view?: DPickerColorGradientDataView;
    protected init(options?: OPTIONS): void;
    get dialog(): DDialogColorGradient;
    get value(): DPickerColorGradientData;
    protected getType(): string;
}
