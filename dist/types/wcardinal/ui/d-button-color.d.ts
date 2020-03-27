import { DBaseState } from "./d-base-state";
import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { DColorAndAlpha } from "./d-color";
import { DDialogColor, DDialogColorOptions } from "./d-dialog-color";
import { DImagePieceOptions, DImagePieceTintOptions } from "./d-image-piece";
import { DPickerColorAndAlpha } from "./d-picker-color-and-alpha";
/**
 * Mappings of event names and handlers.
 */
export interface DButtonColorOnOptions extends DButtonOnOptions<DColorAndAlpha> {
    /**
     * Triggered when a selection is changed.
     *
     * @param newValue a newly selected value
     * @param oldValue a previously selected value
     * @param self a button
     */
    change?: (newValue: DColorAndAlpha, oldValue: DColorAndAlpha, self: any) => void;
}
export interface DButtonColorOptions<THEME extends DThemeButtonColor = DThemeButtonColor> extends DButtonOptions<DColorAndAlpha, THEME> {
    /**
     * A dialog to pick a color.
     */
    dialog?: DDialogColorOptions;
    on?: DButtonColorOnOptions;
}
export interface DThemeButtonColor extends DThemeButton {
    getTextFormatter(): (value: DColorAndAlpha, caller: DButtonColor) => string;
    getTextValue(state: DBaseState): DColorAndAlpha;
    newTextValue(): DColorAndAlpha;
}
export declare class DButtonColor<THEME extends DThemeButtonColor = DThemeButtonColor, OPTIONS extends DButtonColorOptions<THEME> = DButtonColorOptions<THEME>> extends DButton<DColorAndAlpha, THEME, OPTIONS> {
    protected static DIALOG?: DDialogColor;
    protected _dialog?: DDialogColor;
    protected _value: DPickerColorAndAlpha;
    protected init(options?: OPTIONS): void;
    protected toImageTintOptions(tint?: DImagePieceTintOptions): DImagePieceTintOptions;
    protected toImageOptions(theme: THEME, options?: DImagePieceOptions): DImagePieceOptions | undefined;
    protected onColorChange(): void;
    protected updateTextForcibly(): void;
    get dialog(): DDialogColor;
    get value(): DColorAndAlpha;
    protected getType(): string;
}
