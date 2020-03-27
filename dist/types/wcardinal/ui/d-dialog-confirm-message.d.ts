import { DImage, DImageOptions, DThemeImage } from "./d-image";
export interface DDialogConfirmMessageOptions<VALUE = unknown, THEME extends DThemeDialogConfirmMessage = DThemeDialogConfirmMessage> extends DImageOptions<VALUE, THEME> {
}
export interface DThemeDialogConfirmMessage extends DThemeImage {
}
export declare class DDialogConfirmMessage<VALUE = unknown, THEME extends DThemeDialogConfirmMessage = DThemeDialogConfirmMessage, OPTIONS extends DDialogConfirmMessageOptions<VALUE, THEME> = DDialogConfirmMessageOptions<VALUE, THEME>> extends DImage<VALUE, THEME, OPTIONS> {
    constructor(options?: OPTIONS);
    protected getType(): string;
}
