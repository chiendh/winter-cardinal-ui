import { DText, DTextOptions, DThemeText } from "./d-text";
export interface DNoteOptions<VALUE = unknown, THEME extends DThemeNote = DThemeNote> extends DTextOptions<VALUE, THEME> {
}
export interface DThemeNote extends DThemeText {
}
export declare class DNote<VALUE = unknown, THEME extends DThemeNote = DThemeNote, OPTIONS extends DNoteOptions<VALUE, THEME> = DNoteOptions<VALUE, THEME>> extends DText<VALUE, THEME, OPTIONS> {
    protected init(options?: OPTIONS): void;
    protected getType(): string;
}
