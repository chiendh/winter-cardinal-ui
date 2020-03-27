import { DButton, DButtonOptions, DThemeButton } from "./d-button";
export declare class DButtonRedo<VALUE = unknown, THEME extends DThemeButton = DThemeButton, OPTIONS extends DButtonOptions<VALUE, THEME> = DButtonOptions<VALUE, THEME>> extends DButton<VALUE, THEME, OPTIONS> {
    constructor(options?: OPTIONS);
}
